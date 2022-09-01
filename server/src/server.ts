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
import { schema } from "./graphql/schema";
import { cloudinaryConfig } from "./config/cloudinaryConfig";
import usersRoute from "./routes/usersRoute";
import passportConfig from "./config/passportConfig";

interface ApolloContext {
  token?: String;
}

const allowedDomains = ["BACKEND_URL", "http://localhost:3000"]

const createOrigin = (origin,callback) => {
  if (!origin) return callback(null, true);

  if (allowedDomains.indexOf(origin) === -1) {
      const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
  }
  return callback(null, true);
  };

const startApolloServer = async () => {
  const app = express();
  dotenv.config();
  const port = process.env.PORT || 5000;
  const httpServer = http.createServer(app);
  const server = new ApolloServer<ApolloContext>({
    // typeDefs,
    // resolvers,
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  //For REST routes middleware setup:
  middlewareSetup(app);

  app.use("/users", usersRoute);
  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: createOrigin,
      credentials: true,
    }),
    json(),
    express.urlencoded({
      extended: true,
    }),
    expressMiddleware(
      server
      /*   {
      context: async ({ req }) => ({ token: req.headers.token }),
      } */
    )
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
};

const middlewareSetup = (server) => {
  server.use(express.json());
  server.use(
    express.urlencoded({
      extended: true,
    })
  );
  const corsOptions = {
    origin: createOrigin,
    credentials: true,
  };
  server.use(cors(corsOptions));
  cloudinaryConfig();
  server.use(passport.initialize());
  passportConfig(passport);
};

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
  startApolloServer();
})();
