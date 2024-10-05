const express  = require("express");

const app = express();

app.use( "/test", (req, res) =>{
    res.send("test server is running");
});

app.use( (req, res) =>{
    res.send("Hello from the server");
});

app.listen(3000, ()=> {
    console.log("server is running successfully on port 3000 ... ");
});