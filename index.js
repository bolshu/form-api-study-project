const express = require("express");
const app = express();
const port = 3000;

app.use(express.query());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function rawBody(req, res, next) {
  req.setEncoding("utf8");
  req.rawBody = "";
  req.on("data", function (chunk) {
    req.rawBody += chunk;
  });
  req.on("end", function () {
    next();
  });
}

app.use(rawBody);
/**
 * @typedef {Object} Request
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 *
 * @typedef {Object} Response
 * @property {number} status
 * @property {string} message
 *
 * @param {Request} [req.body]
 *
 * @return {Response}
 */
app.post("/registration", (req, res) => {
  const reqParams = req.rawBody.split("&");
  const email = reqParams.filter((param) => param.includes("email"))[0].split('=')[1];
  const phone = reqParams.filter((param) => param.includes("phone"))[0].split('=')[1];

  if (email || phone) {
    res.status(200);
    res.send({
      message: "Все хорошо, вы зареганы!",
    });
  } else {
    res.status(400);
    res.send({
      message: "Введите электронную почту или телефон",
    });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
