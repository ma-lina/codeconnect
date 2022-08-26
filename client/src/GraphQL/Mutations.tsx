import { gql } from "@apollo/client";

export const ADD_AD = gql`
  mutation Mutation() {
    addMentoring() {
      creator
      title
      field
      location
      description
      date
      techKnowHow
      level
      availability
      timeslots
      offer
    }
  }
`;
