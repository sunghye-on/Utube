//import path를 하는것과 같은 내용이다 하지만 여기서는 모던 자바스크립트를 사용할 수 없기때문에 이렇게 작성
const path = require("path");
const autoprefixer = require("autoprefixer");
//코
const extractCSS = require("extract-text-webpack-plugin");
//웹팩의 모드를 지정한다 이 모드는 실행할때 정한다.
const MODE = process.env.WEBPACK_ENV;
//파일들이 어디서 시작되고 어떠한 디렉토리에서 만들어질지 정한다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
//엔트리와 아웃풋을 지정하여 exports한다.
const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  //모듈을 발결할 때마다 아래의 규칙(rules)를 따른다.
  module: {
    //코드를 찾아내고 이해해서 scss를 css로 바꾸고 호환도록 해줌
    rules: [
      {
        //테스트라는 이름의 조건(아래에서는 scss파일)을 만나면 use로 플러그인을 사용하여 진행
        test: /\.(scss)$/,
        use: extractCSS.extract([
          {
            //webpack이 css를 이해할 수 있게 해준다.
            loader: "css-loader"
          },
          {
            //변환된 css를 받아서 우리가 원하는 방향으로 변환해줄 수 있다.(호환성해결)
            loader: "postcss-loader",
            //옵션을 사용하여 원하는 plugin을 추가할 수 있다.(여기서는 99.5/5의 브라우저에서 호환가능)
            options: {
              plugin() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            //scss혹은 sass를 받아서 일반 css로 변환해줌
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new extractCSS("style.css")]
};

module.exports = config;
