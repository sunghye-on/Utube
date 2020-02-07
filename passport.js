import passport from "passport";
import User from "./models/User";

//이거 한줄이 유저이름과 비밀번호를 받고 처리하는 과정을 하나의 함수로 가능
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
