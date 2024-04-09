import mongoose from "mongoose";

const MobileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,

    },
    image:{
        type: String,
    },
}, {
    timestamps: true, versionkey: false
});
const Mobile = mongoose.model("mobile", MobileSchema);
export default Mobile;