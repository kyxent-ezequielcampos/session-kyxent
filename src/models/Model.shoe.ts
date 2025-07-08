import { model, Schema } from "mongoose";
import { shoeInterface } from "../interfaces/shoes/ShoeInterface";




const SchemaShoe = new Schema<shoeInterface>({
    color : {
        type : String,
        required  :[true, "color is required"]
    },
    size : {
        type : Number,
        required  : [true, "size is required"]
    },
    brand : {
        type : String,
        required : [true, "brand is required"]
    },

    style : {
        type : String,
        required : [true, "style is required"]
    }


})


export const ModelShoe = model("shoes", SchemaShoe)