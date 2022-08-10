const nome = document.querySelector('#name');
const email = document.querySelector('#email');


nome.addEventListener('blur', () => {
  if(nome.validity.valueMissing) {
    nome.nextElementSibling.innerHTML = `O nome não pode ser vazio`
  }else{
    nome.nextElementSibling.innerHTML = ``
  }
})
