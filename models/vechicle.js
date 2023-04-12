const mongoose = require("mongoose")
const vechicleSchema = mongoose.Schema({
    vechicle_type: String,
    color: String,
    no_of_tyres: Number
})
module.exports = mongoose.model("Vechicle",
    vechicleSchema)