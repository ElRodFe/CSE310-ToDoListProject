const express = require("express");
const app = express(); 
const { v4: uuidv4 } = require("uuid");

const todos = [
    {
        message: "Wash Dishes...",
        id: 1,
        completed: false
    }
];

    ////Middleware////
//For POST requests
app.use(express.json({extended: false}));

//Rutes
app.get("/", (req, res) =>{
    res.status(200).json(todos);
})

app.post("/", (req, res) => {
    const newTodo = {
        message: req.body.message,
        id: uuidv4(),
    };

    todos.push(newTodo);
    res.status(201).json(todos);
})

//Server listening
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
});
