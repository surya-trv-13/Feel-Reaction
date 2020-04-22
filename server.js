var {Elements} = require('./models/elements-model')

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



route.listen(PORT , ()=>{
    console.log(`Server running on PORT = ${PORT}`)
});