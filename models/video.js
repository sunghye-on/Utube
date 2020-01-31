import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is Required"
    },
    title: {
        type: String,
        required: "Title is Required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoSchema);

export default model;