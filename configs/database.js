const mongoose = require('mongoose');
const DB = process.env.MONGODB_URI;

mongoose.connect(DB).then(()=>{
  console.log('Connection to Database has been established successfully')
}).catch((error)=>{
  console.log(`Error connecting to Database: ${error.message}`)
});