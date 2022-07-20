import express, {Request, Response} from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { schema } from "./graphql/schema";
import { cloudinaryConfig } from "./config/cloudinaryConfig";
import usersRoute from "./routes/usersRoute"

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

const server = new ApolloServer({ schema });

const startServer = () => {
  app.listen(port, () => {
    console.log("Server is running on " + port + "port");
  });
};

const loadRoutes = () => {
  //routes
  app.use('/users', usersRoute);
};

const middlewareSetup = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));
  cloudinaryConfig();
  //app.use(passport.initialize());
  //passportConfig(passport);
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
  middlewareSetup();
  loadRoutes();
  startServer();
})();
