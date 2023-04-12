var Vechicle = require('../models/vechicle');
// List of all Vechicles
exports.vechicle_list = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle list');
};
// for a specific Vechicle.
exports.vechicle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle detail: ' + req.params.id);
};
// Handle Vechicle create on POST.
exports.vechicle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle create POST');
};
// Handle Vechicle delete form on DELETE.
exports.vechicle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle delete DELETE ' + req.params.id);
};
// Handle Vechicle update form on PUT.
exports.vechicle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicles update PUT' + req.params.id);
};
