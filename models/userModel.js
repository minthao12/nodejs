import mongoose  from "mongoose";
const Schema =mongoose.Schema;
const UserSchema = new Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true, versionKey: false,
    }
)
    const User = mongoose.model('User', UserSchema);
 export default User;