import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';

const userSchema : Schema = new mongoose.Schema({
    firstName:{ 
      type:String,
      required: true
    },
    lastName:{ 
      type:String,
      required: true
     },
    password: {
        type: String,
        required: true,
     },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    isLoggedin: {
        type: Boolean, 
        required: true,
    },
    username:{
        type:String,
    }, 
    isAdmin:{
        type:Boolean,
    }, 
    starredMentorship:{
        type:Array,
    }, 
    starredCoworking:{
        type:Array,
    }, 
    starredShadowing:{
        type:Array,
    }, 
    image:{
        type:String,
    },
}, { timestamps: true }); 

let userModel = mongoose.model('User', userSchema);

export {userModel};