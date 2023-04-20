var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
  var texto = textInput.value;
  var resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  outInput.innerHTML = '<textarea readonly id="input-texto">' + resultado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar(\'' + resultado + '\')">Copiar</button>';
}

function descriptografar() {
  var texto = textInput.value;
  var resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  outInput.innerHTML = '<textarea readonly id="input-texto">' + resultado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar(\'' + resultado + '\')">Copiar</button>';
}

function copiar(resultado) {
  var copiar = document.createElement('textarea');
  copiar.value = resultado;
  document.body.appendChild(copiar);
  copiar.select();
  document.execCommand('copy');
  document.body.removeChild(copiar);
  alert("Texto copiado.");
}
