import mongoose from 'mongoose';
const quizSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    author : {
        type : String,
        require : true
    },
    questionData: [
        {
        question: {
            type: String,
            required: true
          },
          a: {
            type: String,
            required: true
          },
          b: {
            type: String,
            required: true
          },
          c: {
            type: String,
            required: true
          },
          d: {
            type: String,
            required: true
          },
          correct: {
            type: String,
            required: true
          }
        }
      ]
})

const quiz = new mongoose.model("quiz",quizSchema);
export default quiz;