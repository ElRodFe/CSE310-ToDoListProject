const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const todos = require("../Data/todos")
const countTodos = require("../Utils/utils")

    ////ROUTES////
//GET todos
router.get("/", (req, res) =>{
    const totalTodos = countTodos(todos);
    res.status(200).json({todos, totalTodos});
})

//GET completed todos
router.get("/completed", (req, res) => {
  const completedTodos = todos.filter(todo => todo.completed);
  res.status(200).json(completedTodos);
});

//POST a new todo
router.post("/", (req, res) => {

    try {
        if (!req.body.message) {
            throw new Error("Message is required!")
        }

        const newTodo = {
            message: req.body.message,
            id: uuidv4(),
            completed: false
        };

        todos.push(newTodo);
        res.status(201).json(todos);
    }catch (err) {
        res.status(400).json({error: err.message})
    }
})


module.exports = router;
