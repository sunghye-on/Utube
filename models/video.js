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
    description: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    //아래와 같이 비디오에 Comment를 넣어줄 수 있다. 효율적인 방법을 선택하자
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
        },
    ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;