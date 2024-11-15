function enviarPesquisa() {
    // Recupera os dados do usuário do localStorage
    const nome = localStorage.getItem('nome');
    const telefone = localStorage.getItem('telefone');

    // Verifica se o nome e telefone estão disponíveis
    if (!nome || !telefone) {
        alert('Não foi possível encontrar os dados do usuário. Certifique-se de que você completou o cadastro.');
        return;
    }

    const itens = document.querySelectorAll('.divItens');
    let mensagem = "Pesquisa de Clientes NegoStore23K:\n\n";

    // Adiciona nome e telefone ao início da mensagem
    mensagem += `Nome: ${nome}\nTelefone: ${telefone}\n\n`;

    let peloMenosUmSelecionado = false;

    itens.forEach((item) => {
        const produto = item.querySelector('p').innerText;
        const checkBox = item.querySelector('input[type="checkbox"]');
        const select = item.querySelector('select');

        if (checkBox.checked) {
            mensagem += `${produto} - Tamanho: ${select.value}\n`;
            peloMenosUmSelecionado = true;
        }
    });

    if (!peloMenosUmSelecionado) {
        // Exibe um alerta se nenhum item for selecionado e para a função aqui
        alert("Por favor, selecione pelo menos um item para enviar a pesquisa.");
        return; // Para a função se nenhuma opção foi selecionada
    }

    const numeroWhatsApp = '+5511994874241'; // +5511989217437 Substitua pelo número de telefone desejado
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o link do WhatsApp para enviar a mensagem
    window.open(linkWhatsApp, '_blank');
}

// Adicionar o evento de clique apenas uma vez, logo que o script for carregado
document.addEventListener('DOMContentLoaded', () => {
    const btnEnviaPesquisa = document.getElementById('btnEnviaPesquisa');
    if (btnEnviaPesquisa) {
        btnEnviaPesquisa.onclick = enviarPesquisa; // Usando .onclick para substituir qualquer evento duplicado
    }
});