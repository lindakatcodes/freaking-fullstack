export const schema = gql`
  type LinkUserVote {
    id: String!
    createdAt: DateTime!
    linkId: String!
    link: SharedLink!
    userId: Int!
    user: User!
  }

  type Query {
    linkUserVotes(linkId: String!): [LinkUserVote!]! @requireAuth
    linkUserVote(id: String!): LinkUserVote @requireAuth
  }

  input CreateLinkUserVoteInput {
    linkId: String!
    userId: Int!
  }

  input UpdateLinkUserVoteInput {
    linkId: String
    userId: Int
  }

  type Mutation {
    createLinkUserVote(input: CreateLinkUserVoteInput!): LinkUserVote!
      @requireAuth
    updateLinkUserVote(
      id: String!
      input: UpdateLinkUserVoteInput!
    ): LinkUserVote! @requireAuth
    deleteLinkUserVote(id: String!): LinkUserVote! @requireAuth
  }
`
