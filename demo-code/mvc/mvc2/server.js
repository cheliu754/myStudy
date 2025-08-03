const express = require("express");
const app = express();
const port = 3000;

// 添加中间件来解析请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 设置静态文件目录
app.use(express.static("views"));

const inputs = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/submit", (req, res) => {
  // 获取表单输入的值
  const inputValue = req.body.inputField || "";

  inputs.push(inputValue);

  // 返回JSON响应供前端JavaScript处理
  res.json({ success: true, items: inputs });
});

// 添加API端点获取数据
app.get("/api/items", (req, res) => {
  res.json({ items: inputs });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
