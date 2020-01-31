import routes from "../routes";
import Video from "../models/video";

//비디로를 찾기위하여 비동기 작업
export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    }catch(e){
        console.log(e);
        res.render("home", { pageTitle: "Home", videos });
    }
};
export const search = (req, res) => {
    //console.log(req.query.term);
    //아래 코드는 query에서 term을 가져 오는 것과 같은 코드이다. 즉 req.query.term와 같은 코드
    //해당 방법이 term = req.query.term 라고 하는 것보다 더 좋은 방식으로 정보를 가져온다.
    const {
        //term을 searchBy로 해준다. 즉 req.query.term === searchBy
        query : {term : searchBy}  
    } = req;
    res.render("search", { pageTitle: "Search", searchBy:searchBy, videos});  
};
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body: {file, title, descriptions}
    } = req;
    //비디오 저장 및 업로드
    res.redirect(routes.videoDetail(215632));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });