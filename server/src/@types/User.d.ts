//TODO do we need _id, timestamps passed in user data to FE?
//TODO rewrite this and simplify, only need 1 or 2? 
//TODO import { Document, Model } from "mongoose" -> extend the mongoose types with interfaces matching the user object

declare namespace UserN {
    interface UserLoginData {
        password: string;
        email: string;
    }

    interface UserRegistrationData extends UserLoginData {
        firstName: string;
        lastName: string;
        isLoggedin: boolean;
        username?: string;
        image?: string;
    }
    interface UserData extends UserLoginData, UserRegistrationData {
    //_id might be an object, needs converting to a string? When? 
        _id: string;
        isAdmin?: boolean; 
        starredMentorship?: any;
        starredCoworking?: any;
        starredShadowing?: any;
    //need to add any other field coming from mongoose, like version, created and changes
    } 

    interface UserProfileData {
        firstName: string;
        lastName: string;
        isLoggedin: boolean;
        username?: string;
        image?: string;
        _id: string;
        isAdmin?: boolean; 
        starredMentorship?: any;
        starredCoworking?: any;
        starredShadowing?: any;
    }
}



