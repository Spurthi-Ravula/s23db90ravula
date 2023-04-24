const mongoose = require("mongoose")
const vechicleSchema = mongoose.Schema({
    vechicle_type: {
        type: String,
        required: true,
        unique: true,
        minLength: [2, "Invalid vechicle type"],
      },
    color: {
        type: String,
        required: true,
        minLength: [3, "Invalid vechicle color"],
      },
    no_of_tyres: {
        type: Number,
        required: true,
        min: [0, "invalid tyre count"],
      },
})
module.exports = mongoose.model("Vechicle",
    vechicleSchema)