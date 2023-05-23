const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
   const { name, zip, monthly_income, number_of_dependents } = req.body;
   const response = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
   const address = response.data;

   const candidates = monthly_income / number_of_dependents;
   const results = {
      name,
      address,
      candidates: candidates.toFixed(2)
   };

   res.json(results);
});

app.listen(3333, () => {
   console.log("Servidor rodando na porta 3333");
});
