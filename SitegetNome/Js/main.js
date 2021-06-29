
function submit() {
    var input = document.getElementById('name');
    var texto = input.value;

    console.log("Nome inserido: " + texto);

    if ( isNaN(texto) ) {
        alert("Olá Sr. " + texto + " Balalaika");
    } else {
        alert("Não coloque números");
    }
}
