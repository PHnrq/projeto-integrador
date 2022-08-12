const productImage = document.getElementById('productImage');

const fileChosen = document.getElementById('file-chosen');

productImage.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})