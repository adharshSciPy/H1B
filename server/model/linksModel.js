import mongoose,{Schema} from "mongoose";
const linkSchema=new Schema({
    link:{
        type:String,
        required:true
    },
    companyName:{
        type:String
    },
    ranking:{
        type:Number,
        
    }
},{timestamps:true})
export const Links = mongoose.model("Link", linkSchema);