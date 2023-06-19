import mongoose from "mongoose";

const project = new mongoose.Schema({
    author:{
        type:String,
        require: true
    },
    title:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    filepath:{
        type:String,
        require:true
    },
    createdAt: { type: Date, default: Date.now },
    data: Buffer,
    mimeType: String,

})
const Project = new mongoose.model('Project',project);
export{Project}