const router = require('express').Router();
const users = require('./users');
const products = require('./products');
module.exports = router;

router.use('/users', users);
// router.use('/products', products);