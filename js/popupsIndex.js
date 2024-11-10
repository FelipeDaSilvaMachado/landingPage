// Abrir o PopUp do botao Cadastro
function popupCadastro(url) {
    // Especificar a URL da página que será aberta no popup
    var url = "cadastro.html";
    var telaPopup = "width=700,height=500, scrollbars=no,resizable=no";
    window.open(url, "popupWindow", telaPopup);
    return false; // Para evitar o comportamento padrão do link
}

// Abrir o PopUp do botao Pesquisa
function popupPesquisa(url) {
    // Especificar a URL da página que será aberta no popup
    var url = "pesquisa.html";
    var telaPopup = "width=700,height=500, scrollbars=no,resizable=no";
    window.open(url, "popupWindow", telaPopup);
    return false; // Para evitar o comportamento padrão do link
}