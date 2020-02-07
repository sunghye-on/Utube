import mongoose from "mongoose";
// 유저의 다양한 인증을 간단하게 도와주는 passport플러그인
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number
});
//유저 스키마에 플러그인을 추가해주자 이때 옵션으로 usernameField를 email로 주는데 이것은 email로 구분하겠다는 뜻
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
