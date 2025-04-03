export const schema = gql`
  type User {
    id: Int!
    email: String!
    displayName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    createdAt: DateTime!
    youtube: String
    linkedin: String
    github: String
    twitch: String
    bluesky: String
    website: String
    sharedLinks: [SharedLink]!
    comments: [Comment]!
    linkVotes: [LinkUserVote]!
    commentVotes: [CommentUserVote]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    displayName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    youtube: String
    linkedin: String
    github: String
    twitch: String
    bluesky: String
    website: String
  }

  input UpdateUserInput {
    email: String
    displayName: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    youtube: String
    linkedin: String
    github: String
    twitch: String
    bluesky: String
    website: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
