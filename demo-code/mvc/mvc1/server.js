const express = require("express");
const app = express();
const port = 3000;

// 添加中间件来解析请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

const inputs = [];

app.get("/", (req, res) => {
  const model = {
    items: inputs,
  };

  res.render("index", model);
});

app.post("/submit", (req, res) => {
  // 获取表单输入的值
  const inputValue = req.body.inputField || "";

  inputs.push(inputValue);

  const model = {
    items: inputs,
  };

  res.render("index", model);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
