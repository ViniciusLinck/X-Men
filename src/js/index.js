// Como pegar um UNICO ID de personagem:
// const itemCiclope = document.getElementById('ciclope');

// Como pegar todos os ID dos personagens:

const personagens = document.querySelectorAll('.personagem');

// Adicionando a classe selecionado no personagem escolido pelo cursor do mouse

// Variavel   //forEach = para cada  //personagem = id
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0,behavior: 'smooth' });
        }

        // Verificar se ja existe um personagem selecionado, se sim, devemos remover a selecao dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        // Pegando o elemento do personagem grande para adicionar as informações
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Alterando a imagem do Personagem Grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // Alterando o nome do personagem grande selecionado
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Alterando a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

















































