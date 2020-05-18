const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

let todos = [
    {
        id: '1',
        title: 'todo1',
        completed: false
    },
    {
        id: '2',
        title: 'todo2',
        completed: false
    },
    {
        id: '3',
        title: 'todo3',
        completed: false
    },
    {
        id: '4',
        title: 'todo4',
        completed: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/todos', (req, res) => {
   // setTimeout(() => {
        res.json(todos)
    //}, 5000)
})

app.delete('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(req.params);
    todos = todos.filter(todo => todo.id !== id)

    res.status(204).end()
})

/*
app.delete('/api/todos/:id', (request, response) => {
    const id = Number(request.params.id)
    todos = todos.filter(note => note.id !== id)
  
    response.status(204).end()
  })
*/

app.post('/api/todos', (req, res) => {
    const body = req.body

    const newTodo = {
        title: body.title,
        completed: body.completed,
        id: generateId()
    }

    todos = todos.concat(newTodo)
    res.json(newTodo)
})

generateId = () => {
    return todos.length > 0 
            ? Math.max(...todos.map(todo => todo.id)) + 1
            : 0
}

const port = 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})