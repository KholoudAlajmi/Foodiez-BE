const express = require("express");

const app = express();

const connectDb = require('./database');

const Categories = require('./Categories')
app.use(express.json())


app.post('/', async (req, res) => {
  const newCategory = await Categories.create(req.body);
  res.status(201).json(newCategory)
})

connectDb();

app.listen(8000, () => {
  console.log("Test");
});

