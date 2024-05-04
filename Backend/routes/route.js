const express = require('express');
const router = express.Router();
const Post = require("../data/postschema");

router.get('/data', async (req, res) => {
    try {
        const data = await Post.find({});
        res.json({ msg: true, data: data });
    } catch (error) {
        res.status(500).json({ msg: false, error: error.message });
    }
});

module.exports = router;