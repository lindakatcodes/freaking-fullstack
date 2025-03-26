import { useForm } from 'react-hook-form'
import type {
  FindSharedLinkQuery,
  FindSharedLinkQueryVariables,
  LinkUserVote,
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

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

export const CREATE_LINK_VOTE = gql`
  mutation CreateLinkVote($input: CreateLinkUserVoteInput!) {
    createLinkUserVote(input: $input) {
      id
    }
  }
`

export const DELETE_LINK_VOTE = gql`
  mutation DeleteLinkVote($id: String!) {
    deleteLinkUserVote(id: $id) {
      id
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
  <div className="mt-8 text-center text-xl font-bold text-red-600">
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

  const commentCount = sharedLink.comments.length

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

  const [createLinkUserVote] = useMutation(CREATE_LINK_VOTE, {
    onCompleted: () => {
      console.log('link upvoted')
    },
    refetchQueries: [{ query: QUERY, variables: { id: sharedLink.id } }],
  })

  const [deleteLinkUserVote] = useMutation(DELETE_LINK_VOTE, {
    onCompleted: () => {
      console.log('link upvote removed')
    },
    refetchQueries: [{ query: QUERY, variables: { id: sharedLink.id } }],
  })

  const onSubmit = async (data: CommentData) => {
    const comment = {
      body: data.comment,
      authorId: currentUser.id,
      linkId: sharedLink.id,
    }
    createComment({ variables: { input: comment } })
  }

  const handleLinkUpvote = async () => {
    if (!currentUser) {
      toast.error('You need to be signed in to upvote!')
      return
    }

    const userUpvoteStatus: Partial<LinkUserVote> | undefined =
      sharedLink.linkVotes?.find((vote) => vote.userId === currentUser.id)

    if (!userUpvoteStatus) {
      const upvote = {
        linkId: sharedLink.id,
        userId: currentUser.id,
      }
      createLinkUserVote({ variables: { input: upvote } })
    } else {
      deleteLinkUserVote({ variables: { id: userUpvoteStatus.id } })
    }
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
          handleUpvoteClick={handleLinkUpvote}
          activeUser={currentUser?.id || null}
          linkVotes={sharedLink.linkVotes || []}
        />
      </div>

      <div className="mx-auto w-3/5">
        <CommentForm
          formMethods={formMethods}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
        />
      </div>

      <div className="mx-auto w-3/5">
        <CommentsCell linkId={sharedLink.id} />
      </div>
    </>
  )
}
