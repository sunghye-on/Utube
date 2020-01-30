import routes from "../routes";

// 장고의 view.py와 같은 부분이다 현재는 페이지에 글자만 랜더랑하고 있다.
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    //콘솔로 찍어보면 내용들을 알아 볼 수 있다.
    //console.log(req.body);
    // 만약에 body Parser가 없었다면 콘솔에서는 undifined가 나왔을 것이다.
    
    const {
        body : {name,email,password,password2}
    } = req;
    if (password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        res.redirect(routes.home);
    }
};
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });