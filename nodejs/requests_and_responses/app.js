const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine','ejs');
// if views are placed other than views folder , than specify the folder name like this.
// app.set('views', 'myviews');

// listen for requests
app.listen(3000); 



app.get('/',(req,res)=>{


    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title:'Home',blogs});
   
   // res.send('<h1>Hello</h1>');
});

app.get('/about',(req,res)=>{

    res.render('about',{title:'About'});
   // res.send('<h1>About page</h1>');
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create blog'});
});


// 404 page by middleware, write this function at the end of page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});