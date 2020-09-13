const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// blog routes 
// get all blogs
router.get('/',blogController.blog_index);

// create blog 
router.get('/create',blogController.blog_create_get);

// create blog 
router.post('/',blogController.blog_create_post);

// get single blog
router.get('/:id',blogController.blog_details);

// delete single blog
router.delete('/:id',blogController.blog_delete);


module.exports = router;