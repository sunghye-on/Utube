import routes from "../routes";
import User from "../models/User";
// 장고의 view.py와 같은 부분이다

// 회원가입
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  //콘솔로 찍어보면 내용들을 알아 볼 수 있다.
  //console.log(req.body);
  // 만약에 body Parser가 없었다면 콘솔에서는 undifined가 나왔을 것이다.

  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // user에 모델안에 User에 name과 email에 넣고 User에 register해준다.
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
    } catch (e) {
      console.log(`ERROR : 👉 ${e}`);
    }
    res.redirect(routes.home);
  }
};

//로그인
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //로그아웃 나중에 만들기
  res.redirect(routes.home);
};
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
