export const schema = gql`
  type Comment {
    id: String!
    createdAt: DateTime!
    body: String!
    authorId: Int!
    author: User!
    linkId: String!
    link: SharedLink!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: String!): Comment @requireAuth
  }

  input CreateCommentInput {
    body: String!
    authorId: Int!
    linkId: String!
  }

  input UpdateCommentInput {
    body: String
    authorId: Int
    linkId: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: String!, input: UpdateCommentInput!): Comment!
      @requireAuth
    deleteComment(id: String!): Comment! @requireAuth
  }
`
