const express = require("express");

const app = express();

// GET, PUT, POST, DELETE
// req.query => Acessar query params (Para filtros)
// req.params => Acessar route params (Para edição e DELETE)
// req.body => Acessar corpo da requisição (Para edição e criação)

app.use(express.json());

app.post("/users", (req, res) => {
    return res.json(req.body)
});

app.listen(3333);   