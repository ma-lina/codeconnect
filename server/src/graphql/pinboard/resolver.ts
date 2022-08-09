import {
  ApolloError,
  ApolloServer,
  AuthenticationError,
} from "apollo-server-express";
import { ObjectID } from "mongodb";
//import {} from "../../@types";
import {
  mentoringModel,
  shadowingModel,
  coworkingModel,
} from "../../models/pinboardModel";

//parent args context 

const resolver = {
    Query: {
        hello: () => { return "TEST" }
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
    Mutation: {
      /*      addDatingText: async (
                  parent,
                  args: { text: datingTextNs.newText },
                  { auth }
                ) => {
                  try {
                    const userAuth = await getUser(auth);
                    console.log(`userAuth in addText`, userAuth);
                    if (userAuth === null) {
                      return new AuthenticationError('UNAUTHORIZED');
                    }
                    try {
                      const { postDate, text, toneResults, xprivate } = args.text;
                      console.log(`tones`, toneResults);
                      const newDT: datingTextNs.datingTextSchemaData = new datingTextModel({
                        owner: userAuth.id,
                        postDate,
                        text,
                        score: 0,
                        display: true,
                        private: xprivate,
                        comments: [],
                        toneResults: toneResults,
                      });
                      if (newDT === null) {
                        return new ApolloError('failed to post text', '502');
                      }
                      const savedText: datingTextNs.datingTextSchemaData =
                        await newDT.save();
                      if (savedText === null) {
                        return new ApolloError('failed to save text', '503');
                      }
                      const user = await userModel.findByIdAndUpdate(
                        { _id: userAuth.id },
                        { $addToSet: { datingTexts: savedText._id } },
                        { useFindAndModify: false }
                      );
                      if (user === null) {
                        return new ApolloError('failed to save text to user', '504');
                      }
                      return savedText;
                    } catch (err) {
                      console.log(`err`, err);
                      throw new ApolloError('Could not create new Text', '500');
                    }
                  } catch (err) {
                    return new AuthenticationError('UNAUTHORIZED');
                  }
                }, */
    },
  },
};
