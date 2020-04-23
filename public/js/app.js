var formData = document.querySelector('#contactForm')
var nameField = document.querySelector('#full-name-field')
var emailField = document.querySelector('#mail-field')
var messageField = document.querySelector('#user-msg-field')

formData.addEventListener('submit' , (event) => {
    event.preventDefault()

    fetch('/contact' , {
        method : "POST",
        body : JSON.stringify({
            name : nameField.value,
            email : emailField.value,
            textBox : messageField.value
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
            }
        })
    })
})