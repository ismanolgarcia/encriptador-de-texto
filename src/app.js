const encrypter = document.getElementById('encrypter');
const decrypt = document.getElementById('decrypt');
const input = document.getElementById('input');
const ouput = document.getElementById('ouput');

function encriptar() {
  value = input.value
    .toLowerCase()
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

  ouput.className = 'content__ouput ouput';
  ouput.innerText = value;
}

function desencriptar() {
  value = input.value
    .toLowerCase()
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  ouput.className = 'content__ouput ouput';
  ouput.innerText = value;
}

encrypter.addEventListener('click', encriptar);
decrypt.addEventListener('click', desencriptar);
