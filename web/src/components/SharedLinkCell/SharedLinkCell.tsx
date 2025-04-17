import { useForm } from 'react-hook-form'
import type {
  FindSharedLinkQuery,
  FindSharedLinkQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { useLinkVotes } from 'src/hooks/useLinkVotes'
import { CREATE_COMMENT } from 'src/mutations'

import CommentForm from '../CommentForm/CommentForm'
import CommentsCell from '../CommentsCell'
import { QUERY as CommentsQuery } from '../CommentsCell'
import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  FindSharedLinkQuery,
  FindSharedLinkQueryVariables
> = gql`
  query FindSharedLinkQuery($id: String!) {
    sharedLink: sharedLink(id: $id) {
      id
      title
      url
      points
      submittedBy {
        id
        displayName
        email
      }
      comments {
        id
      }
      linkVotes {
        linkId
        userId
        id
      }
    }
  }
`

export interface CommentData {
  comment: string
}

export const Loading = () => (
  <div className="mt-8 text-center text-xl font-bold">
    Fetching info for that link...
  </div>
)

export const Empty = () => (
  <div className="mt-8 text-center text-xl font-bold">
    <p>Oops! Looks like there is no link here.</p>
    <Link
      to={routes.home()}
      className="text-pink-700 underline hover:text-black"
    >
      Go back to the feed and find another link?
    </Link>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindSharedLinkQueryVariables>) => (
  <div className="mt-8 text-center text-xl font-bold text-red-700">
    Error: {error?.message}
  </div>
)

export const Success = ({
  sharedLink,
}: CellSuccessProps<FindSharedLinkQuery, FindSharedLinkQueryVariables>) => {
  const { currentUser } = useAuth()
  const formMethods = useForm<CommentData>()

  const displayName =
    sharedLink.submittedBy.displayName ||
    sharedLink.submittedBy.email.slice(
      0,
      sharedLink.submittedBy.email.indexOf('@')
    )

  const commentCount = sharedLink.comments && sharedLink.comments.length

  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      toast.success('Comment successfully added!')
      formMethods.reset()
    },
    refetchQueries: [
      { query: CommentsQuery, variables: { linkId: sharedLink.id } },
      { query: QUERY, variables: { id: sharedLink.id } },
    ],
  })

  const { handleLinkUpvote, handleLinkDownvote } = useLinkVotes({
    refetchQueries: [{ query: QUERY, variables: { id: sharedLink.id } }],
  })

  const onSubmit = async (data: CommentData) => {
    if (!currentUser) {
      formMethods.reset()
      return toast.error('you must be signed in to leave a comment.')
    }
    const comment = {
      body: data.comment,
      authorId: currentUser.id,
      linkId: sharedLink.id,
    }
    createComment({ variables: { input: comment } })
  }

  const handleLinkVote = async () => {
    if (!currentUser) {
      toast.error('You need to be signed in to upvote!')
      return
    }

    const userUpvoteStatus = sharedLink.linkVotes?.find(
      (vote) => vote.userId === currentUser.id
    )

    if (!userUpvoteStatus) {
      handleLinkUpvote(sharedLink.id, currentUser.id)
    } else {
      handleLinkDownvote(userUpvoteStatus.id)
    }
  }

  const deleteLinkHandler = () => {
    toast.error(
      'Links you have shared can only be deleted from the main page or your shared links page.'
    )
  }

  return (
    <>
      <div className="mb-8">
        <SharedLink
          linkId={sharedLink.id}
          title={sharedLink.title}
          link={sharedLink.url}
          points={sharedLink.points}
          displayName={displayName}
          commentCount={commentCount}
          handleUpvoteClick={handleLinkVote}
          activeUser={currentUser?.id || null}
          linkVotes={sharedLink.linkVotes || []}
          handleLinkDeletion={deleteLinkHandler}
        />
      </div>

      <div className="mx-auto mb-8 w-4/5 lg:w-3/5">
        <CommentForm
          formMethods={formMethods}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
        />
      </div>

      <div className="mx-auto w-4/5 pb-8 lg:w-3/5">
        <CommentsCell linkId={sharedLink.id} />
      </div>
    </>
  )
}
