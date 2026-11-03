import { images } from './images';

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export type HeroSlide = {
  image: string;
  label: string;
  text: string;
};

export type Property = {
  image: string;
  tag: string;
  title: string;
  text: string;
  meta: string;
  value: string;
};

export type GalleryItem = {
  src: string;
  caption: string;
};

export type LocalLifeItem = {
  slug: string;
  image: string;
  gallery: GalleryItem[];
  highlights: string[];
  tag: string;
  title: string;
  text: string;
};

export type LotSideItem = {
  tag: string;
  title: string;
  description: string;
  linkLabel?: string;
};

export type SerraPageContent = {
  documentTitle: string;
  header: {
    links: [string, string][];
    contactEmail: string;
    contactLabel: string;
    actionLabel: string;
  };
  heroDescription: string;
  authorial: { kicker: string; title: string; description: string };
  properties: { kicker: string; title: string; description: string };
  feature: {
    image: string;
    imageAlt: string;
    kicker: string;
    title: string;
    description: string;
    linkLabel: string;
  };
  localLife: { kicker: string; title: string; description: string };
  lots: {
    kicker: string;
    title: string;
    description: string;
    heroImage: string;
    heroImageAlt: string;
    heroTag: string;
    heroTitle: string;
    heroDescription: string;
    heroLinkLabel: string;
    sideItems: LotSideItem[];
  };
  detail: { eyebrow: string; notFound: string; backLabel: string };
  cta: { kicker: string; title: string; description: string; buttonLabel: string; buttonHref: string };
  footer: {
    description: string;
    instagramHref: string;
    navigationTitle: string;
    links: [string, string][];
    contactTitle: string;
    email: string;
    phone: string;
  };
};

// ---------------------------------------------------------------------------
// Dados de slides do Hero
// ---------------------------------------------------------------------------

export const heroSlides: HeroSlide[] = [
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

// ---------------------------------------------------------------------------
// Propriedades
// ---------------------------------------------------------------------------

export const authorialProperties: Property[] = [
  {
    image: images.cabanaNashville,
    tag: 'Cabana na serra',
    title: 'Cabana Nashville',
    text: 'Uma cabana no campo desenhada para aquecer os corações e contemplar a paisagem.',
    meta: 'Serra Catarinense',
    value: 'Disponível',
  },
  {
    image: images.cabanaTennessee,
    tag: 'Cabana na serra',
    title: 'Cabana Tenessee',
    text: 'Arquitetura, silêncio e natureza em uma implantação que respeita o terreno.',
    meta: 'Serra Catarinense',
    value: 'Disponível',
  },
  {
    image: images.cabanaMemphis,
    tag: 'Cabana na serra',
    title: 'Cabana Memphis',
    text: 'Uma experiência pensada nos mínimos detalhes para viver a serra de um jeito aconchegante.',
    meta: 'Serra Catarinense',
    value: 'Disponível',
  },
];

export const properties: Property[] = [
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

// ---------------------------------------------------------------------------
// Vida local
// ---------------------------------------------------------------------------

export const localLife: LocalLifeItem[] = [
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
      { src: images.paisagemP3, caption: 'A mistura entre natureza, arquitetura e vida cotidiana.' },
      { src: images.paisagemP4, caption: 'A mistura entre natureza, arquitetura e vida cotidiana.' },
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

// ---------------------------------------------------------------------------
// Conteúdo textual da página Serra
// ---------------------------------------------------------------------------

export const serraPageCopy: SerraPageContent = {
  documentTitle: 'Casas & Cases Serra | Rancho Queimado',
  header: {
    links: [
      ['Propriedades', '#propriedades'],
      ['Lotes', '#lotes'],
      ['Autorais', '#autorais'],
      ['Institucional', '#institucional'],
    ],
    contactEmail: 'contato@casasecases.com.br',
    contactLabel: 'Contato',
    actionLabel: 'Conversar',
  },
  heroDescription: 'Uma curadoria de residências, propriedades e lotes para quem procura mais do que um endereço.',
  authorial: {
    kicker: 'Propriedades autorais',
    title: 'Projetadas para carregar a nossa visão.',
    description: 'Projetos em que a Casas & Cases participa da concepção, desenvolvimento e valorização do ativo, da ideia à experiência final.',
  },
  properties: {
    kicker: 'Propriedades',
    title: 'Casas que merecem ser apresentadas de outra maneira.',
    description: 'Em cada seleção, mostramos a residência, a propriedade como um todo e o contexto em que ela está inserida.',
  },
  feature: {
    image: images.paisagemP4,
    imageAlt: 'Paisagem da Serra Catarinense',
    kicker: 'O jeito C&C de olhar',
    title: 'Uma propriedade começa muito antes da chave.',
    description: 'Nosso trabalho é aproximar pessoas de lugares que tenham verdade. Olhamos para arquitetura, paisagem, contexto e para o que cada escolha pode construir ao longo do tempo.',
    linkLabel: 'Conheça a Casas & Cases',
  },
  localLife: {
    kicker: 'Vida local',
    title: 'A cidade em seus pequenos detalhes.',
    description: 'A identidade de um lugar é feita por pessoas, serviços, comercios e experiências que acontecem no dia a dia, longe do foco do mercado e perto da vida real.',
  },
  lots: {
    kicker: 'Lotes',
    title: 'Para quem prefere começar pelo potencial.',
    description: 'Terrenos selecionados não apenas por metragem, mas por implantação, paisagem, acesso e possibilidades reais de desenvolvimento.',
    heroImage: images.paisagemP3,
    heroImageAlt: 'Paisagem de um terreno na serra',
    heroTag: 'Serra Catarinense',
    heroTitle: 'Terrenos com horizonte aberto',
    heroDescription: 'Escolhas para quem quer construir com calma, intenção e uma relação verdadeira com a paisagem.',
    heroLinkLabel: 'Ver oportunidades',
    sideItems: [
      {
        tag: 'Condomínios',
        title: 'Lotes selecionados',
        description: 'Opções em condomínios de Rancho Queimado para diferentes perfis de projeto e investimento.',
        linkLabel: 'Ver lotes',
      },
      {
        tag: 'Consultoria C&C',
        title: 'Você vê o terreno. Nós vemos o que ele pode se tornar.',
        description: 'Análise de implantação, potencial construtivo e estratégia antes da decisão de compra.',
      },
    ],
  },
  detail: {
    eyebrow: 'Vida local',
    notFound: 'Imagem não encontrada.',
    backLabel: 'Voltar',
  },
  cta: {
    kicker: 'Casas & Cases Serra',
    title: 'Não vendemos apenas imóveis. Ajudamos você a tomar decisões que façam sentido.',
    description: 'Comprar, vender, investir ou desenvolver uma propriedade começa por entender o que você quer construir para a sua vida e para o seu patrimônio.',
    buttonLabel: 'Falar com a C&C',
    buttonHref: 'https://wa.me/5548999358523',
  },
  footer: {
    description: 'Curadoria imobiliária na Serra Catarinense.',
    instagramHref: 'https://www.instagram.com/casasecasesserra/',
    navigationTitle: 'Navegação',
    links: [
      ['Propriedades', '#propriedades'],
      ['Lotes', '#lotes'],
      ['Autorais', '#autorais'],
      ['Institucional', '#institucional'],
    ],
    contactTitle: 'Contato',
    email: 'contato@casasecases.com.br',
    phone: '+55 (48) 99935-8523',
  },
};
