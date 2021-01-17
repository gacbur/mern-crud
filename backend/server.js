const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

const app = express()

const TodoModel = require('./models/Todo')

app.use(express.json())
app.use(cors())


mongoose.connect(`mongodb+srv://user123:${process.env.PASSWORD}@mern.ms39u.mongodb.net/todo_app?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("Mongodb connection established successfully")
})

const PORT = 3001;

app.post('/insert', async (req, res) => {
    try {
        const todoText = req.body.todoText

        const todo = new TodoModel({
            text: todoText
        })

        await todo.save()
        res.send("inserted Data")
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})