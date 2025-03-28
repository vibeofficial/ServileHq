require('dotenv').config();
require('./configs/database')
const express = require('express');
const PORT = process.env.PORT || 1234;
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user');
const planRouter = require('./routes/plan');
const subscriptionRouter = require('./routes/subscription');


app.use(express.json());
app.use(cors());

app.use((error, req, res, next) => {
  if (error) {
    console.log(error);
    res.json({
      message: error.message
    })
  };
  
  next();
});

app.use('/v1', userRouter);
app.use('/v1', planRouter);
app.use('/v1', subscriptionRouter);


app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
});