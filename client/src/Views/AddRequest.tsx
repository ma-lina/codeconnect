import { useMutation, gql } from "@apollo/client";

const INCREMENT_COUNTER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation addMentoring {
    currentValue
  }
`;
const AddRequest = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(INCREMENT_COUNTER);
};

export default AddRequest;
