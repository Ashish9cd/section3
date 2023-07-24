//import express

const express = require('express')


// initiliaze express app

const app = express();
const port =5000;


//creating routes
app.get('/',(req, res) => {
    res.send('response from express server')
})

//home
app.get('Home',(req, res)=>{
    res.send('home')
});

//add




//strting the server

app.listen(port, () => {
    console.log('Express serverstarted succssesfully')
});