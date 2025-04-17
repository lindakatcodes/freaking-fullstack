import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { CREATE_COMMENT_VOTE, DELETE_COMMENT_VOTE } from 'src/mutations'

type RefetchQueryConfig = {
  query: TypedDocumentNode<Record<string, unknown>, Record<string, unknown>>
  variables?: Record<string, unknown>
}

interface UseCommentVotesOptions {
  onVoteSuccess?: () => void
  onVoteRemoveSuccess?: () => void
  refetchQueries?: RefetchQueryConfig[]
}

export const useCommentVotes = ({
  onVoteSuccess = () => console.log('comment upvoted'),
  onVoteRemoveSuccess = () => console.log('comment upvote removed'),
  refetchQueries = [],
}: UseCommentVotesOptions) => {
  const [
    createCommentUserVote,
    { loading: createLoading, error: createError },
  ] = useMutation(CREATE_COMMENT_VOTE, {
    onCompleted: onVoteSuccess,
    refetchQueries,
  })

  const [
    deleteCommentUserVote,
    { loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_COMMENT_VOTE, {
    onCompleted: onVoteRemoveSuccess,
    refetchQueries,
  })

  const handleCommentUpvote = async (
    commentId: string,
    userId: number | null
  ) => {
    if (!userId) {
      toast.error('You need to be signed in to upvote!')
      return
    }

    const upvote = {
      commentId,
      userId,
    }

    return createCommentUserVote({ variables: { input: upvote } })
  }

  const handleCommentDownvote = async (voteId: string) => {
    return deleteCommentUserVote({ variables: { id: voteId } })
  }

  return {
    createCommentUserVote,
    deleteCommentUserVote,
    handleCommentUpvote,
    handleCommentDownvote,
    loading: createLoading || deleteLoading,
    error: createError || deleteError,
  }
}
