import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { DELETE_SHARED_LINK } from 'src/mutations'

type RefetchQueryConfig = {
  query: TypedDocumentNode<Record<string, unknown>, Record<string, unknown>>
  variables?: Record<string, unknown>
}

interface UseLinkDeletionOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
  refetchQueries?: RefetchQueryConfig[]
}

export const useLinkDeletion = ({
  onSuccess = () => console.log('link has been deleted'),
  onError = (error) =>
    toast.error(
      `Sorry, there was an issue deleting this link: ${error.message}`
    ),
  refetchQueries = [],
}: UseLinkDeletionOptions = {}) => {
  const [deleteSharedLink, { loading, error }] = useMutation(
    DELETE_SHARED_LINK,
    {
      onCompleted: onSuccess,
      onError,
      refetchQueries,
    }
  )

  const handleLinkDeletion = async (linkId: string) => {
    return deleteSharedLink({ variables: { id: linkId } })
  }

  return {
    deleteSharedLink,
    handleLinkDeletion,
    loading,
    error,
  }
}
