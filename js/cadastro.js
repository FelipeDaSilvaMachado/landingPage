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

function gerarIdSequencial() {
    // Recupera o último ID gerado ou começa com 1 se não houver nenhum
    let ultimoId = parseInt(localStorage.getItem('ultimoId')) || 0;
    // Se o ID não existir ou for 0, começa do ID 1
    let novoId = (ultimoId === 0) ? 1 : ultimoId + 1;
    // Armazena o novo ID no localStorage
    localStorage.setItem('ultimoId', novoId);
    return novoId; // Retorna o novo ID gerado
}

// Função para exibir o ID ao carregar a página
function exibirIdUsuario() {
    const idUsuario = gerarIdSequencial();
    document.getElementById('idUsuario').value = idUsuario; // Exibe o ID no input
}

function enviarCadastro() {
    const idUsuario = gerarIdSequencial(); // Gerando ID único sequencial para o usuário
    const nome = document.querySelector('.nome').value;
    const idade = document.querySelector('.idade').value;
    const telefone = document.querySelector('.telefone').value;

    if (!nome || !idade || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibe o ID no input
    document.getElementById('idUsuario').value = idUsuario; // Exibe o ID

    cadastro.push({
        idUsuario: idUsuario,
        nome: nome,
        idade: idade,
        telefone: telefone
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        gerarIdSequencial(); // Exibe o ID quando a página for carregada
    });

    // Salva os cadastros no localStorage
    let cadastrosExistentes = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastrosExistentes.push({
        idUsuario: idUsuario,
        nome: nome,
        idade: idade,
        telefone: telefone
    });
    localStorage.setItem('cadastros', JSON.stringify(cadastrosExistentes));

    const mensagem = `Olá, tudo bem? Estou me cadastrando em sua loja quais são suas promoções?
                     \nNome: ${nome}\nIdade: ${idade}\nTelefone: ${telefone}`;
    const numeroWhatsApp = '+5511989217437'; //+5511994874241
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsApp, '_blank');
    localStorage.setItem('nome', nome);
    localStorage.setItem('telefone', telefone);
}

// Garantir que o ID seja exibido quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    exibirIdUsuario(); // Exibe o ID na tela ao carregar a página
});