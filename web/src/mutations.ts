// Links
export const CREATE_SHARED_LINK = gql`
  mutation CreateSharedLinkMutation($input: CreateSharedLinkInput!) {
    createSharedLink(input: $input) {
      id
    }
  }
`
export const DELETE_SHARED_LINK = gql`
  mutation DeleteSharedLink($id: String!) {
    deleteSharedLink(id: $id) {
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

// Comments
export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: String!) {
    deleteComment(id: $id) {
      id
    }
  }
`

export const CREATE_COMMENT_VOTE = gql`
  mutation CreateCommentVote($input: CreateCommentUserVoteInput!) {
    createCommentUserVote(input: $input) {
      id
    }
  }
`

export const DELETE_COMMENT_VOTE = gql`
  mutation DeleteCommentVote($id: String!) {
    deleteCommentUserVote(id: $id) {
      id
    }
  }
`
