export const schema = gql`
  type SharedLink {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    url: String!
    submittedBy: User!
    submittedById: Int!
  }

  type Query {
    sharedLinks: [SharedLink!]! @requireAuth
    sharedLink(id: String!): SharedLink @requireAuth
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
