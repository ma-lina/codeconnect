import { Divider } from "@mui/material";
import React, { useLayoutEffect } from "react";
import FavoriteItemsDisplay from "../Components/FavoriteItemsDisplay";
import ProfileDisplay from "../Components/ProfileDisplay";
import TextHeaderLine from "../Components/TextHeaderLine";

const Profile :React.FC = () => {
  //removing background
  useLayoutEffect(() => {
    document.body.classList.remove("background-image");
    document.body.classList.remove("home-transition-settings");
  })

  return(
    <div className="page-transition-settings">
      <TextHeaderLine text="profile" />
      <ProfileDisplay/>
      <Divider sx={{mb:2}} variant="middle" />
      <FavoriteItemsDisplay/>
    </div>
    )
};

export default Profile;
