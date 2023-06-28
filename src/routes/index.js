const express = require('express');
const router = express.Router()

router.get('/', async (req,res) => {
    res.render('pages/index');
    //reder() -> devolve as views
});

module.exports = router;