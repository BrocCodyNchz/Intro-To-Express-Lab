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
app.get(`/collectibles/:item`, (req, res) => {
    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)

})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});