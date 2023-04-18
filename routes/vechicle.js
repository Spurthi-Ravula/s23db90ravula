var express = require('express');
const vechicle_controlers= require('../controllers/vechicle');
var router = express.Router();

/* GET vechicles */
router.get('/', vechicle_controlers.vechicle_view_all_Page);

/* GET detail vechicle page */
router.get('/detail', vechicle_controlers.vechicle_view_one_Page);

/* GET create vechicle page */
router.get('/create', vechicle_controlers.vechicle_create_Page);

/* GET create update page */
router.get('/update', vechicle_controlers.vechicle_update_Page);

/* GET delete vechicle page */
router.get('/delete', vechicle_controlers.vechicle_delete_Page);


module.exports = router;



