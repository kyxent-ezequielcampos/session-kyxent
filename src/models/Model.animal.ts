import { model, Schema } from "mongoose";
import { AnimalI } from "../interfaces/AnimalI";



const SchemaAnimal = new Schema<AnimalI>({

    name : {
        type : String,
        required : [true, "name is required"]
    },

    age : {
        type : Number,
        required : [true, "age is required"] 
    },

    color : {
        type : String,
        required : [true ,  "color is required"]
    },
    raza : {
        type : String,
        required : [true, "raza is required"]
    }

})


export const ModelAnimal = model("animals", SchemaAnimal)