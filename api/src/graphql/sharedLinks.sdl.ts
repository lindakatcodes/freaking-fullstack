export const schema = gql`
  type SharedLink {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    url: String!
  }

  type Query {
    sharedLinks: [SharedLink!]! @requireAuth
    sharedLink(id: Int!): SharedLink @requireAuth
  }

  input CreateSharedLinkInput {
    title: String!
    url: String!
  }

  input UpdateSharedLinkInput {
    title: String
    url: String
  }

  type Mutation {
    createSharedLink(input: CreateSharedLinkInput!): SharedLink! @requireAuth
    updateSharedLink(id: Int!, input: UpdateSharedLinkInput!): SharedLink!
      @requireAuth
    deleteSharedLink(id: Int!): SharedLink! @requireAuth
  }
`
