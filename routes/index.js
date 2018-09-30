var express = require('express');
var router = express.Router();
var userModel = require('../model/user')
const user = require ('../controller/user')
const article = require('../controller/article')
router.use(user)
router.use(article)




module.exports = router;
