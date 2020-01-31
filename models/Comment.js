import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type : String,
        required : "Text is Required"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
//아래의 코드처럼 Video의 ObjectId를 가져와서 사용할 수 있다.
    // video : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Video"
    // }
});

export default CommentSchema;