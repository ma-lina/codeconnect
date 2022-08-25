import { ApolloError, AuthenticationError } from "apollo-server-express";
import {
  mentoringModel,
  shadowingModel,
  coworkingModel,
} from "../../models/pinboardModel";
import { userModel } from "../../models/userModel";
import { filterMe } from "../../utils/filterMe";

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
      console.log("args", args.input);
      const shouldApplyFilters = filter !== (null || undefined);
      try {
        let data = await mentoringModel
          .find()
          .populate({ path: "creator" })
          .exec();
        if (!shouldApplyFilters) {
          return data;
        } else {
          const result = filterMe(data, filter);
          return result;

          if (filter.timeslots) {
            data = data.filter((a) =>
              filter.timeslots.some((b) => a.timeslots.includes(b))
            );
          }
        }
      } catch (err) {
        console.error("mentoring error", err);
        throw new ApolloError(
          "Error retrieving all mentoring offers and request",
          "400"
        );
      }
    },
    shadowing: async (parent, args, context, info) => {
      const filter = args.input;
      console.log("args", args);
      console.log("args", args.input);
      //console.log("filter", filter.location);
      const shouldApplyFilters = filter !== (null || undefined);
      try {
        let data = await shadowingModel
          .find()
          .populate({ path: "creator" })
          .exec();
        if (!shouldApplyFilters) {
          return data;
        } else {
          if (filter.location) {
            data = data.filter((a) => a.location === filter.location);
          }
          if (filter.offer === true || filter.offer === false) {
            data = data.filter((a) => a.offer === filter.offer);
          }
          if (filter.level) {
            data = data.filter((a) => a.level === filter.level);
          }
          return data;
        }
      } catch (err) {
        console.error("shadowing error", err);
        throw new ApolloError(
          "Error retrieving all shadowing offers and request",
          "400"
        );
      }
    },
    coworking: async (parent, args, context, info) => {
      const filter = args.input;
      console.log("args", args);
      console.log("args", args.input);
      //console.log("filter", filter.location);
      const shouldApplyFilters = filter !== (null || undefined);
      try {
        let data = await coworkingModel
          .find()
          .populate({ path: "creator" })
          .exec();
        if (!shouldApplyFilters) {
          return data;
        } else {
          if (filter.location) {
            data = data.filter((a) => a.location === filter.location);
          }
          if (filter.offer === true || filter.offer === false) {
            data = data.filter((a) => a.offer === filter.offer);
          }
          if (filter.level) {
            data = data.filter((a) => a.level === filter.level);
          }

          return data;
        }
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
