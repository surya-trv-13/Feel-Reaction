var {mongoose} = require('../Database-Manager/db');

var Elements = mongoose.model('Element-model',{
    name : {
        require : true,
        type: String
    },
    model : {
        require : true,
        type : Buffer
    }
});

module.exports = {
    Elements
}