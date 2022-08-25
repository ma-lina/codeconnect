import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type User {
    firstName: String!
    lastName: String!
    isLoggedin: Boolean!
    username: String!
    image: String!
    _id: ID!
    isAdmin: Boolean!
    starredMentorship: [ID!]
    starredCoworking: [ID!]
    starredShadowing: [ID!]
  }

  type Mentoring {
    _id: ID!
    creator: User!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    offer: Boolean!
  }

  input InputFilter {
    field: [String]
    location: String
    date: Date
    techKnowHow: [String]
    level: [String]
    availability: [String]
    timeslots: [String]
    offer: Boolean
  }

  type Shadowing {
    _id: ID!
    creator: User!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    length: Int!
    offer: Boolean!
  }

  type Coworking {
    _id: ID!
    creator: User!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    starred: [User]
    time: Int!
    frequency: [String!]!
  }

  input MentoringInput {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    offer: Boolean!
  }

  input ShadowingInput {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    techKnowHow: [String!]!
    level: String!
    availability: [String!]!
    timeslots: [String!]!
    length: Int!
    offer: Boolean!
  }

  input CoworkingInput {
    creator: ID!
    field: [String!]!
    location: String!
    description: String!
    date: Date!
    time: Int!
    frequency: [String!]!
  }

  extend type Query {
    users: [User]
    mentoring(input: InputFilter): [Mentoring]
    shadowing(input: InputFilter): [Shadowing]
    coworking(input: InputFilter): [Coworking]
  }

  extend type Mutation {
    addMentoring(input: MentoringInput): Mentoring
    # updateAd():
    addShadowing(input: ShadowingInput): Shadowing
    addCoworking(input: CoworkingInput): Coworking
  }
`;
