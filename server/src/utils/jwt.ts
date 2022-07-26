import jsonwebtoken from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

const issueToken = (userId: string) => {
  const payload = {
    sub: userId,
  };

  const signOptions = {
    expiresIn: "1 day",
  };

  const jwt = jsonwebtoken.sign(
    payload,
    process.env.TOKEN_SECRET,
    signOptions
  );
  return jwt;
};

export { issueToken };