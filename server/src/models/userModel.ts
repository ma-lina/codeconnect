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
    location: {
        type: String,
    },
    tech_offer:{
        type:Array,
        }, 
    y_xp:{
        type:Number,
    }, 
    avail_frequency:{
        type:String,
    }, 
    avail_timeslots:{
        type:Array,
    }, 
    mentee_level:{
        type:Array,
    }, 
    start_date:{
        type:String,
    }, 
    description:{
        type:String,
    }, 
    image:{
        type:String,
    },
}, { timestamps: true }); 

let userModel = mongoose.model('User', userSchema);

export {userModel};