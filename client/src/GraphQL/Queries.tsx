import { gql } from "@apollo/client";

export const GET_REQS_OFFERS = gql`
  query Query {
    mentoring {
      _id
      creator
      field
      location
      description
      date
      starred {
        _id
      }
      techKnowHow
      level
      availability
      timeslots
      offer
    }
    shadowing {
      _id
      creator
      field
      location
      description
      date
      starred {
        _id
      }
      techKnowHow
      level
      availability
      timeslots
      length
      offer
    }
    coworking {
      _id
      creator
      field
      location
      description
      date
      starred {
        _id
      }
      time
      frequency
    }
  }
`;
