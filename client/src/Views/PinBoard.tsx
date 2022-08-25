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

  return (
    <>
      <FilterDrawer />
      <BoardTabs />
    </>
  );
};

export default PinBoard;
