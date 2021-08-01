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
 * @param {Object} [req.body]
 * @param {string} [name]
 * @param {string} [email]
 * @param {string} [phone]
   @example curl -d "email=1" -X POST http://localhost:3000/registration
 */
app.post("/registration", (req, res) => {
  if (req.body.email || req.body.phone) {
    res.send({
      code: 200,
      message: "Пользователь успешно добавлен",
    });
  } else {
    res.send({
      code: 400,
      message: "Введите электронную почту или телефон",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
