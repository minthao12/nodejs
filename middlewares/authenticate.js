import jwt from "jsonwebtoken";
import User from "../models/userModel";

const checkPermission = async (req, res, next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
          return res.status(401).json({
            message: "No Authorization",
          });
        }  
        // verify token
        const data = jwt.verify(token, process.env.SECRECT_KEY);
    if (!data) {
      return res.status(401).json({
        message: "No Authorization",
      });
    }
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    next();
    }
    catch (error) {
        res.status(400).json({
          message: error.message,
        });
      }
    };
    export { checkPermission };