const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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

app.use(express.static('public'))
app.use(morgan('dev'));

// mongoose and mongo sandbox routes

app.get('/add-blog',(req,res)=>{

    const blog =  new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
});
 

// get all blogs
app.get('/all-blogs',(req,res)=>{

    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    }); 

});

// get single blog
app.get('/single-blog',(req,res)=>{
    Blog.findById('5f5e37157ebb740854754efe')
    .then((results)=>{
        res.send(results);
    }).catch((err)=>{
        console.log(err);
    });
});


//middleware
app.use((req,res,next)=>{
    console.log('In the next middleware:');
    next();
});
 
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

