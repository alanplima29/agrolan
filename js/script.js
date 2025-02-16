$(document).ready(function() {
    // Evento para validar a senha e a confirmação de senha
    $('#confirmar-senha').on('input', function() {
        var senha = $('#senha').val();
        var confirmarSenha = $(this).val();

        if (senha !== confirmarSenha) {
            $('#mensagem-senha').text('As senhas não coincidem.').css('color', 'red');
        } else {
            $('#mensagem-senha').text('Senhas coincidem.').css('color', 'green');
        }
    });

    // Evento para validar a senha ao digitar
    $('#senha').on('input', function() {
        var senha = $(this).val();
        var confirmarSenha = $('#confirmar-senha').val();

        if (confirmarSenha && senha !== confirmarSenha) {
            $('#mensagem-senha').text('As senhas não coincidem.').css('color', 'red');
        } else if (confirmarSenha) {
            $('#mensagem-senha').text('Senhas coincidem.').css('color', 'green');
        }
    });
});

/*Máscara CPF*/
$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
});
/*Máscara CEP*/
$(document).ready(function() {
    $('#cep').mask('00000-000');
});

/*Máscara Telefone*/
$(document).ready(function() {
    $('#fone').mask('(00) 00000-0000');
});