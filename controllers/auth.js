import User from "../models/userModel";
import bcryptjs from "bcryptjs";
import { registerValidator, loginValidator } from "../validations/auth";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class AuthController {
    // Post/auth/register

    async register(req, res){
        try {
        const {error} = registerValidator.validate(req.body, {
            abortEarly: false,
        });
        if(error){
            const errors = error.details.map((err)=> err.message);
            return res.status(400).json({
                message: errors,
            })
        }
        const {username, email, password} = req.body;
        const emailExists = await User.findOne({
            email,
        });
        if(emailExists) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }
        // ma hoa password
        const hashPassword = await bcryptjs.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashPassword,
        });
        res.status(201).json({
            essage: "User created",
            data:{...user.toObject(), password: undefined},
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });      
    }
}
// Post auth/login

  async login(req, res) {
    const { error } = loginValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      // check email
      const { email,password } = req.body;
      const user = await User.findOne({
        email,
      });
     if (!user) {
        return res.status(401).json({
            message: "Tai khoan ko ton tai",

        });
    }
    // check password
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        message: "Tai khoan ko ton tai",
      });
    }
    // token 
    const token = jwt.sign({ id : user._id}, process.env.SECRET_KEY,{
        expiresIn: "1d",
    });
    // res token
    res.status(200).json({
        message: "login done",
        data: {...user.toObject(), password: undefined},
        token,
    });
}
}
export default AuthController;