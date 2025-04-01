let formulario = document.querySelector('form');
let nome = document.getElementById('nome');
let data = document.getElementById('dia');
let horario = document.getElementById('horario');
let mensagem = document.getElementsByClassName('mensagem');


formulario.addEventListener('submit', (evento) => {
    if (nome.value === "" && data.value === "" && horario.value === "") {
        evento.preventDefault();
        mensagem.textContent = 'Preencha todos os campos';
        console.log(mensagem);
    } else {
        mensagem.textContent = "Formulario enviado!";

    }
});