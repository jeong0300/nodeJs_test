const express = require("express");
const app = express();
const port = 3000;
const path = require("path"); // path : 파일, 디렉터리 경로 만들 때 필요한 모듈

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/"));
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

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
