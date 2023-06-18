import quiz from "../Model/QuizSchema.js";

const createQuiz = async (req, res)=>{
    try {
        const quizData = {...req.body}; // Assuming the request body contains the data for the quiz
    
        const newQuiz = new quiz(quizData);
        const savedQuiz = await newQuiz.save();
        res.status(201).json({msg : "Quiz created successfully"}); // Respond with the saved quiz data
      } catch (error) {
        res.status(500).json({ error: 'Failed to create quiz' });
      }
}


// get all quiz 

const allQuiz = async(req, res)=>{
    try {
        const data = await quiz.find({});
        data.length?
        res.status(201).json({success : data}) : res.status(501).json({err:"No Quiz Found"})
    } catch (error) {
        res.status(501).json({err:"No Quiz Found"})
    }
}

// Get quizData by usning id

const indiVidualQuizData = async(req, res)=>{
    const id = req.params.id;
    console.log(id)
    try {
        const quizData = await quiz.findOne({_id:id});
        quizData? res.status(201).json({success : quizData}) : res.status(501).json({err:"No Quiz Found"})
    } catch (error) {
        res.status(401).json({err:"No Quiz Found"})
    }
}

// identify quiz using difficulty
const diffiCulty = async(req, res)=>{
    const {difficulty} = req.body
    try {
        const getQuizDifficulty = await quiz.find({difficulty})
        getQuizDifficulty.length?
        res.status(201).json({success : getQuizDifficulty}) : res.status(501).json({err : "Data not Found"})
    } catch (error) {
        res.status(401).json({err:"No Data Found"})
        console.log(error)  
    }
}
export{createQuiz,allQuiz,indiVidualQuizData,diffiCulty}