var {Elements} = require('./models/elements-model')
var {Contact} = require('./models/contact-model');
var {Info} = require('./models/info-model');

var {ObjectID} = require('mongodb')
var express = require('express')
var hbs = require('hbs')
var bodyParser = require('body-parser')
var multer = require('multer')
var PORT = process.env.PORT


var route = express()
route.use(bodyParser.json())
route.use(express.static(__dirname+'/public'))
route.set('view engine','hbs')

route.get('/' , (req,res) => {
    res.render('index' , {
        title : 'Feel-Reaction'
    })
})

route.post('/contact' , (req , res) => {
    var contact = new Contact({
        name : req.body.name,
        email : req.body.email,
        textBox : req.body.textBox
    })

    contact.save().then((response) => {   
        res.status(200).send({response});
    }, (error) => {
        res.status(400).send({error});
    })
})

route.get('/element' , (req, res) => {
    res.render('elementAdd');
});

route.post('/element/info' , (req ,res) => {
    var infoElement = new Info({
        elementName: req.body.elementName, 
        atomNumber: req.body.atomNumber, 
        atomMass: req.body.atomMass, 
        electonegative: req.body.electonegative, 
        density: req.body.density, 
        meltPoint: req.body.meltPoint, 
        boilPoint: req.body.boilPoint, 
        vRadius: req.body.vRadius, 
        ionRadius: req.body.ionRadius, 
        isotopes: req.body.isotopes, 
        eShell: req.body.eShell, 
        energyFirstIon: req.body.energyFirstIon, 
        dicoverer: req.body.dicoverer 
    })

    infoElement.save().then((response) => {
        res.status(200).send({response});
    }, (error) => {
        res.status(400).send({error});
    })
})

route.listen(PORT , ()=>{
    console.log(`Server running on PORT = ${PORT}`)
});