var formValue = document.querySelector('#form1');
var elementName = document.querySelector('#elementName')
var atomNumber = document.querySelector('#atomNumber');
var atomMass = document.querySelector('#atomMass');
var electonegative = document.querySelector('#electonegative');
var density = document.querySelector('#density');
var meltPoint= document.querySelector('#meltPoint');
var boilPoint= document.querySelector('#boilPoint');
var vRadius= document.querySelector('#vRadius');
var ionRadius= document.querySelector('#ionRadius');
var isotopes= document.querySelector('#isotopes');
var eShell= document.querySelector('#eShell');
var energyFirstIon = document.querySelector('#energyFirstIon');
var dicoverer = document.querySelector('#dicoverer');

formValue.addEventListener('submit' , (event)=>{
    event.preventDefault();

    fetch('/element/info', {
        method : "POST",
        body : JSON.stringify({
            elementName :elementName.value,
            atomNumber : atomNumber.value,
            atomMass : atomMass.value,
            electonegative : electonegative.value,
            density : density.value,
            meltPoint : meltPoint.value,
            boilPoint : boilPoint.value,
            vRadius : vRadius.value,
            ionRadius :ionRadius.value,
            isotopes : isotopes.value,
            eShell : eShell.value,
            energyFirstIon : energyFirstIon.value,
            dicoverer : dicoverer.value
        }),
        headers : {
            'Content-Type' :'application/json; charset=utf-8'
        }
    }).then((result) => {
        result.json().then((res) => {
            if(res.error){
                console.log(res.error);
            }else{
                console.log(res.response);
                document.querySelector('#resultValue').innerHTML = "Added!!";
            }
        })
    } , (error) => {
        console.log(error);
    })
})
