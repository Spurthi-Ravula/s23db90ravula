var express = require('express');
const vechicle_controlers= require('../controllers/vechicle');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or
// redirect to login. 
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET vechicles */
router.get('/', vechicle_controlers.vechicle_view_all_Page);

/* GET detail vechicle page */
router.get('/detail', vechicle_controlers.vechicle_view_one_Page);

/* GET create vechicle page */
router.get('/create', vechicle_controlers.vechicle_create_Page);

/* GET create update page */
router.get('/update', secured, vechicle_controlers.vechicle_update_Page);

/* GET delete vechicle page */
router.get('/delete', vechicle_controlers.vechicle_delete_Page);


module.exports = router;



