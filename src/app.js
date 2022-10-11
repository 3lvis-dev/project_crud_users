// Dependencies
const express = require('express');

const userRouter = require('./users/users.router')

// Initial Configs
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server Ok!',
  })
})

// Path petition
app.use('/', userRouter)

const port = 9000
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})