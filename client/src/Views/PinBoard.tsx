import { useQuery } from "@apollo/client";
import { useLayoutEffect } from "react";
import BoardTabs from "../Components/BoardTabs";
import FilterDrawer from "../Components/FilterDrawer";
import { GET_ADS } from "../GraphQL/Queries";

const PinBoard = () => {
  //removing background
  useLayoutEffect(() => {
    document.body.classList.remove("background-image");
    document.body.classList.remove("home-transition-settings");
  });

  const { loading, error, data, refetch } = useQuery<QueryData>(GET_ADS, {
    variables: {},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="page-transition-settings">
      <FilterDrawer filterQuery={{ refetch, data }} />
      <BoardTabs queryRes={{ data, loading, error }} />
    </div>
  );
};

export default PinBoard;
