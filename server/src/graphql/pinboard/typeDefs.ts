import { ObjectID } from "mongodb";
import { gql } from "apollo-server-express";
//import {  } from '../../@types';

export default gql`
scalar Date

type User {
  firstName: string;
  lastName: string;
  isLoggedin: boolean;
  username?: string;
  image?: string;
  _id: string;
  isAdmin?: boolean;
  starredMentorship?: ;
  starredCoworking?: ;
  starredShadowing?: ;
}

timestamps?

type Mentoring {
  creator: ID!, //TODO
  field: [string!]!,
  location: string!,
  description: string!,
  date: Date!,
  starred: [User],
  techKnowHow: [string!]!,
  level: string!,
  availability: [string!]!,
  timeslots: [string!]!,
  offer: boolean!,
};

type Shadowing {
creator: ID!, //TODO
  field: [string!]!,
  location: string!,
  description: string!,
  date: Date!,
  starred: [User],
  techKnowHow: [string!]!,
  level: string!,
  availability: [string!]!,
  timeslots: [string!]!,
  offer: boolean!,
  length: number!,
};

type Coworking {
  creator: ID!, //TODO
  field: [string!]!,
  location: string!,
  description: string!,
  date: Date!,
  starred: [User],
  time: number!,
  frequency: [string!]!,
};





