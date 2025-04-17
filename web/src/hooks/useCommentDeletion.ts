import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { DELETE_COMMENT } from 'src/mutations'

type RefetchQueryConfig = {
  query: TypedDocumentNode<Record<string, unknown>, Record<string, unknown>>
  variables?: Record<string, unknown>
}

interface UseCommentDeletionOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
  refetchQueries?: RefetchQueryConfig[]
}

export const useCommentDeletion = ({
  onSuccess = () => console.log('comment has been deleted'),
  onError = (error) =>
    toast.error(
      `Sorry, there was an issue deleting this comment: ${error.message}`
    ),
  refetchQueries = [],
}: UseCommentDeletionOptions = {}) => {
  const [deleteComment, { loading, error }] = useMutation(DELETE_COMMENT, {
    onCompleted: onSuccess,
    onError,
    refetchQueries,
  })

  const handleCommentDeletion = async (commentId: string) => {
    return deleteComment({ variables: { id: commentId } })
  }

  return {
    deleteComment,
    handleCommentDeletion,
    loading,
    error,
  }
}
