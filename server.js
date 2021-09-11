

const express = require("express");

const app = express();

const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name', (req,res) => {
    res.send(`Whats up` + ` ` + req.params.name)
})


app.get('/tip/:total/:tipPercentage', (req,res) => {
    const percentage = req.params.tipPercentage / req.params.total * 100;
    console.log(percentage)
    console.log(req.params)
    res.send(req.params.total + ' divided by ' + req.params.tipPercentage 
        + ` your tip is ${percentage}`)
})



app.get('/magic/:phrase', (req,res) => {
    const itSpeaks = magic[Math.floor(Math.random() * magic.length)];
    res.send('the magic conch says: ' + itSpeaks)
})


app.listen(3000, () => {
    console.log('Express is listening for port 3000')
})

