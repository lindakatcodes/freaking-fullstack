export const schema = gql`
  type User {
    id: Int!
    email: String!
    nickname: String
    firstName: String
    lastName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    youtube: String
    linkedin: String
    github: String
    sharedLinks: [SharedLink]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    nickname: String
    firstName: String
    lastName: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    youtube: String
    linkedin: String
    github: String
  }

  input UpdateUserInput {
    email: String
    nickname: String
    firstName: String
    lastName: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    youtube: String
    linkedin: String
    github: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
