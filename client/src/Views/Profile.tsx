import React, { useLayoutEffect } from "react";
import ProfileDisplay from "../Components/ProfileDisplay";
import TextHeaderLine from "../Components/TextHeaderLine";

const Profile :React.FC = () => {
  //removing background
  useLayoutEffect(() => {
    document.body.className = "";
  })

  return(
    <>
      <TextHeaderLine text="profile" />
      <ProfileDisplay/>
    </>
    )
};

export default Profile;
