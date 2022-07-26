import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import * as dotenv from "dotenv";
import { userModel } from '../models/userModel';
dotenv.config();

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET
};

const jwtStrategy = new JwtStrategy(jwtOptions, function(jwt_payload, done) {
    userModel.findById(jwt_payload.sub, function(error, user: UserN.UserData) {
        if (error) {
            return done(error, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
// TODO define what should happen in this case
        }
    });
});

const passportConfig = (passport) => {
    passport.use(jwtStrategy);
}

export default passportConfig;