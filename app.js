const express = require('express');
const app =  express();
const routes = require('./routes/routes');


app.use(routes)

app.use(express.static(__dirname + '/public', {extensions: "html"}));
app.listen(6969, ()=>{
    console.log('listening on 6969');
    
})