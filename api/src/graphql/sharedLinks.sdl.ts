export const schema = gql`
  type SharedLink {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    url: String!
    submittedBy: User!
    submittedById: Int!
    comments: [Comment]!
  }

  type Query {
    sharedLinks: [SharedLink!]! @skipAuth
    sharedLink(id: String!): SharedLink @skipAuth
  }

  input CreateSharedLinkInput {
    title: String!
    url: String!
    submittedById: Int!
  }

  input UpdateSharedLinkInput {
    title: String
    url: String
    submittedById: Int
  }

  type Mutation {
    createSharedLink(input: CreateSharedLinkInput!): SharedLink! @requireAuth
    updateSharedLink(id: String!, input: UpdateSharedLinkInput!): SharedLink!
      @requireAuth
    deleteSharedLink(id: String!): SharedLink! @requireAuth
  }
`
