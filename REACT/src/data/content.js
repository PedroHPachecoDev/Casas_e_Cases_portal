export const images = {

  centroHistorico1: '/img/CENTRO_HISTORICO/IMG_8070.JPG',
  mirante1: '/img/MIRANTE/IMG_8019.JPG',
  fogoRancho1: '/img/FOGO_NO_RANCHO/IMG_9666.JPEG',
  unika1: '/img/UNIKA/IMG_6980.jpg',
  paisagem1: '/img/PAISAGEM/Captura de Tela (84).png',

  centroHistoricoP1: '/img/CENTRO_HISTORICO/IMG_8072.JPG',
  centroHistoricoP2: '/img/CENTRO_HISTORICO/IMG_8079.MOV',
  centroHistoricoP3: '/img/CENTRO_HISTORICO/IMG_8075.MOV',
  centroHistoricoP4: '/img/CENTRO_HISTORICO/IMG_8078.MOV',

  miranteP1: '/img/MIRANTE/IMG_8013.MP4', 
  
  fogoRanchoP1: '/img/FOGO_NO_RANCHO/IMG_9641.JPEG',
  fogoRanchoP2: '/img/FOGO_NO_RANCHO/IMG_9620.JPEG',
  fogoRanchoP3: '/img/FOGO_NO_RANCHO/IMG_9619.MP4',
  fogoRanchoP4: '/img/FOGO_NO_RANCHO/IMG_9638.MP4',
  fogoRanchoP5: '/img/FOGO_NO_RANCHO/IMG_9640.MOV',
  
  unikaP1: '/img/UNIKA/IMG_6964.MOV',
  unikaP2: '/img/UNIKA/IMG_6970.MOV',
  unikaP3: '/img/UNIKA/IMG_6966.MOV',
  unikaP4: '/img/UNIKA/IMG_6973.MOV',

  paisagemP1: '/img/PAISAGEM/Captura de Tela (83).png',
  paisagemP2: '/img/PAISAGEM/Captura de Tela (78).png',
  paisagemP3: '/img/PAISAGEM/Captura de Tela (79).png',
  paisagemP4: '/img/PAISAGEM/Captura de Tela (80).png',

  casaAraucaria1: '',
  casaDoVale1: '',
  casaHorizonte1: '',
  casaPinhao1: '',
  casaCedro1: '',
  casaIpes1: '',


};

export const heroSlides = [
  {
    image: images.centroHistorico1,
    label: 'A serra como cenário',
    text: 'Espaços para respirar fundo e viver com mais presença.',
  },
  {
    image: images.mirante1,
    label: 'Arquitetura com propósito',
    text: 'Propriedades que combinam patrimônio, natureza e uma forma melhor de viver.',
  },
  {
    image: images.fogoRancho1,
    label: 'Eventos e experiências',
    text: 'Oportunidades únicas de viver a serra catarinense com tudo o que ela tem a oferecer.',
  },
];

export const authorialProperties = [
  {
    image: images.casaAraucaria1,
    tag: 'Casa autoral',
    title: 'Casa Araucária',
    text: 'Uma casa de campo desenhada para acolher encontros e contemplar a paisagem.',
    meta: 'Rancho Queimado · SC',
    value: 'Em breve',
  },
  {
    image: images.casaDoVale1,
    tag: 'Refúgio',
    title: 'Casa do Vale',
    text: 'Arquitetura, silêncio e natureza em uma implantação que respeita o terreno.',
    meta: 'Serra Catarinense',
    value: 'Consulte',
  },
  {
    image: images.casaHorizonte1,
    tag: 'Projeto C&C',
    title: 'Casa Horizonte',
    text: 'Uma experiência de moradia pensada nos mínimos detalhes para viver a serra.',
    meta: 'Rancho Queimado · SC',
    value: 'Em breve',
  },
];

export const properties = [
  {
    image: images.casaPinhao1,
    tag: 'Residência',
    title: 'Casa Pinhão',
    text: 'Linhas limpas, materiais naturais e uma vista que muda a cada estação.',
    meta: '3 quartos · 280 m²',
    value: 'R$ 2,4 mi',
  },
  {
    image: images.casaCedro1,
    tag: 'Sítio',
    title: 'Morada do Cedro',
    text: 'Um refúgio completo entre mata nativa, água e caminhos para explorar.',
    meta: '5 ha · Rancho Queimado',
    value: 'R$ 1,8 mi',
  },
  {
    image: images.casaIpes1,
    tag: 'Casa de campo',
    title: 'Casa dos Ipês',
    text: 'O conforto de uma casa contemporânea com o ritmo tranquilo da serra.',
    meta: '4 quartos · 320 m²',
    value: 'R$ 2,9 mi',
  },
];

export const localLife = [
  {
    slug: 'cervejaria-unika',
    image: images.unika1,
    gallery: [
      { src: images.unikaP1, caption: 'Ambiente acolhedor e autêntico no centro da cidade.' },
      { src: images.unikaP2, caption: 'A rua e o clima de bairro que envolvem a experiência local.' },
      { src: images.unikaP3, caption: 'Uma vista que completa o passeio em Rancho Queimado.' },
      { src: images.unikaP4, caption: 'Uma experiência única em meio à cidade.' },

    ],
    highlights: ['Produção artesanal local', 'Ambiente descontraído', 'Ritmo de cidade pequena'],
    tag: 'Experiências',
    title: 'Cervejaria Unika',
    text: 'Cervejaria localizada no centro de Rancho Queimado-SC. É um ponto de encontro para quem valoriza boa conversa, apresentação cuidadosa e o prazer de estar em um lugar com personalidade.',
  },
  {
    slug: 'paisagens-naturais',
    image: images.paisagem1,
    gallery: [
      { src: images.paisagemP1, caption: 'A paisagem que marca a identidade da região.' },
      { src: images.paisagemP2, caption: 'Pontos de observação que revelam a serra em cada ângulo.' },
      { src: images.paisagemP3, caption: 'A mistura entre natureza, arquitetura e vida cotidiana.'},
      { src: images.paisagemP4, caption: 'A mistura entre natureza, arquitetura e vida cotidiana.'},
    ],
    highlights: ['Paisagens de altitude', 'Ritmo lento e contemplativo', 'Lugares para respirar fundo'],
    tag: 'Paisagem',
    title: 'Paisagens naturais',
    text: 'A vida local se revela nas belezas naturais, nos pequenos eventos e nas pessoas que tornam cada esquina familiar. Cada vista conta uma parte da rotina e da identidade da serra catarinense.',
  },
  {
    slug: 'fogo-no-rancho',
    image: images.fogoRancho1,
    gallery: [
      { src: images.fogoRanchoP1, caption: 'Um evento anual com música Country e comidas típicas das regiões do Tenessee.' },
      { src: images.fogoRanchoP2, caption: 'A cidade oferece um cenário acolhedor antes e depois do evento.' },
      { src: images.fogoRanchoP3, caption: 'A natureza ampliando a experiência de convivência.' },
      { src: images.fogoRanchoP5, caption: 'Uma nova perspectiva da experiência no evento.' },
    ],
    highlights: ['Música e gastronomia', 'Convivência comunitária', 'Paisagem como cenário principal'],
    tag: 'Eventos',
    title: 'Fogo no Rancho',
    text: 'Eventos e confraternizações: música, comida, paisagem e uma convivência que acontece sem pressa. Esses encontros são parte da alma do lugar e reforçam a sensação de pertencimento.',
  },
  {
    slug: 'um-lugar-para-viver-bem',
    image: images.centroHistorico1,
    gallery: [
      { src: images.centroHistoricoP1, caption: 'A arquitetura e o ritmo urbano do centro histórico.' },
      { src: images.centroHistoricoP2, caption: 'Comércios e encontros cotidianos que tornam a área viva.' },
      { src: images.centroHistoricoP3, caption: 'O contraste entre centro urbano e vista panorâmica da serra.' },
      { src: images.centroHistoricoP4, caption: 'A vida cotidiana que acontece entre ruas e praças.' },
    ],
    highlights: ['História preservada', 'Ruas com identidade', 'Viver bem no cotidiano'],
    tag: 'História',
    title: 'Centro Histórico',
    text: 'O coração da cidade, onde o passado se encontra com o presente em uma atmosfera única. É ali que a rotina ganha identidade, os encontros ganham calor e a memória do lugar continua viva.',
  },
  {
    slug: 'mirante-boa-vista',
    image: images.mirante1,
    gallery: [
      { src: images.mirante1, caption: 'A vista panorâmica que define o local.' },
      { src: images.miranteP1, caption: 'A extensão da paisagem em direção à serra e ao horizonte.' },
      { src: images.fogoRancho1, caption: 'Pontos de encontro e celebração da região.' },
    ],
    highlights: ['Panorama único', 'Pausa contemplativa', 'Experiência turística genuína'],
    tag: 'Turismo',
    title: 'Mirante do alto da Boa Vista',
    text: 'Uma vista deslumbrante sobre a paisagem da região. O mirante é um convite para pausar, observar e perceber a dimensão do lugar e o valor de viver em contato com a natureza.',
  },
];
