import { useMutation } from "@apollo/client";
import { ADD_AD } from "../GraphQL/Mutations";

const AddAd = () => {
  /*  let input: any;
  const [addMentoring, { data, loading, error }] = useMutation(ADD_AD);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`; */

  return <div></div>;
  /*     <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMentoring({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div> 

 
  ); */
};

export default AddAd;
