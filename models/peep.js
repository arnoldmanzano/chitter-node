var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peepSchema = new Schema({
    message: String
});

module.exports = mongoose.model('Peep', peepSchema);
