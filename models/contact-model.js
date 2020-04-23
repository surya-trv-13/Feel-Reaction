var {mongoose} = require('../Database-Manager/db')
var Schema = mongoose.Schema;
var ContactSchema = new Schema({
    name : {
        required : true,
        type : String,
        minlength : 5
    },
    email : {
        type : String,
        required : true,
        minlength : 5
    },
    textBox : {
        type : String,
        required : true,
        minlength : 5
    }
})

var Contact = mongoose.model('Contact-Form' , ContactSchema);

module.exports = {
    Contact
}