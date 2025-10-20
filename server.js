require(`dotenv`).config
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

app.get(`/collectibles/:itemId`, (req, res) => {
    const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    //thought process is to change the string into an integer [index]
    const index = parseInt(req.params.itemId, 10);
    const item = collectibles[index];

    if (index >= 0 && index < collectibles.length) {
        const item = collectibles[index];
        const{name, price} = item;
        return res.send(`So, you want the ${itemId.name}? For ${itemId.price}, it can be yours!`);
    } else {
        return res.send(`This item is not yet in stock. Check back soon!`);
    }       
});

app.get(`/shoes`,(req, res) => {
      const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  const minPriceQuery = req.query[`min-price`];
    const maxPriceQuery = req.query[`max-price`];
    const typeQuery = req.query.type;

    let filteredShoes = shoes;

    //convert price into a number
    const minPrice = parseFloat(minPriceQuery);
    const maxPrice = parseFloat(maxPriceQuery);

    if (typeQuery) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === typeQuery);
    }

    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    res.send(filteredShoes);

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});