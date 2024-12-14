const express = require("express");

const app = express();

const connectDb = require('./database');


app.use(express.json())


app.use("/media", express.static(path.join(__dirname, "media")));






app.use((err, req ,res , next)=>{
  res.status(404).json({message:`Path Not Found`});
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
  });
});

var morgan = require('morgan')
app.use(morgan('tiny'));

morgan(':method :url :status :res[content-length] - :response-time ms');
morgan.token('host', function(req, res) {
  return req.hostname;
});

app.use(morgan(':method :host :status :param[id] :res[content-length] - :response-time ms'));

morgan.token('param', function(req, res, param) {
    return req.params[param];
});

var cors = require('cors')
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// const corsOptions = {
//   origin: 'https://www.nileshblog.tech/',//(https://your-client-app.com)
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));


connectDb();

app.listen(8000, () => {
  console.log("Test");
});

