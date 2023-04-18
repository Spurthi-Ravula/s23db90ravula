var express = require('express');
const vechicle_controlers= require('../controllers/vechicle');
var router = express.Router();

/* GET vechicles */
router.get('/', vechicle_controlers.vechicle_view_all_Page);

/* GET detail vechicle page */
router.get('/detail', vechicle_controlers.vechicle_view_one_Page);

/* GET create costume page */
router.get('/create', vechicle_controlers.vechicle_create_Page);

module.exports = router;



