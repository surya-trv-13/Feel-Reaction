var {Elements} = require('./models/elements-model')
var {Contact} = require('./models/contact-model');

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


route.listen(PORT , ()=>{
    console.log(`Server running on PORT = ${PORT}`)
});