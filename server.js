const express = require("express");

const app = express();

app.get('/greeting/:name', (req,res) => {
    res.send(`Whats up` + ` ` + req.params.name)
})




app.listen(3000, () => {
    console.log('Express is listening for port 3000')
})

