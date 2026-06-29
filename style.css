/* Cores do Modo Claro (Padrão) */
:root {
    --bg-geral: #f4f6f9;
    --bg-card: #ffffff;
    --texto: #2c3e50;
    --primaria: #3498db;
    --card-costas: #34495e;
}

/* Cores do Modo Escuro */
body.dark-mode {
    --bg-geral: #1a1a2e;
    --bg-card: #162447;
    --texto: #e4e6eb;
    --primaria: #007bff;
    --card-costas: #1f4068;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: sans-serif;
    background-color: var(--bg-geral);
    color: var(--texto);
    padding: 20px;
    transition: background 0.3s, color 0.3s;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

button {
    padding: 10px 15px;
    background-color: var(--primaria);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

main {
    max-width: 900px;
    margin: 0 auto;
}

section {
    background-color: var(--bg-card);
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 8px;
}

h2 {
    margin-bottom: 15px;
}

/* Grid para Artigos e Mídias ficarem lado a lado */
.artigos-grid, .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.artigo, .media-card {
    background-color: var(--bg-geral);
    padding: 15px;
    border-radius: 6px;
}

/* Imagens e Vídeos Ajustados */
.img-responsiva {
    width: 100%;
    height: auto;
    border-radius: 4px;
    display: block;
    margin-top: 10px;
}

.video-responsivo {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-top: 10px;
}

.video-responsivo iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}

/* Tabuleiro do Jogo da Memória (12 Cartas - Nível Médio) */
.tabuleiro-memoria {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 450px;
    margin: 20px auto 0 auto;
}

.carta-memoria {
    height: 80px;
    background-color: var(--card-costas);
    color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    user-select: none;
}

/* Quando a carta é virada */
.carta-memoria.revelada, .carta-memoria.combinada {
    background-color: var(--bg-geral);
    color: var(--texto);
    border: 2px solid var(--primaria);
}

#status-jogo {
    text-align: center;
    font-weight: bold;
    margin-top: 15px;
    color: #2ecc71;
}
