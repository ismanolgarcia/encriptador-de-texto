const encrypter = document.getElementById('encrypter');
const decrypt = document.getElementById('decrypt');
const input = document.getElementById('input');
const ouput = document.getElementById('ouput');

const newButton = document.createElement('button');

function createButton() {
  newButton.textContent = 'copiar el texto';
  newButton.classList = 'button button--copy';
  ouput.append(newButton);
}

function encriptar() {
  value = input.value
    .toLowerCase()
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

  if (input.value === '') {
    input.className = 'input__texttarea input__texttarea--red';
    input.placeholder = 'Ingresa el texto que desees encriptar o desencriptar.';
  } else {
    ouput.className = 'content__ouput ouput';
    ouput.innerText = value;
    input.value = '';
    createButton();
  }
}

function desencriptar() {
  value = input.value
    .toLowerCase()
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  if (input.value === '') {
    input.className = 'input__texttarea input__texttarea--red';
    input.placeholder = 'Ingresa el texto que desees encriptar o desencriptar.';
  } else {
    ouput.className = 'content__ouput ouput';
    ouput.innerText = value;
    input.value = '';
    createButton();
  }
}

function copy() {
  value = ouput.innerHTML.replaceAll(
    '<button class="button button--copy">copiar el texto</button>',
    ''
  );
  navigator.clipboard.writeText(value);
  newButton.textContent = 'Texto copiado!';
}

newButton.addEventListener('click', copy);
encrypter.addEventListener('click', encriptar);
decrypt.addEventListener('click', desencriptar);
