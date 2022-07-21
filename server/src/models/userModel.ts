import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';

const userSchema : Schema = new mongoose.Schema({
    first_name:{ 
      type:String,
      required: true
    },
    last_name:{ 
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
    user_name:{
        type:String,
    }, 
    is_admin:{
        type:Boolean,
    }, 
    stared_mentorship:{
        type:Array,
    }, 
    stared_coworking:{
        type:Array,
    }, 
    stared_shadowing:{
        type:Array,
    }, 
    image:{
        type:String,
    },
}, { timestamps: true }); 

let userModel = mongoose.model('User', userSchema);

export {userModel};