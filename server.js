const express = require ('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');

const dotenv = require ('dotenv').config();

connectDb();
const app = express();


app.use(express.json());
const port = process.env.PORT  || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));  
 //tried to do both togethar it didnt shown 2nd output
// res.send("Get all contacts"),
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`server running on the port ${port}`)

});