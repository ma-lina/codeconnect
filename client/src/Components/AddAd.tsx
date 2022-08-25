import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AD } from "../GraphQL/Mutations";

const AddMentoringPin = () => {
  //let input: any;
  const [addMentoring, { data, loading, error }] = useMutation(ADD_AD);
  const [pin, setPin] = useState<any>({
    creator: null,
    title: "",
    field: [],
    location: "",
    description: "",
    date: "",
    techKnowHow: [],
    level: "",
    availability: [],
    timeslots: [],
    offer: null,
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  /*   const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPin({ ...pin, [e.target.name]: e.target.value });

  const handleCLick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sign);
    if (
      !sign.firstName ||
      !sign.lastName ||
      !sign.email ||
      !sign.username ||
      !sign.password 
    ) {
      alert("Enter your details!");
    } else {
      addMentoring({
        variables: {
          addMentoring: {
          /*   firstName: sign.firstName,
            lastName: sign.lastName,
            password: sign.password,
            birthday: sign.birthday,
            email: sign.email,
            username: sign.username,
          },
        },
      });
      if (error) {
        console.log(error);
      } else {
        console.log("pin up");
      }
    }

  return (
    <div>
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
        <button type="submit">Add Pin</button>
      </form>
    </div>
  );*/
};
export default AddMentoringPin;
