"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./graphql/schema");
const cloudinaryConfig_1 = require("./config/cloudinaryConfig");
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const passport_1 = __importDefault(require("passport"));
const passportConfig_1 = __importDefault(require("./config/passportConfig"));
const app = (0, express_1.default)();
dotenv.config();
const port = process.env.PORT || 5000;
const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.schema });
const startServer = () => {
    app.listen(port, () => {
        console.log("Server is running on " + port + "port");
    });
};
const loadRoutes = () => {
    app.use('/users', usersRoute_1.default);
};
const middlewareSetup = () => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    const corsOptions = {
        origin: "http://localhost:3000",
        credentials: true,
    };
    app.use((0, cors_1.default)(corsOptions));
    (0, cloudinaryConfig_1.cloudinaryConfig)();
    app.use(passport_1.default.initialize());
    (0, passportConfig_1.default)(passport_1.default);
};
const mongoDbConection = async () => {
    try {
        await mongoose_1.default.connect(process.env.DB);
        console.log("Connection to Mongo DB established");
    }
    catch (error) {
        console.log("error connection to Mongo DB", error);
    }
};
(async () => {
    mongoDbConection();
    middlewareSetup();
    loadRoutes();
    startServer();
})();
