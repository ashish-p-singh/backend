import mongoose from "mongoose";
const TODOSchema = new mongoose.Schema({
  title: String,
  desc:String,
  isDone: Boolean
});
export const Todo = mongoose.model('Todo', TODOSchema);