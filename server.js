const express = require('express');
const app = express();

app.get(`/greetings/:username`, (req, res) => {
    res.send(`<h1>Hello, ${req.params.username}!</h1>`);
})
app.get(`/roll/:numb`, (req, res) => {
    if (Number.parseInt(req.params.numb)) {
        return res.send(`You rolled ${req.params.numb}`)
    } else {
        return res.send(`You must specify a number.`)
    }
})
app.get(`/collectibles/:index`, (req, res) => {  
})
