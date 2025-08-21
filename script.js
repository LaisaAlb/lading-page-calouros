function enviarWhatsApp(event) {
    event.preventDefault(); // Previne o envio normal do formulário

    // Obtém os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Codifica a mensagem para ser usada na URL
    const mensagemCompleta = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    // Formata o link para o WhatsApp com a mensagem
    const numeroWhatsApp = "+558198857075";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemCompleta)}`;

    // Redireciona para o WhatsApp
    window.open(linkWhatsApp, "_blank");
}