import { ApolloError, AuthenticationError } from "apollo-server-express";
import { ObjectID } from "mongodb";
import {
  mentoringModel,
  shadowingModel,
  coworkingModel,
} from "../../models/pinboardModel";
//import { userModel } from "../../models/userModel";

export const resolver = {
  Query: {
    /*     users: async () => {
      try {
        return await userModel.find();
      } catch (err) {
        console.error("user error", err);
        throw new ApolloError("Error retrieving all user data", "400");
      }
    }, */
    mentoring: async () => {
      try {
        return await mentoringModel.find();
      } catch (err) {
        console.error("mentoring error", err);
        throw new ApolloError(
          "Error retrieving all mentoring offers and request",
          "400"
        );
      }
    },
    shadowing: async () => {
      try {
        return await shadowingModel.find();
      } catch (err) {
        console.error("shadowing error", err);
        throw new ApolloError(
          "Error retrieving all shadowing offers and request",
          "400"
        );
      }
    },
    coworking: async () => {
      try {
        return await coworkingModel.find();
      } catch (err) {
        console.error("coworking error", err);
        throw new ApolloError(
          "Error retrieving all coworking offers and request",
          "400"
        );
      }
    },
  },
  //add typescript to mutation!
  Mutation: {
    addMentoring: async (parent, args) => {
      try {
        const {
          input: {
            creator,
            field,
            location,
            description,
            date,
            techKnowHow,
            level,
            availability,
            timeslots,
            offer,
          },
        } = args;
        const newMentoring = new mentoringModel({
          creator,
          field,
          location,
          description,
          date,
          techKnowHow,
          level,
          availability,
          timeslots,
          offer,
        });
        await newMentoring.save();
        console.log("newMentoring", newMentoring.id);
        return newMentoring;
      } catch (err) {
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
    addShadowing: async (parent, args) => {
      try {
        const {
          input: {
            creator,
            field,
            location,
            description,
            date,
            techKnowHow,
            level,
            availability,
            timeslots,
            length,
            offer,
          },
        } = args;
        const newShadowing = new shadowingModel({
          creator,
          field,
          location,
          description,
          date,
          techKnowHow,
          level,
          availability,
          timeslots,
          length,
          offer,
        });
        await newShadowing.save();
        console.log("newShadowing", newShadowing.id);
        return newShadowing;
      } catch (err) {
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};