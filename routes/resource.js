var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vechicle_controller = require('../controllers/vechicle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Vechicle ROUTES ///
// POST request for creating a Vechicle.
router.post('/vechicles', vechicle_controller.vechicle_create_post);
// DELETE request to delete Vechicle.
router.delete('/vechicles/:id', vechicle_controller.vechicle_delete);
// PUT request to update Vechicle.
router.put('/vechicles/:id', vechicle_controller.vechicle_update_put);
// GET request for one Vechicle.
router.get('/vechicles/:id', vechicle_controller.vechicle_detail);
// GET request for list of all Vechicle items.
router.get('/vechicles', vechicle_controller.vechicle_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"vechicles", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
