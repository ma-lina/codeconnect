import { useQuery } from "@apollo/client";
import { useLayoutEffect } from "react";
import BoardTabs from "../Components/BoardTabs";
import FilterDrawer from "../Components/FilterDrawer";
import { GET_ADS } from "../GraphQL/Queries";

const Board = () => {
  //removing background
  useLayoutEffect(() => {
    document.body.classList.remove("background-image");
    document.body.classList.remove("home-transition-settings");
  })

  const { loading, error, data } = useQuery<QueryData>(GET_ADS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    <FilterDrawer/>
    <BoardTabs/>
      {data?.mentoring.map(
        ({
          _id,
          // creator,
          field,
          location,
          description,
          date,
          techKnowHow,
          level,
          availability,
          timeslots,
          offer,
        }) => (
          <div key={_id}>
            {/* <p>{creator}</p> */}
            <p>{location}</p>
            <p>{field}</p>
            <p>{description}</p>
            <br />
          </div>
        )
      )}
    </>
  );
};

export default Board;
