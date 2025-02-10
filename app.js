const express = require("express");
const app = express();
const port = 3000;
const path = require("path"); // path : 파일, 디렉터리 경로 만들 때 필요한 모듈
const bodyParser = require("body-parser");
// use -> set -> get 순서로 사용

//body-parser
// x-www-form-urlencoded 방식, 객체 형태{}로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// json 형태로 결과가 나옴
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views")); 폴더 안의 ejs 찾고 싶을 때
// __dirname : 생성한 폴더(node_modules, views, app.js, package-lock.json, package.json)
// path.join(__dirname, "/") : 디렉터리 이름을 가져와서 / 로 join

app.get("/", (req, res) => {
  // const user = req.body; // 프론트에서 회원 정보 등을 보냄

  // const userInfo = {
  //  userName:user.name,
  //}

  // res.send('200'); // 완료임을 보냄. 300, 400 이면 실패
  res.send("Hello World!");
  // res.render // 페이지를 보냄
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/getForm", (req, res) => {
  console.log(req.query, "요청 왔니?");
  // 객체 형태로 랜더링
  res.render("result", { title: "GET 요청 결과", userinfo: req.query });
});

app.post("/postForm", (req, res) => {
  console.log(req.body, "요청 왔니?");
  // 객체 형태로 랜더링
  res.render("result", { title: "POST 요청 결과", userinfo: req.body });
});

// 실습
let data = "";

app.get("/user", (req, res) => {
  res.render("user");
});

app.post("/userlist", (req, res) => {
  data = req.body;
  res.render("userlist");
});

app.get("/userinfo", (req, res) => {
  res.json(data);
});

app.get("/search", (req, res) => {
  const user = req.query;
  const userinfoArr = JSON.parse(localStorage.getItem("userInfo")) || [];

  const filteredUsers = userinfoArr.filter((info) =>
    user.userName.includes(user)
  );

  res.render("search", { users: filteredUsers });
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
