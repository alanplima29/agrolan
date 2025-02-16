document.addEventListener('DOMContentLoaded', function () {
    // Atualiza os campos de texto (labels) ao carregar a página
    M.updateTextFields();

    // Recupera os valores salvos no localStorage (se existirem)
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Preenche os campos e atualiza os labels
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }

    // Atualiza os labels novamente após preencher os campos
    M.updateTextFields();

    // Adiciona um evento de submit ao formulário
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.querySelector('input[type="checkbox"]').checked;

        // Exibe os valores no console
        console.log('Usuário:', username);
        console.log('Senha:', password);

        // Verifica se o usuário marcou "Lembrar de mim"
        if (rememberMe) {
            // Salva os dados no localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Salva os dados no sessionStorage (dados são apagados ao fechar o navegador)
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            // Remove os dados do localStorage, se existirem
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        console.log('Login realizado com sucesso!');
    });
});