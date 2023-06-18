import marks from "../Model/MarksSchema.js";

const storeMarks = async (req, res) => {
    const { email, name, title, mark, totalMarks,difficulty } = req.body;
    console.log(difficulty);
    try {
        const existData = await marks.find({ email, name, title, mark, totalMarks,difficulty});
        if (existData.length) {
             res.status(502).json({ err: "Data is already stored" });
             console.log(existData)
        } else {
            const newData = new marks({ ...req.body })
            await newData.save();
            res.status(201).json({ msg: "Marks added" });
        }

    } catch (error) {
        res.status(401).json({ err: "Not Added" })
        console.log(error)
    }
}

const getAllMarks = async (req,res)=>{
    try {
        const allData = await marks.find({});
        allData.length? res.status.json({success : allData}) : res.status(501).json({err : "You did not appeared the quiz"})
    } catch (error) {
        res.status(501).json({err : "You did not appeared the quiz"})   
    }
}


const getMarks  = async(req, res)=>{
    const {name, email,difficulty,title} = req.body
    try {
        const getdata = await marks.find({name,email,difficulty,title})
        getdata.length? res.status(201).json({success:getdata}) : res.status(501).json({err:"Not found any data"})
    } catch (error) {
        console.log(error);
    }
}

export { storeMarks,getMarks };