const express = require('express');

// express app
const app = express();


// listen for requests
app.listen(3000); 

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
   
   // res.send('<h1>Hello</h1>');
});

app.get('/about',(req,res)=>{

    res.sendFile('./views/about.html',{root:__dirname});
   // res.send('<h1>About page</h1>');
});

// redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

// 404 page by middleware, write this function at the end of page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});