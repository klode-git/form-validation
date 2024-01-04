let emri = document.getElementById('emri');
let mbiemri = document.getElementById('mbiemri');
let email = document.getElementById('email');
let password = document.getElementById('password');
let konfirmo_password = document.getElementById('konfirmo_password');
let termat_kushtet = document.getElementById('termat_kushtet');
let form = document.getElementById('form');
let sms = document.getElementById('sms');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   formValidation();
// })

function formValidation() {
  let $emri = emri.value.trim();
  let $mbiemri = mbiemri.value.trim();
  let $email = email.value.trim();
  let $password = password.value.trim();
  let $konfirmo_password = konfirmo_password.value.trim();
  
  if($emri === '' || typeof $emri !== 'string') {
    emri.style.border = '2px solid red';
    emri.placeholder = 'Write your name';
  } else {
    emri.style.border = '2px solid green';
  }

  if($mbiemri === '' || typeof $mbiemri !== 'string') {
    mbiemri.style.border = '2px solid red';
    mbiemri.placeholder = 'Write your surname';
  } else {
    mbiemri.style.border = '2px solid green';
  }

  if(String($email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    email.style.border = '2px solid green';
    email.placeholder = 'Write your e-mail';
  } else {
    email.style.border = '2px solid red';
  }

  if($password.length < 8 ) {
    password.style.border = '2px solid red';
    password.placeholder = 'Write your password';

  } else {
    password.style.border = '2px solid green';
  }

  if($konfirmo_password.length < 8 ||  $konfirmo_password !== $password) {
    konfirmo_password.style.border = '2px solid red';
    konfirmo_password.placeholder = 'Confirm your password correctly';
  } else {
    konfirmo_password.style.border = '2px solid green';
  }

  if(termat_kushtet.checked) {
    sms.style.display = 'none';
  } else {
    sms.textContent = 'Accept Terms and Conditions';
    sms.style.color = 'red';
    sms.style.marginBottom = '10px';
  }
}