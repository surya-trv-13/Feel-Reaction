var {mongoose} = require('../Database-Manager/db');

var Elements = mongoose.model('Element-model',{
    name : {
        required : true,
        type: String
    },
    model : {
        required : true,
        type : Buffer
    }
});

module.exports = {
    Elements
}