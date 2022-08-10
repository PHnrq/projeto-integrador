const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel')

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}


nome.addEventListener('blur', () => {
  if(nome.validity.valueMissing) {
    nome.nextElementSibling.innerHTML = `O nome não pode ser vazio`
  }else{
    nome.nextElementSibling.innerHTML = ``
  }
})

email.addEventListener('blur', () => {
  if(email.validity.valueMissing) {
    email.nextElementSibling.innerHTML = `O email não pode ser vazio`
  }else{
    email.nextElementSibling.innerHTML = ``
  }

  if(email.validity.patternMismatch) {
    email.nextElementSibling.innerHTML = `Email invalido`
  }else{
    email.nextElementSibling.innerHTML = ``
  }
})

tel.addEventListener('input', () => {
  tel.value = mphone(tel.value)
})

tel.addEventListener('blur', () => {
  let telNumbers = tel.value.replace(/\D/g, '')

  if(telNumbers.length != 11){
    tel.nextElementSibling.innerHTML = `Telefone invalido`
  }else{
    tel.nextElementSibling.innerHTML = ``
  }
})