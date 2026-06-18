// Seleção dos elementos do DOM
const btnTema = document.getElementById('btn-tema');
const btnVerificar = document.getElementById('btn-verificar');
const formQuiz = document.getElementById('quiz-form');
const divResultado = document.getElementById('resultado');

// 1. Funcionalidade: Modo Escuro (Acessibilidade)
btnTema.addEventListener('click', () => {
    // Altera a classe no body para ativar as variáveis do CSS
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão dinamicamente
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = 'Alternar Modo Claro';
    } else {
        btnTema.textContent = 'Alternar Modo Escuro';
    }
});

// 2. Funcionalidade: Validador do Quiz Anti-Desinformação
btnVerificar.addEventListener('click', () => {
    // Captura a opção selecionada pelo usuário
    const opcaoSelecionada = formQuiz.elements['p1'].value;
    
    // Variável para processar a mensagem de feedback antes de exibir
    let mensagemFeedback = "";

    if (opcaoSelecionada === "correto") {
        mensagemFeedback = "🎉 Parabéns! Você acertou. Piscar pouco e falhas nas sombras são sinais clássicos de rostos gerados por IA.";
        divResultado.style.backgroundColor = "#27ae60"; // Verde para sucesso
    } else if (opcaoSelecionada === "errado") {
        mensagemFeedback = "❌ Ops, resposta errada! Tente novamente. Lembre-se de que deepfakes costumam apresentar pequenas falhas visuais no rosto.";
        divResultado.style.backgroundColor = "#c0392b"; // Vermelho para erro
    } else {
        mensagemFeedback = "⚠️ Por favor, selecione uma alternativa antes de verificar!";
        divResultado.style.backgroundColor = "#f39c12"; // Amarelo para aviso
    }

    // Exibe o resultado manipulando o texto e removendo a classe que esconde a div
    divResultado.textContent = mensagemFeedback;
    divResultado.classList.remove('escondido');
});
