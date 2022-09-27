const express = require('express');
const fs = require('fs');
require('dotenv').config();

const checkVerb = require("./utils/checkVerb");

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    const message = req.body.message;
    const d = new Date();
    if(message) {
        fs.appendFile('arbitrage-bot-error.log', `${message}\n`, (err) => {
            if(err) {
                console.error(err)
                res.status(500).send('Internal Server Error');
            } else {
                checkVerb(`Error logged => ${d.toISOString()}`);
                res.status(200).send('Error logged');
            }
        });
    } else {
        checkVerb(`No error message received => ${d.toISOString()}`);
        res.status(200).send('No error message received');
    }
});

const PORT = parseInt(process.env.PORT) || 5544;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });