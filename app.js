const express = require('express'); // this is a express object
const app = express(); // this is a express method
const userRouter = require('./Routes/users.route')

app.use("/api/user", userRouter)

app.use('/', (req, res) => {
    res.send('<h1 style ="text-align: center;">This is get request from home route</h1>');
    res.end();
})

app.use((req, res) => {
    res.send('<h1 style ="text-align: center;">404 Not Found</h1>')
})
module.exports = app;