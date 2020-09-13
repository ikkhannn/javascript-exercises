const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// blog routes
router.get('/',(req,res)=>{
    // get all blogs

    Blog.find().sort({createdAt: -1})
    .then((result)=>{

        res.render('index',{title: 'All blogs', blogs: result});

    })
    .catch((err)=>{
        console.log(err);
    })
});


// create blog
router.get('/create',(req,res)=>{
    res.render('create',{title:'Create blog'});
});


router.post('/',(req,res)=>{

    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    });
});

// get single blog
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    
    Blog.findById(id)
    .then((result)=>{
        res.render('details', { blog: result,title:'Blog Details'});
    })
    .catch(err=>{
        console.log(err);
    });
});

// delete single blog
router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: '/blogs'});
    })
    .catch((err)=>{
        console.log(err);
    });

});


module.exports = router;