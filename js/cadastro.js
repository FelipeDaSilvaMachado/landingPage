let cadastro = []

const telefoneInput = (event) => {
    let telefone = event.target
    telefone.value = phoneMask(telefone.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

// Adicionar o Event Listener ao campo de telefone
document.getElementById('telefone').addEventListener('input', telefoneInput);

function enviarCadastro() {
    const nome = document.querySelector('.nome').value;
    const idade = document.querySelector('.idade').value;
    const telefone = document.querySelector('.telefone').value;

    cadastro.push({
        nome: nome,
        idade: idade,
        telefone: telefone
    });
    const mensagem = `Olá, tudo bem? Estou me cadastrando em sua loja quais são suas promoções?
                     \nNome: ${nome}\nIdade: ${idade}\nTelefone: ${telefone}`;
    const numeroWhatsApp = '+5511994874241';
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsApp, '_blank');
}