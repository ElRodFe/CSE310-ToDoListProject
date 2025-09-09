const express = require("express");
const app = express(); 
const router = require("./Routes/index")

    ////Middleware////
//For POST requests
app.use(express.json({extended: false}));

    ////Rutes////
//GET todos
app.use("/", router);

    ////Server listening//
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
});