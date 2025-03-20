export const schema = gql`
  type CommentUserVote {
    id: String!
    createdAt: DateTime!
    commentId: String!
    comment: Comment!
    userId: Int!
    user: User!
  }

  type Query {
    commentUserVotes(commentId: String!): [CommentUserVote!]! @requireAuth
    commentUserVote(id: String!): CommentUserVote @requireAuth
  }

  input CreateCommentUserVoteInput {
    commentId: String!
    userId: Int!
  }

  input UpdateCommentUserVoteInput {
    commentId: String
    userId: Int
  }

  type Mutation {
    createCommentUserVote(input: CreateCommentUserVoteInput!): CommentUserVote!
      @requireAuth
    updateCommentUserVote(
      id: String!
      input: UpdateCommentUserVoteInput!
    ): CommentUserVote! @requireAuth
    deleteCommentUserVote(id: String!): CommentUserVote! @requireAuth
  }
`
