import { ApolloError, AuthenticationError } from "apollo-server-express";
import {
  mentoringModel,
  shadowingModel,
  coworkingModel,
} from "../../models/pinboardModel";
import { userModel } from "../../models/userModel";

export const resolver = {
  Query: {
    users: async () => {
      try {
        return await userModel.find();
      } catch (err) {
        console.error("user error", err);
        throw new ApolloError("Error retrieving all user data", "400");
      }
    },
    mentoring: async (parent, args, context, info) => {
      const filter = args.input;
      console.log("args", args);
      console.log("args", args.input);
      console.log("filter", filter);
      console.log("location", filter.location);
      const shouldApplyFilters = filter !== (null || undefined);
      try {
        let data = await mentoringModel
          .find()
          .populate({ path: "creator" })
          .exec();
        console.log(data);
        if (!shouldApplyFilters) {
          return data;
        }
        const shouldApplyLocationFilter = filter.location !== null;
        if (shouldApplyLocationFilter) {
          data = data.filter((a) => a.location === filter.location);
        }
        const shouldApplyOfferFilter = filter.offer !== null;
        if (shouldApplyOfferFilter) {
          data = data.filter((a) => a.offer === filter.offer);
        } /*
           const shouldApplyLevelFilter = filter.level !== null;
        if (shouldApplyLevelFilter) {
          data = data.filter((a) => a.level === filter.level);
        }
        /*         const shouldApplyFieldFilter = filter.field !== null;
        if (shouldApplyFieldFilter) {
          data = data.filter((a) => a.field === filter.field);
        } */
        return data;
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
        return await shadowingModel.find().populate({ path: "creator" }).exec();
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
        return await coworkingModel.find().populate({ path: "creator" }).exec();
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
    addMentoring: async (args) => {
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
    addShadowing: async (args) => {
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
    addCoworking: async (args) => {
      try {
        const {
          input: {
            creator,
            field,
            location,
            description,
            date,
            time,
            frequency,
          },
        } = args;
        const newCoworking = new coworkingModel({
          creator,
          field,
          location,
          description,
          date,
          time,
          frequency,
        });
        await newCoworking.save();
        console.log("newShadowing", newCoworking.id);
        return newCoworking;
      } catch (err) {
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};
