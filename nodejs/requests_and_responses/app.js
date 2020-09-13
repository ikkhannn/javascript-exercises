const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://test_user:test678678@cluster0.ikxjz.mongodb.net/test_db?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
// listen for requests
console.log('database connected');
app.listen(3000); 
}).catch((err)=>{console.log(err)});

// register view engine
app.set('view engine','ejs');
// if views are placed other than views folder , than specify the folder name like this.
// app.set('views', 'myviews');

//middleware and static files

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


 // routes
app.get('/',(req,res)=>{
  
  res.redirect('/blogs'); 
   // res.send('<h1>Hello</h1>');
});

app.get('/about',(req,res)=>{

    res.render('about',{title:'About'});
   // res.send('<h1>About page</h1>');
});

// blog Routes
app.use('/blogs',blogRoutes);


// 404 page by middleware, write this function at the end of page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
}); 

