let express = require('express')
let app = express()
let bodyparser = require('body-parser')


//middelware
app.use(bodyparser.urlencoded())
app.use(bodyparser.json())

app.get('', (req,res) => {
    res.send('hello i am paarse')
})

app.get('/login', (req,res) => {
    res.render('login.ejs')
})
app.post('/logindata', (req,res) => {
    let data  = req.body
    console.log(data);
    res.render('login.ejs')
})

app.listen(5000,() =>{
    console.log('server start');
    
} )