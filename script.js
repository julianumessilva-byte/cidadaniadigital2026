// 1. Modo Escuro Correto
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Quiz Complexo
const btnVerificar = document.getElementById('btn-verificar');
const formQuiz = document.getElementById('quiz-form');
const divResultado = document.getElementById('resultado');

btnVerificar.addEventListener('click', () => {
    const resposta = formQuiz.elements['p1'].value;

    if (resposta === "B") {
        divResultado.textContent = "🎉 Resposta Correta! Os algoritmos priorizam engajamento emocional, e a deteção precoce foca em falhas biométricas e volumétricas de renderização neural.";
        divResultado.style.backgroundColor = "#2ecc71";
    } else if (resposta === "") {
        divResultado.textContent = "⚠️ Selecione uma alternativa para validar.";
        divResultado.style.backgroundColor = "#e67e22";
    } else {
        divResultado.textContent = "❌ Incorreto. Analise os fatores de amplificação algorítmica e inconsistências biométricas (como reflexos e iluminação).";
        divResultado.style.backgroundColor = "#e74c3c";
    }
    divResultado.classList.remove('escondido');
});

// 3. Jogo da Memória Avançado (12 Cartas)
const conceitos = [
    'GANs', 'GANs',
    'Deepfake', 'Deepfake',
    'Biometria', 'Biometria',
    'Fact-Checking', 'Fact-Checking',
    'Criptografia', 'Criptografia',
    'Metadados', 'Metadados'
];

const conceitosEmbaralhados = conceitos.sort(() => 0.5 - Math.random());
const tabuleiro = document.getElementById('tabuleiro');
const statusJogo = document.getElementById('status-jogo');

let cartasSelecionadas = [];
let paresEncontrados = 0;

tabuleiro.innerHTML = "";
conceitosEmbaralhados.forEach((conceito) => {
    const carta = document.createElement('div');
    carta.classList.add('carta-memoria');
    carta.dataset.nome = conceito;
    carta.textContent = "?"; // Exibe "?" visualmente mesmo quando a cor esconde o texto interno
    carta.addEventListener('click', virarCarta);
    tabuleiro.appendChild(carta);
});

function virarCarta() {
    if (cartasSelecionadas.length >= 2 || this.classList.contains('revelada') || this.classList.contains('combinada')) {
        return;
    }

    this.classList.add('revelada');
    this.textContent = this.dataset.nome;
    cartasSelecionadas.push(this);

    if (cartasSelecionadas.length === 2) {
        checarPar();
    }
}

function checarPar() {
    const [carta1, carta2] = cartasSelecionadas;

    if (carta1.dataset.nome === carta2.dataset.nome) {
        carta1.classList.add('combinada');
        carta2.classList.add('combinada');
        paresEncontrados++;
        cartasSelecionadas = [];

        if (paresEncontrados === conceitos.length / 2) {
            statusJogo.textContent = "🏆 Excelente! Todos os conceitos avançados foram associados!";
        }
    } else {
        setTimeout(() => {
            carta1.classList.remove('revelada');
            carta2.classList.remove('revelada');
            carta1.textContent = "?";
            carta2.textContent = "?";
            cartasSelecionadas = [];
        }, 1000);
    }
}
