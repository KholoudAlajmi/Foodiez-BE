const express = require("express");

const app = express();

const connectDb = require('./database');
const cors = require('cors');

const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./passport");

const CategoriesRoute = require('./apis/categories/routes')
const ReciepiesRoute = require('./apis/reciepies/routes')
const CreatorsRoute = require('./apis/creators/routes')
const UsersRoute = require('./apis/users/routes')


app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/categories", CategoriesRoute);
app.use("/reciepies", ReciepiesRoute);
app.use("/creators", CreatorsRoute);
app.use("/users", UsersRoute)


connectDb();

app.listen(8000, () => {
  console.log("Test");
});

