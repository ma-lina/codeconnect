import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";
//import { typeDefs, resolvers } from "./schema";
import { schema } from "./graphql/schema";
import { cloudinaryConfig } from "./config/cloudinaryConfig";
import usersRoute from "./routes/usersRoute";
import passportConfig from "./config/passportConfig";

interface MyContext {
  token?: String;
}

const startApolloServer = async () => {
  const app = express();
  // app.use(
  //   express.urlencoded({
  //     extended: true,
  //   })
  // );
  dotenv.config();
  const port = process.env.PORT || 5000;
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    //typeDefs,
    //resolvers,
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  // server.applyMiddleware({ app });
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  cloudinaryConfig();
  passport.initialize();
  passportConfig(passport);

  app.use("/users", usersRoute);
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsOptions),
    json(),
    express.urlencoded({
      extended: true,
    }),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
};

/* const loadRoutes = () => {
  app.use("/users", usersRoute);
}; */

const mongoDbConection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connection to Mongo DB established");
  } catch (error) {
    console.log("error connection to Mongo DB", error);
  }
};

(async () => {
  mongoDbConection();
  //loadRoutes();
  startApolloServer();
})();
