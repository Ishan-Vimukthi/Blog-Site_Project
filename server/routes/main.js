const express = require('express');
const router = express.Router();
const post = require('../models/post');

// Routers
router.get('/', async (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDB."
    }

    try{
        const data = await post.find();
        res.render('index', {locals, data});
    } catch (error) {
        console.log(error);
    }
    

});

function insertPostData(){
    post.insertMany([
        {
            title: "Building a Blog",
            body: "This is the body text"
        },
    ])
}

insertPostData();

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;