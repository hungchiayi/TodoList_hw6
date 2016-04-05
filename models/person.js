var mongoose = require('mongoose' );
mongoose.connect('mongodb://cloris:cloris9885@ds015730.mlab.com:15730/cloris');
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    title      : String,
    content    : String,
    updated_at : Date
});

module.exports = mongoose.model( 'Todo', Todo );
