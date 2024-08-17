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

function checkrequired(inputArray){
    inputArray.forEach(function(input){
       if(input.value === ''){
        showError(input,getfeild(input)+ ' is required')
       }
       else if(!isvalidateEmail(email.value)){
        showError(email,'email is invalid')
       }
       else{
        showSuccess(input)
    }
    })
}

function getfeild(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

function checklength(input,min,max){
    if(input.value.length < min){
        showError(input,getfeild(input)+' needs to be at least '+min+' characters')
    }
    else if(input.value.length > max){
        showError(input,getfeild(input)+' needs to be less than ' +max+' character')
}
}

function checkpasswordmatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'password dont match')
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    checkrequired([username,email,password,password2])
    checklength(username,3,10)
    checklength(password,6,30)
    checkpasswordmatch(password,password2)
})
console.log('hello')