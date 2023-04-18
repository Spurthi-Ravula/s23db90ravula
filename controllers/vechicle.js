var Vechicle = require('../models/vechicle');
// List of all Vechicles
exports.vechicle_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechicle list');
};
// for a specific vechicle. 
exports.vechicle_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Vechicle.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// // Handle Vechicle create on POST.
// exports.vechicle_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Vechicle create POST');
// };
// Handle Vechicle delete form on DELETE.
exports.vechicle_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Vechicle.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle vechicle update form on PUT. 
exports.vechicle_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Vechicle.findById(req.params.id)
        // Do updates of properties 
        if (req.body.vechicle_type)
            toUpdate.vechicle_type = req.body.vechicle_type;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.no_of_tyres) toUpdate.no_of_tyres = req.body.no_of_tyres;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// List of all Vechicles
exports.vechicle_list = async function (req, res) {
    try {
        theVechicles = await Vechicle.find();
        res.send(theVechicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.vechicle_view_all_Page = async function (req, res) {
    try {
        theVechicles = await Vechicle.find();
        res.render('vechicle', { title: 'Vechicle Search Results', results: theVechicles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Vechicle create on POST.
exports.vechicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vechicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.vechicle_type = req.body.vechicle_type;
    document.color = req.body.color;
    document.no_of_tyres = req.body.no_of_tyres;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.vechicle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Vechicle.findById(req.query.id)
        res.render('vechicledetail',
            { title: 'Vechicle Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a vechicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vechicle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('vechiclecreate', { title: 'Vechicle Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a vechicle.
// query provides the id
exports.vechicle_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Vechicle.findById(req.query.id)
        res.render('vechicleupdate', { title: 'Vechicle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.vechicle_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Vechicle.findById(req.query.id)
        res.render('vechicledelete', {
            title: 'Vechicle Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




