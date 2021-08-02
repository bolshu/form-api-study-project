const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
  if (req.body.email || req.body.phone) {
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
