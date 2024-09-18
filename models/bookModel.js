import mongoose, { mongo } from "mongoose";
const book  = mongoose.model('Cat', { name: String });

const bookSchema = mongoose.Schema(

    {
        title:{
        type:  String,
        required: true , 
    },
    author:{
        type: String,
        required: true, 

    },
    publishYear:{
        type: Number,
        required: true, 

    },
    },
    {
       timestamps :  true,

    }
);


export const Book = mongoose.model