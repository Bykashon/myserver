const express = require('express');

const app = express(); //its working

app.get('/', (reg, res, next) => {
    res.send('its working');
})

app.listen(5000, ()=>{
    Console.log('its started', new Date());
})