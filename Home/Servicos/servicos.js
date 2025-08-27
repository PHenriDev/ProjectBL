// ======== SERVIÇOS ========
const servicos = [
    {
        titulo: "Manutenção",
        descricao: "Manutenção preventiva e corretiva de painéis solares e instalações elétricas.",
        imagem: "../img/manutencao.jpg"
    },
    {
        titulo: "Instalação de Painel Solar",
        descricao: "Instalação completa de painéis solares residenciais e comerciais.",
        imagem: "../img/painel_solar.jpg"
    },
    {
        titulo: "Orçamento",
        descricao: "Orçamento personalizado para seu projeto de energia solar.",
        imagem: "../img/orcamento.jpg"
    },
    {
        titulo: "Instalação Elétrica",
        descricao: "Serviços elétricos especializados para garantir eficiência e segurança.",
        imagem: "../img/instalacao_eletrica.jpg"
    }
];

const servicosGrid = document.getElementById('servicosGrid');

servicos.forEach(servico => {
    const card = document.createElement('div');
    card.classList.add('servico-card');
    card.innerHTML = `
        <img src="${servico.imagem}" alt="${servico.titulo}">
        <h3>${servico.titulo}</h3>
        <p>${servico.descricao}</p>
        <button>Solicitar</button>
    `;
    servicosGrid.appendChild(card);
});

// ======== AVALIAÇÕES ========
const avaliacoes = [
    {
        nome: "João Silva",
        comentario: "Serviço excelente! Profissionais muito qualificados e atendimento top.",
        estrelas: 5,
        imagem: "../img/cliente1.jpg"
    },
    {
        nome: "Maria Oliveira",
        comentario: "Fiquei muito satisfeita com a instalação do meu painel solar.",
        estrelas: 4,
        imagem: "../img/cliente2.jpg"
    }
];

const avaliacoesGrid = document.getElementById('avaliacoesGrid');

avaliacoes.forEach(avaliacao => {
    const card = document.createElement('div');
    card.classList.add('avaliacao-card');

    // Monta as estrelas
    let starsHtml = '';
    for(let i = 0; i < avaliacao.estrelas; i++) starsHtml += '★';
    for(let i = avaliacao.estrelas; i < 5; i++) starsHtml += '☆';

    card.innerHTML = `
        <img src="${avaliacao.imagem}" alt="${avaliacao.nome}">
        <h4>${avaliacao.nome}</h4>
        <div class="stars">${starsHtml}</div>
        <p>${avaliacao.comentario}</p>
    `;

    avaliacoesGrid.appendChild(card);
});
