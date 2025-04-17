import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { CREATE_LINK_VOTE, DELETE_LINK_VOTE } from 'src/mutations'

type RefetchQueryConfig = {
  query: TypedDocumentNode<Record<string, unknown>, Record<string, unknown>>
  variables?: Record<string, unknown>
}

interface UseLinkVotesOptions {
  onVoteSuccess?: () => void
  onVoteRemoveSuccess?: () => void
  refetchQueries?: RefetchQueryConfig[]
}

export const useLinkVotes = ({
  onVoteSuccess = () => console.log('link upvoted'),
  onVoteRemoveSuccess = () => console.log('link upvote removed'),
  refetchQueries = [],
}: UseLinkVotesOptions) => {
  const [createLinkUserVote, { loading: createLoading, error: createError }] =
    useMutation(CREATE_LINK_VOTE, {
      onCompleted: onVoteSuccess,
      refetchQueries,
    })

  const [deleteLinkUserVote, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_LINK_VOTE, {
      onCompleted: onVoteRemoveSuccess,
      refetchQueries,
    })

  const handleLinkUpvote = async (linkId: string, userId: number | null) => {
    if (!userId) {
      toast.error('You need to be signed in to upvote!')
      return
    }

    const upvote = {
      linkId,
      userId,
    }

    return createLinkUserVote({ variables: { input: upvote } })
  }

  const handleLinkDownvote = async (voteId: string) => {
    return deleteLinkUserVote({ variables: { id: voteId } })
  }

  return {
    createLinkUserVote,
    deleteLinkUserVote,
    handleLinkUpvote,
    handleLinkDownvote,
    loading: createLoading || deleteLoading,
    error: createError || deleteError,
  }
}
