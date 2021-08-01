const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

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
    res.send({
      status: 200,
      message: "Все хорошо, вы зареганы!",
    });
  } else {
    res.send({
      status: 400,
      message: "Введите электронную почту или телефон",
    });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
