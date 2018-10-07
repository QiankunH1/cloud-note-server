var express = require('express');
var router = express.Router();
var userModel = require('../model/user')
const articleModel = require('../model/article')
const categoryModel = require('../model/category')
const user = require ('../controller/user')
const article = require('../controller/article')
const category = require('../controller/category')
router.use(user)
router.use(article)
router.use(category)




module.exports = router;
