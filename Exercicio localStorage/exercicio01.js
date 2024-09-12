
function Enviar(){
    let numero = document.getElementById('inputNumero').value
    let texto = document.getElementById('inputMensagem').value
    localStorage.setItem('ValorNumero', numero)
    localStorage.setItem('ValorMensagem',texto)
}