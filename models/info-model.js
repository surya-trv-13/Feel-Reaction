var {mongoose} = require('../Database-Manager/db');

var Info = mongoose.model('Elements-Info', {
    elementName : {
        required : true,
        type : String
    },
    atomNumber :{
        required : true,
        type : Number
    },
    atomMass :{
        required : true,
        type : Number
    },
    electonegative :{
        required : true,
        type : Number
    },
    density : {
        required : true,
        type : Number
    },
    meltPoint : {
        required : true,
        type : Number
    },
    boilPoint : {
        required : true,
        type : Number
    },
    vRadius : {
        required : true,
        type : Number
    },
    ionRadius : {
        required : true,
        type : Number
    },
    isotopes : {
        required : true,
        type : String
    },
    eShell : {
        required : true,
        type : String
    },
    energyFirstIon : {
        required : true,
        type : Number
    },
    dicoverer : {
        required : true,
        type : String
    }
});

module.exports = {
    Info
}