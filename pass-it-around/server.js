const express = require('express')

const app = express()

app.get('/:number_of_bottles', (req,res) => {
const drunk = req.params.number_of_bottles
const moreDrunk = drunk - 1
const restart = `http://localhost:3000/99`
if(drunk > 0){
res.send(`
<html>
<h1>${drunk} bottles of beer on the wall</h1>
<p>take one down, pass it around <a href=http://localhost:3000/${moreDrunk}>🍺</a></p>
</html>
`)
}else{
    res.send(`
    <html>
    <p>${drunk} bottles left.<a href=${restart}>Start over?</p>
    </html>
    `)}
})

app.listen(3000, (req,res) => {
    console.log('express is listening for port 3000')
})

