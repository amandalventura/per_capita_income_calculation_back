const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());
app.post('/', async (req, res) => {
   const {name, zip, monthly_income, number_of_dependents} = req.body;
   const response = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
    const address = response.data;





   res.send("Hello, Eduardo!")
});







app.listen(3333, () => {
    console.log("teste")
});

/* viacep.com.br/ws/01001000/json/ */