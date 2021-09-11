

const express = require("express");

const app = express();

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



app.listen(3000, () => {
    console.log('Express is listening for port 3000')
})

