const mongoose = require('mongoose');


const connectDatabase = () => {
  mongoose.connect("mongodb+srv://admin:admin@cluster0.xj5uvmb.mongodb.net/e-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(con => {
    console.log(`MongoDB Database connected with HOST: 
    ${con.connection.host}`)
  })
}

module.exports = connectDatabase