const router = require('express').Router();
const {
    validUserSearchQuery
} = require('./utils/validators')
module.exports = router;
// Search for a user using a query string
router.get('/search', (req, res, next) => {
    if (validUserSearchQuery(req.query)) {
        res.send('Yipee!')
    } else {
        const err = new Error(400, 'Invalid user search query')
        next(err);
    }
})