const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

let todos = [
    {
        id: '1',
        name: 'todo1',
        completed: false
    },
    {
        id: '2',
        name: 'todo2',
        completed: false
    },
    {
        id: '3',
        name: 'todo3',
        completed: false
    },
    {
        id: '4',
        name: 'todo4',
        completed: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/todos', (req, res) => {
    res.json(todos)
})

const port = 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})