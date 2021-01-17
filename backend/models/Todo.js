const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
})

const Todo = mongoose.model("todo_app_data", TodoSchema)
module.exports = Todo