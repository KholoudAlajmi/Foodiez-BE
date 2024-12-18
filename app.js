const express = require("express");

const app = express();

const connectDb = require('./database');
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./passport");

const CategoriesRoute = require('./apis/categories/routes')
const ReciepiesRoute = require('./apis/reciepies/routes')
const CreatorsRoute = require('./apis/creators/routes')

app.use(express.json())
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/categories", CategoriesRoute);
app.use("/reciepies", ReciepiesRoute);
app.use("/creators", CreatorsRoute);


connectDb();

app.listen(8000, () => {
  console.log("Test");
});

