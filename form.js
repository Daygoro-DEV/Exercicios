// Seleciona o formulário
const form = document.getElementById('myForm');

// Seleciona as divs de mensagem
const validMessage = document.getElementById('validMessage');
const invalidMessage = document.getElementById('invalidMessage');

// Adiciona um ouvinte para o evento de submit do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores de A e B do formulário
    const numberA = document.getElementById('numberA').value;
    const numberB = document.getElementById('numberB').value;

    // Verifica se B é maior que A
    if (numberB > numberA) {
        // Mostra a mensagem de formulário válido e oculta a mensagem de inválido
        validMessage.style.display = 'block';
        invalidMessage.style.display = 'none';
    } else {
        // Mostra a mensagem de formulário inválido e oculta a mensagem de válido
        invalidMessage.style.display = 'block';
        validMessage.style.display = 'none';
    }

    clearForm();
    // Limpa o formulário após a validação

});

// Função para limpar os campos do formulário
function clearForm() {
    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
}