/*server/models/business.js
Mintu Vipin Joy
301135483
25/10/2020 */
let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "business"
});

module.exports = mongoose.model('business_contacts', businessModel);