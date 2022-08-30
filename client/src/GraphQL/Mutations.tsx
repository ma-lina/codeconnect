import { gql } from "@apollo/client";

export const ADD_PIN = gql`
  mutation Mutation($input: MentoringInput) {
    addMentoring(input: $input) {
      title
      creator {
        _id
      }
      field
      location
      description
      date
      techKnowHow
      level
      timeslots
      availability
      offer
    }
  }
`;
