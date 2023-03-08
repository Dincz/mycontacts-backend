const express = require ('express');

const dotenv = require ('dotenv').config();

const app = express();



const port = process.env.PORT  || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));  
 //tried to do both togethar it didnt shown 2nd output
// res.send("Get all contacts"),

app.listen(port, () =>{
    console.log(`server running on the port ${port}`)

})