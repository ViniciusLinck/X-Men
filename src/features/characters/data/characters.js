import cardCiclopeJpg from "@/assets/images/card-ciclope.jpg";
import cardCiclopePng from "@/assets/images/card-ciclope.png";
import cardJeanGreyJpg from "@/assets/images/card-jean-grey.jpg";
import cardJeanGreyPng from "@/assets/images/card-jean-grey.png";
import cardLinceNegraJpg from "@/assets/images/card-lince-negra.jpg";
import cardLinceNegraPng from "@/assets/images/card-lince-negra.png";
import cardTempestadeJpg from "@/assets/images/card-tempestade.jpg";
import cardTempestadePng from "@/assets/images/card-tempestade.png";
import cardVampiraJpg from "@/assets/images/card-vampira.jpg";
import cardVampiraPng from "@/assets/images/card-vampira.png";
import cardWolverineJpg from "@/assets/images/card-wolverine.jpg";
import cardWolverinePng from "@/assets/images/card-wolverine.png";
import cardNoturnoJpg from "@/assets/images/card-noturno.jpg";
import cardNoturnoPng from "@/assets/images/card-noturno.png";
import cardMagnetoJpg from "@/assets/images/card-magneto.jpg";
import cardMagnetoPng from "@/assets/images/card-magneto.png";

export const characters = [
  {
    id: "ciclope",
    name: "Ciclope",
    marvelName: "Cyclops",
    alias: "Scott Summers",
    description:
      "Lider estrategico dos X-Men, dispara rajadas opticas devastadoras e comanda equipes em campo.",
    firstAppearance: "X-Men #1 (1963)",
    origin: "Anchorage, Alaska",
    wikiUrl: "https://www.marvel.com/characters/cyclops-scott-summers",
    biography: [
      "Scott Summers teve sua habilidade ativada cedo e perdeu o controle dos disparos opticos apos um trauma grave.",
      "Com o visor de quartzo-rubi, transformou uma condicao instavel em disciplina de combate e lideranca.",
      "Sua tomada de decisao sob pressao fez dele um dos comandantes mais respeitados da historia mutante."
    ],
    powers: [
      "Rajadas opticas concussivas",
      "Controle de disparo por visor especializado",
      "Resistencia fisica e foco extremo"
    ],
    abilities: [
      "Lideranca tatico-militar",
      "Leitura rapida de campo",
      "Treinamento de combate corpo a corpo"
    ],
    affiliations: ["X-Men", "X-Factor", "Utopia"],
    facts: [
      "Foi estudante da Escola Xavier desde os primeiros ciclos.",
      "Trabalhou ao lado de Jean Grey e Wolverine em diversas formacoes.",
      "E uma referencia de estrategia para jovens mutantes."
    ],
    stats: {
      Forca: 72,
      Energia: 94,
      Velocidade: 68,
      Resistencia: 78,
      Estrategia: 96
    },
    cardImage: cardCiclopeJpg,
    portraitImage: cardCiclopePng
  },
  {
    id: "jean-grey",
    name: "Jean Grey",
    marvelName: "Jean Grey",
    alias: "Phoenix",
    description:
      "Telepata e telecinetica nivel omega, conectada a Forca Fenix e a eventos cosmicos de escala universal.",
    firstAppearance: "X-Men #1 (1963)",
    origin: "Annandale-on-Hudson, New York",
    wikiUrl: "https://www.marvel.com/characters/jean-grey",
    biography: [
      "Jean Grey manifestou telepatia e telecinese ainda adolescente, sob orientacao direta de Charles Xavier.",
      "Sua conexao com a Forca Fenix elevou seu poder para niveis cosmicos e redefiniu o destino dos X-Men.",
      "Mesmo diante de conflitos internos, Jean se mantem como pilar emocional e mental da equipe."
    ],
    powers: [
      "Telepatia de longo alcance",
      "Telecinese molecular",
      "Ligacao com a Forca Fenix"
    ],
    abilities: ["Leitura mental precisa", "Bloqueio psiquico", "Estrategia com foco em suporte tatico"],
    affiliations: ["X-Men", "X-Factor", "Phoenix Five"],
    facts: [
      "E considerada uma das mentes mais poderosas do planeta.",
      "Sua historia com a Forca Fenix e central no universo mutante.",
      "Possui forte conexao com Ciclope e a familia Summers."
    ],
    stats: {
      Forca: 65,
      Energia: 100,
      Velocidade: 74,
      Resistencia: 82,
      Estrategia: 90
    },
    cardImage: cardJeanGreyJpg,
    portraitImage: cardJeanGreyPng
  },
  {
    id: "lince-negra",
    name: "Lince Negra",
    marvelName: "Kitty Pryde",
    alias: "Kitty Pryde",
    description:
      "Mutante capaz de atravessar materia solida com controle refinado e grande inteligencia de campo.",
    firstAppearance: "Uncanny X-Men #129 (1980)",
    origin: "Deerfield, Illinois",
    wikiUrl: "https://www.marvel.com/characters/shadowcat-kitty-pryde",
    biography: [
      "Kitty Pryde entrou para os X-Men muito jovem e rapidamente se destacou por inteligencia e adaptabilidade.",
      "Sua fase de intangibilidade permite ignorar barreiras fisicas e sistemas de defesa convencionais.",
      "Ao longo dos anos, evoluiu de novata para lider de esquadro e mentora de novos recrutas."
    ],
    powers: [
      "Intangibilidade corporal",
      "Interferencia em sistemas eletronicos durante fase",
      "Deslocamento atraves de estruturas solidas"
    ],
    abilities: ["Alta capacidade analitica", "Treinamento em combate", "Lideranca de equipes jovens"],
    affiliations: ["X-Men", "Excalibur", "Guardioes da Galaxia"],
    facts: [
      "Tambem atuou com o codinome Shadowcat.",
      "Ja liderou a equipe Marauders em fases modernas dos quadrinhos.",
      "Tem historico de operacoes furtivas de alta complexidade."
    ],
    stats: {
      Forca: 58,
      Energia: 80,
      Velocidade: 77,
      Resistencia: 70,
      Estrategia: 87
    },
    cardImage: cardLinceNegraJpg,
    portraitImage: cardLinceNegraPng
  },
  {
    id: "tempestade",
    name: "Tempestade",
    marvelName: "Storm",
    alias: "Ororo Munroe",
    description:
      "Controla clima e pressao atmosferica em larga escala, combinando poder elemental e presenca de lideranca.",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    origin: "Harlem, New York / Cairo, Egito / Quenia",
    wikiUrl: "https://www.marvel.com/characters/storm-ororo-munroe",
    biography: [
      "Ororo foi reverenciada como deusa em parte da Africa antes de integrar a Escola Xavier.",
      "Sua conexao com padroes atmosfericos permite gerar tornados, raios, gelo e alteracoes climaticas massivas.",
      "Tempestade tambem liderou os X-Men e atuou como rainha de Wakanda."
    ],
    powers: ["Manipulacao climatica", "Geracao de descargas eletricas", "Controle de umidade e pressao"],
    abilities: ["Combate corpo a corpo", "Lideranca diplomatica", "Pilotagem e sobrevivencia em campo"],
    affiliations: ["X-Men", "Marauders", "Wakanda"],
    facts: [
      "Ja venceu oponentes sem usar poderes, apenas tecnica.",
      "Possui vinculo forte com Pantera Negra em fases canonicas.",
      "E uma das lideres mais respeitadas entre humanos e mutantes."
    ],
    stats: {
      Forca: 67,
      Energia: 96,
      Velocidade: 82,
      Resistencia: 86,
      Estrategia: 91
    },
    cardImage: cardTempestadeJpg,
    portraitImage: cardTempestadePng
  },
  {
    id: "vampira",
    name: "Vampira",
    marvelName: "Rogue",
    alias: "Anna Marie",
    description:
      "Absorve memoria, vitalidade e, em mutantes, habilidades. E uma combatente poderosa e resiliente.",
    firstAppearance: "Avengers Annual #10 (1981)",
    origin: "Mississippi",
    wikiUrl: "https://www.marvel.com/characters/rogue",
    biography: [
      "Rogue enfrentou isolamento por nao conseguir tocar pessoas com seguranca durante anos.",
      "Ao entrar para os X-Men, encontrou suporte emocional e treinamento para controlar seu poder.",
      "Com experiencia de combate e lideranca, tornou-se uma das figuras mais fortes da equipe."
    ],
    powers: ["Absorcao de energia vital", "Copia temporaria de poderes", "Forca e voo em fases especificas"],
    abilities: ["Combate avancado", "Resistencia psiquica", "Atuacao ofensiva de curto alcance"],
    affiliations: ["X-Men", "Irmandade de Mutantes (passado)", "Vingadores (periodos pontuais)"],
    facts: [
      "Ja absorveu poderes extremamente perigosos e sobreviveu.",
      "Tem forte relacionamento com Gambit em varias linhas narrativas.",
      "Sua curva de evolucao e uma das mais marcantes dos X-Men."
    ],
    stats: {
      Forca: 88,
      Energia: 84,
      Velocidade: 72,
      Resistencia: 90,
      Estrategia: 79
    },
    cardImage: cardVampiraJpg,
    portraitImage: cardVampiraPng
  },
  {
    id: "wolverine",
    name: "Wolverine",
    marvelName: "Wolverine",
    alias: "Logan",
    description:
      "Soldado mutante com fator de cura extremo, garras de adamantium e experiencia de combate em qualquer terreno.",
    firstAppearance: "The Incredible Hulk #180 (1974)",
    origin: "Alberta, Canada",
    wikiUrl: "https://www.marvel.com/characters/wolverine-james-howlett",
    biography: [
      "Logan viveu decadas de conflitos, com memoria fragmentada e historico militar intenso.",
      "Seu fator de cura o torna extremamente dificil de neutralizar em batalha prolongada.",
      "Apesar do perfil feroz, atua como mentor de jovens mutantes e operador de missao critica."
    ],
    powers: ["Fator de cura regenerativo", "Garras de adamantium", "Sentidos ampliados"],
    abilities: ["Especialista em rastreamento", "Combate com armas e sem armas", "Sobrevivencia extrema"],
    affiliations: ["X-Men", "X-Force", "Vingadores"],
    facts: [
      "Passou por programa Weapon X.",
      "Tem rivalidade historica com Dentes-de-Sabre.",
      "E um dos personagens mais populares da franquia mutante."
    ],
    stats: {
      Forca: 86,
      Energia: 82,
      Velocidade: 75,
      Resistencia: 98,
      Estrategia: 83
    },
    cardImage: cardWolverineJpg,
    portraitImage: cardWolverinePng
  },
  {
    id: "noturno",
    name: "Noturno",
    marvelName: "Nightcrawler",
    alias: "Kurt Wagner",
    description:
      "Teletransportador de alta mobilidade, especialista em infiltracao e combate acrobatico de precisao.",
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    origin: "Bavaria, Alemanha",
    wikiUrl: "https://www.marvel.com/characters/nightcrawler-kurt-wagner",
    biography: [
      "Kurt foi perseguido por sua aparencia, mas construiu reputacao como heroi de empatia e coragem.",
      "Seu teletransporte gera deslocamento instantaneo com grande vantagem tatica.",
      "Combina agilidade, fe e senso de humor mesmo em conflitos de alta tensao."
    ],
    powers: ["Teletransporte", "Agilidade e reflexos sobre-humanos", "Aderencia e equilibrio aprimorados"],
    abilities: ["Espadachim habilidoso", "Acrobacia extrema", "Infiltracao silenciosa"],
    affiliations: ["X-Men", "Excalibur", "Piratas de Krakoa"],
    facts: [
      "Seu deslocamento deixa um rastro de fumaca caracteristico.",
      "Costuma operar em missoes de resgate de alto risco.",
      "E um dos mutantes mais queridos pelos companheiros."
    ],
    stats: {
      Forca: 64,
      Energia: 79,
      Velocidade: 95,
      Resistencia: 70,
      Estrategia: 81
    },
    cardImage: cardNoturnoJpg,
    portraitImage: cardNoturnoPng
  },
  {
    id: "magneto",
    name: "Magneto",
    marvelName: "Magneto",
    alias: "Erik Lehnsherr",
    description:
      "Mestre absoluto do magnetismo, manipula metais e campos eletromagneticos em escala monumental.",
    firstAppearance: "X-Men #1 (1963)",
    origin: "Nuremberg, Alemanha",
    wikiUrl: "https://www.marvel.com/characters/magneto",
    biography: [
      "Sobrevivente de tragedias historicas, Magneto defende os mutantes por meio de uma visao radical.",
      "Sua magnetocinese permite mover estruturas macicas, criar escudos e interferir em tecnologia.",
      "Oscila entre antagonista e aliado, mas sempre com impacto decisivo no destino mutante."
    ],
    powers: ["Magnetocinese", "Controle de campos eletromagneticos", "Levitacao e defesa energetica"],
    abilities: ["Comando militar", "Conhecimento cientifico avancado", "Estrategia geopolitica"],
    affiliations: ["Irmandade de Mutantes", "X-Men (fases especificas)", "Conselho de Krakoa"],
    facts: [
      "Tem relacao historica complexa com Charles Xavier.",
      "E considerado um dos mutantes mais poderosos do planeta.",
      "Seus ideais influenciam diferentes geracoes de mutantes."
    ],
    stats: {
      Forca: 80,
      Energia: 99,
      Velocidade: 71,
      Resistencia: 88,
      Estrategia: 95
    },
    cardImage: cardMagnetoJpg,
    portraitImage: cardMagnetoPng
  }
];

export function getCharacterById(id) {
  return characters.find((character) => character.id === id) || null;
}
