// Elementos Gerais do DOM
const btnTema = document.getElementById('btn-tema');
const btnVerificar = document.getElementById('btn-verificar');
const formQuiz = document.getElementById('quiz-form');
const divResultado = document.getElementById('resultado');

// 1. Modo Escuro (Acessibilidade)
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnTema.textContent = document.body.classList.contains('dark-mode') ? 'Alternar Modo Claro' : 'Alternar Modo Escuro';
});

// 2. Validador de Respostas do Quiz
btnVerificar.addEventListener('click', () => {
    const opcaoSelecionada = formQuiz.elements['p1'].value;
    let mensagemFeedback = "";

    if (opcaoSelecionada === "correto") {
        mensagemFeedback = "🎉 Parabéns! Você acertou. Piscar pouco e falhas nas sombras são sinais clássicos de rostos gerados por IA.";
        divResultado.style.backgroundColor = "#27ae60";
    } else if (opcaoSelecionada === "errado") {
        mensagemFeedback = "❌ Ops, resposta errada! Tente novamente. Lembre-se de que deepfakes costumam apresentar pequenas falhas visuais no rosto.";
        divResultado.style.backgroundColor = "#c0392b";
    } else {
        mensagemFeedback = "⚠️ Por favor, selecione uma alternativa antes de verificar!";
        divResultado.style.backgroundColor = "#f39c12";
    }

    divResultado.textContent = mensagemFeedback;
    divResultado.classList.remove('escondido');
});

// 3. Mecânica Avançada: Jogo da Memória
const conceitos = [
    'Deepfake', 'Deepfake',
    'Fact-Checking', 'Fact-Checking',
    'Algoritmo', 'Algoritmo',
    'Privacidade', 'Privacidade'
];

// Embaralha os itens usando o método básico de ordenação aleatória
const conceitosEmbaralhados = conceitos.sort(() => 0.5 - Math.random());
const tabuleiro = document.getElementById('tabuleiro');
const statusJogo = document.getElementById('status-jogo');

let cartasSelecionadas = [];
let paresEncontrados = 0;

// Inicializa e monta as cartas dinamicamente no DOM
conteitosEmbaralhados.forEach((conceito, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta-memoria');
    carta.dataset.nome = conceito;
    carta.dataset.id = index;
    carta.textContent = conceito; // O texto fica oculto via CSS pela cor transparente
    
    carta.addEventListener('click', virarCarta);
    tabuleiro.appendChild(carta);
});

function virarCarta() {
    // Evita clicar na mesma carta ou clicar quando duas já estão sendo avaliadas
    if (cartasSelecionadas.length >= 2 || this.classList.contains('revelada') || this.classList.contains('combinada')) {
        return;
    }

    this.classList.add('revelada');
    cartasSelecionadas.push(this);

    if (cartasSelecionadas.length === 2) {
        checarPar();
    }
}

function checarPar() {
    const [carta1, carta2] = cartasSelecionadas;

    if (carta1.dataset.nome === carta2.dataset.nome) {
        // Se formarem um par
        carta1.classList.add('combinada');
        carta2.classList.add('combinada');
        paresEncontrados++;
        cartasSelecionadas = [];

        if (paresEncontrados === conceitos.length / 2) {
            statusJogo.textContent = "🏆 Excelente! Você dominou todos os conceitos contra a desinformação!";
        }
    } else {
        // Se errarem o par, vira de volta após 1 segundo
        setTimeout(() => {
            carta1.classList.remove('revelada');
            carta2.classList.remove('revelada');
            cartasSelecionadas = [];
        }, 1000);
    }
}
