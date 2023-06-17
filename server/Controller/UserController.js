import user from "../Model/UserSchema.js";
import bcrypt from 'bcryptjs'
const createUser = async (req, res) => {
    const { name, email, pass, cpass } = req.body;
    if(!name || !email || !pass ||!cpass){
        return res.status(500).json({ err: "These feild can not be empty" });
    }
    if (pass !== cpass) {
      return res.status(500).json({ err: "Passwords don't match" });
    }
  
    try {
      const existingUser = await user.findOne({ email });
      if (existingUser) {
        return res.status(500).json({ err: 'Email already registered' });
      } 
  
      const hashedPassword = await bcrypt.hash(pass, 10);
      const hashedCPass = await bcrypt.hash(cpass, 10);
  
      await user.create({ ...req.body, pass: hashedPassword, cpass: hashedCPass });
  
      res.status(200).json({ msg: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ err: 'Registration failed', error });
      console.log(error)
    }
  }


//  * for log in function

  const checkLogin = async (req, res) => {
    const { email, pass } = req.body;
    if(!email || !pass) {
       return res.status(400).json({ err: "These feild can not be empty" }); 
    }
    try {
      const existUser = await user.findOne({ email });
      if (!existUser) {
        return res.status(404).json({ err: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(pass, existUser.pass);
      console.log(isMatch)
      if (isMatch) {
        res.status(200).json({ msg: 'Login successful', userDetails : existUser });
      } else {
        res.status(401).json({ err: 'Invalid Credential' });
      }
    } catch (error) {
      res.status(500).json({ err: 'Error finding user', error });
      console.log(error)
    }
  }

  export  {createUser,checkLogin};