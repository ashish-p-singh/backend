import mongoose from "mongoose";
import express from 'express';
import { Todo } from "./models/todo.js";
const app = express()
const con = await mongoose.connect("mongodb://localhost:27017/todo")
const port = 3000;

app.get('/', (req, res) => {
    const todo =new Todo({title:'hi',desc:'hello',isDone:false})
    todo.save()
  res.send('Hello World!');
});
app.get('/a', async(req, res) => {
    const todo =await Todo.findOne()
  res.send(todo);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});