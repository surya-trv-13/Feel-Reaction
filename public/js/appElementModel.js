var formData = document.querySelector('#form2');

formData.addEventListener('submit' , (e)=>{
    e.preventDefault();

    var formDataModel = new FormData(document.getElementById('form2'));
    fetch('/element/model' , {
        method : "POST",
        body : formDataModel
    }).then((result) => {
        result.json().then((res) => {
            if(res.error){
                console.log(res.error);
            }else{
                console.log(res.response);
            }
        })
    },(error) => {
        console.log(error);
        
    })
})