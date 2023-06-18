import mongoose from 'mongoose';
const marksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    email :  {
        type : String,
        required : true
    },
    mark : {
        type : Number,
        required : true,
    },
    totalMarks : {
        type : Number,
        required : true,  
    },
    difficulty:{
        type : String,
        required : true,
    }
})

const marks = new mongoose.model("mark",marksSchema);

export default marks;