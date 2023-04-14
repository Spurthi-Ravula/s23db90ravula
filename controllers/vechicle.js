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

// List of all Vechicles
exports.vechicle_list = async function(req, res) {
    try{
    theVechicles = await Vechicle.find();
    res.send(theVechicles);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.vechicle_view_all_Page = async function(req, res) {
    try{
        theVechicles = await Vechicle.find();
    res.render('vechicle', { title: 'Vechicle Search Results', results: theVechicles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Vechicle create on POST.
exports.vechicle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Vechicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.vechicle_type = req.body.vechicle_type;
    document.color = req.body.color;
    document.no_of_tyres = req.body.no_of_tyres;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
     
    
