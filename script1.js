const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
//all functions

function showError(input,message){
    const formcontrol=input.parentElement
    formcontrol.className='form-control error'
    const small=formcontrol.querySelector('small')
    small.innerText=message;
}
function showSuccess(input){
    const formcontrol=input.parentElement
    formcontrol.className='form-control success'
}
const isvalidateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value  === ''){
        showError(username,'username is required')
    }else{
        showSuccess(username);
    }

    if(email.value  === ''){
        showError(email,'email is required')
    }else if(!isvalidateEmail(email.value)){
           showError(email,'email  is invalid')
    }
    else{
        showSuccess(email)
    }

    if(password.value  === ''){
        showError(password,'password is required')
    }else{
        showSuccess(password)
    }

    if(password2.value  === ''){
        showError(password2,'password2 is required')
    }else{
        showSuccess(password2)
    }
})