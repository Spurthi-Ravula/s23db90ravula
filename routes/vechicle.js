var express = require('express');
const vechicle_controlers= require('../controllers/vechicle');
var router = express.Router();

/* GET vechicles */
router.get('/', vechicle_controlers.vechicle_view_all_Page);
module.exports = router;



