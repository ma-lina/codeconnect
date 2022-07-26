import jsonwebtoken from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

const issueAccessToken = (userId: string) => {
  const payload = {
    sub: userId,
  };

  //TODO change this to 1 h after solution with refresh token is functional
  const signOptions = {
    expiresIn: "1 day",
  };

  const jwt = jsonwebtoken.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    signOptions
  );
  return jwt;
};

const issueRefreshToken = (userId: string) => {
  const payload = {
    sub: userId,
  };

  const signOptions = {
    expiresIn: "720 h",
  };

  const jwt = jsonwebtoken.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    signOptions
  );
  return jwt;
};

export { issueAccessToken, issueRefreshToken };