// ============================================================
// ARQUIVO CENTRAL DE CONTEÚDO — Edite aqui para alterar a página
// ============================================================

export const property = {
  // ─── Hero ────────────────────────────────────────────────
  headline: 'Cobertura Exclusiva no Cascatinha',
  subheadline:
    'Localização estratégica, valor abaixo do mercado e alto potencial de valorização',
  badge: 'Cascatinha — Juiz de Fora',
  price: 'R$ 449.000',
  priceNote: 'Excelente oportunidade de investimento',

  // ─── Highlights rápidos (Hero) ───────────────────────────
  quickHighlights: [
    { icon: 'ruler', label: '120 m²' },
    { icon: 'layout', label: '11 Ambientes' },
    { icon: 'bed', label: '3 Quartos + 1 Escritório Amplo' },
    { icon: 'bath', label: '2 Banheiros' },
    { icon: 'car', label: '1 Vaga' },
    { icon: 'sun', label: 'Cobertura Ampla' },
  ],

  // ─── Destaques (cards) ──────────────────────────────────
  highlights: [
    {
      icon: 'ruler',
      title: '120 m² de área',
      description: 'Metragem excelente distribuída em 11 ambientes.',
    },
    {
      icon: 'bed',
      title: '3 Quartos + 1 Escritório Amplo',
      description: '3 quartos mais um escritório amplo, sendo 2 quartos no primeiro andar. Área totalmente reservada no segundo andar',
    },
    {
      icon: 'bath',
      title: '2 Banheiros Completos',
      description: 'Dois banheiros completos, um em cada andar, distribuídos para atender a rotina da casa com praticidade.',
    },
    {
      icon: 'car',
      title: '1 Vaga coberta e demarcada',
      description: 'Vaga coberta e demarcada em garagem com portão automático.',
    },
    {
      icon: 'sun',
      title: 'Cobertura Ampla',
      description:
        'Cobertura ampla coberta com telha colonial proporcionando um ambiente versátil para reunir a familia e amigos.',
    },
    {
      icon: 'building',
      title: 'Acesso prático e Transporte',
      description:
        'Prédio bem cuidado com apenas 3 lances de escadas agradáveis até a cobertura, além de contar com um ponto de ônibus exatamente na porta.',
    },
  ],

  // ─── Descrição comercial ────────────────────────────────
  description: `Esta cobertura no Cascatinha combina espaço interno bem distribuído em 11 ambientes, localizacao estrategica e uma vista aberta para a mata da UFJF, criando uma sensacao rara de tranquilidade dentro da cidade.

Com 120 m² de area, os ambientes favorecem uma rotina confortavel para familias. A sala e cozinha espaçosas, a área de serviço separada com despensa, os 3 quartos (mais um cômodo flexível para escritório ou closet), os 2 banheiros e a ampla cobertura coberta reforcam a versatilidade do imóvel.

Em vez de prometer luxo artificial, o grande diferencial aqui esta na combinacao entre planta muito bem aproveitada, localizacao, vista para o verde e margem real de valorizacao em uma das regioes mais procuradas de Juiz de Fora.`,

  // ─── Detalhes técnicos ──────────────────────────────────
  details: [
    { label: 'Tipo', value: 'Cobertura Duplex' },
    { label: 'Área Total', value: '120 m²' },
    { label: 'Quartos', value: '3 + 1 Flex' },
    { label: 'Ambientes', value: '11' },
    { label: 'Banheiros', value: '2' },
    { label: 'Vagas', value: '1 coberta' },
    { label: 'Condomínio', value: 'R$ 513/mês' },
    { label: 'IPTU', value: 'R$ 280/mês' },
    { label: 'Financiamento', value: 'Aceita' },
    { label: 'Andar', value: 'Cobertura' },
  ],

  // ─── Proximidades ──────────────────────────────────────
  nearbyCategories: [
    {
      category: 'Escolas e Creches',
      icon: 'school',
      items: [
        { name: 'Colégio Cascatinha', distance: '600 m', time: '2 min de carro' },
        { name: 'Brincks School', distance: '170 m', time: '2 min a pé' },
        { name: 'Escola Ricardo Moysés Jr.', distance: '450m', time: '5 min a pé' },
        { name: 'International School Saci', distance: '1,1 km', time: '4 min de carro' },
        { name: 'Colégio Sarah Dawsey', distance: '1,2 km', time: '4 min de carro' },
      ],
    },
    {
      category: 'Universidades',
      icon: 'graduation',
      items: [
        { name: 'UFJF (Universidade Federal)', distance: '3 km', time: '8 min de carro' },
        { name: 'Suprema', distance: '4,8 km', time: '10 min de carro' },
        { name: 'Doctum', distance: '2,0 km', time: '5 min de carro' },
        { name: 'UNIP', distance: '0,8 km', time: '2 min de carro' },
      ],
    },
    {
      category: 'Compras e Supermercados',
      icon: 'shopping',
      items: [
        { name: 'Independência Shopping', distance: '1 km', time: '3 min de carro' },
        { name: 'Supermercado Empório Bahamas', distance: '300 m', time: '3 min a pé' },
        { name: 'Supermercado Mart Minas', distance: '5,2 km', time: '10 min de carro' },
        { name: 'Supermercado BH', distance: '3,3 km', time: '7 min de carro' },
      ],
    },
    {
      category: 'Farmácias e Laboratórios de Análises Clínicas',
      icon: 'pharmacy',
      items: [
        { name: 'Drogaria Araújo', distance: '200 m', time: '2 min a pé' },
        { name: 'Drogaria Pacheco', distance: '250 m', time: '3 min a pé' },
        { name: 'Drogaria Indiana', distance: '500m', time: '3 min a pé' },
        { name: 'Cortes Vilella - Laboratório de Análises Clínicas', distance: '100 m', time: '1 min a pé' },
      ],
    },
    {
      category: 'Restaurantes e Padarias',
      icon: 'restaurant',
      items: [
        { name: 'Restaurante Cascatinha', distance: '500 m', time: '2 min de carro' },
        { name: 'Restaurante Rancho Alegre', distance: '600 m', time: '2 min de carro' },
        { name: 'Pizzaria La Mama', distance: '800 m', time: '3 min de carro' },
        { name: 'Padaria Cascatinha', distance: '400 m', time: '5 min a pé' },
        { name: 'Empório Gelada', distance: '700 m', time: '3 min de carro' },
      ],
    },
    {
      category: 'Saúde',
      icon: 'hospital',
      items: [
        { name: 'Hospital Monte Sinai', distance: '1,2 km', time: '4 min de carro' },
        { name: 'Hospital Unimed', distance: '3 km', time: '7 min de carro' },
        { name: 'Hospital e Maternidade Terezinha de Jesus', distance: '1,3 km', time: '4 min de carro' },
        { name: 'Hospital Universitário UFJF - Dom Bosco', distance: '2,0 km', time: '5 min de carro' },
      ],
    },
    {
      category: 'Transporte',
      icon: 'bus',
      items: [
        { name: 'Ponto de Ônibus', distance: 'Na porta', time: '0 min' },
      ],
    },
    {
      category: 'Lazer e Esporte',
      icon: 'sports',
      items: [
        { name: 'Academias', distance: '100 m', time: '1 min a pé' },
        { name: 'Clube Cascatinha', distance: '800 m', time: '3 min de carro' },
        { name: 'Clube AABB', distance: '1 km', time: '3 min de carro' },
        { name: 'Parque da Lajinha', distance: '1,3 km', time: '4 min de carro' },
      ],
    },
  ],

  // ─── FAQ ────────────────────────────────────────────────
  faq: [
    {
      question: 'Qual o valor do imóvel?',
      answer:
        'O valor e condições especiais são informados diretamente pelo corretor. Entre em contato pelo WhatsApp.',
    },
    {
      question: 'Aceita financiamento?',
      answer:
        'Sim! O imóvel aceita financiamento bancário.',
    },
    {
      question: 'Qual o valor do condomínio?',
      answer:
        'O condomínio é de R$ 513/mês, que inclui: Água e manutenção das áreas comuns 3x por semana. Não tem portaria, mas tem sistema de segurança com alarmes e câmeras.',
    },
    {
      question: 'Quantas vagas de garagem possui?',
      answer:
        'A cobertura possui 1 vaga coberta e demarcada, com portão automático.',
    },
    {
      question: 'O imóvel está vazio ou ocupado?',
      answer:
        'Sim e está disponível para visita. Agende pelo WhatsApp.',
    },
    {
      question: 'Posso agendar uma visita?',
      answer:
        'Com certeza! Clique no botão do WhatsApp e retornaremos rapidamente para agendar sua visita.',
    },
  ],

  // ─── Investimento ───────────────────────────────────────
  investment: {
    title: 'Potencial de investimento',
    subtitle: 'Avaliado pela Caixa Econômica em R$ 470.000 há 3 anos, com estimativa atualizada ultrapassando R$ 575.000.',
    appraisalValue: 'R$ 575.000*',
    appraisalSource: 'Estimativa atualizada (Base: Avaliação Caixa + IPCA/INCC)',
    description: `Este imóvel vai além de uma moradia, é uma oportunidade concreta de investimento já com margem de segurança. Com a avaliação oficial da Caixa Econômica Federal em R$ 470.000 realizada há 3 anos, aplicando a valorização média imobiliária da região do Cascatinha (em torno de 7% ao ano), o valor de mercado atualizado da cobertura é estimado entre R$ 560.000 a R$ 600.000.

Ofertado hoje por um valor estrategicamente abaixo do mercado, investidores que compram, reformam e revendem coberturas neste bairro podem obter margens expressivas de lucro. Veja abaixo o potencial de transformação:`,
    projects: [] as { beforeSrc: string; afterSrc: string; alt: string; title: string; description: string }[],
    advantages: [
      { icon: '📈', text: 'Avaliado em R$ 470 mil pela Caixa Econômica' },
      { icon: '🏗️', text: 'Alto potencial de valorização com reforma' },
      { icon: '📍', text: 'Bairro em constante valorização em Juiz de Fora' },
      { icon: '💰', text: 'Possibilidade de financiamento com taxa reduzida' },
      { icon: '🔑', text: 'Compre, reforme e revenda com margem de lucro' },
      { icon: '🏠', text: 'Cobertura: tipologia mais valorizada do mercado' },
    ],
  },

  // ─── Planta Baixa ──────────────────────────────────────
  floorPlan: {
    title: 'Conheça cada ambiente',
    subtitle: '11 ambientes distribuídos em 2 andares — amplidão e versatilidade para a sua família.',
    floors: [
      {
        name: '1º Andar',
        label: 'Andar principal',
        rooms: [
          { name: 'Sala ampla', area: null, icon: '🛋️', description: 'Ambiente integrado com escada convencional (não caracol) de acesso ao 2º andar.' },
          { name: 'Cozinha espaçosa', area: null, icon: '🍳', description: 'Cozinha ampla com espaço para mesa de refeições e bancada generosa.' },
          { name: 'Despensa', area: null, icon: '🗄️', description: 'Anexa à cozinha, ideal para organização e armazenamento.' },
          { name: 'Área de serviço', area: null, icon: '🧺', description: 'Área de serviço com tanque e espaço para máquina de lavar.' },
          { name: 'Quarto 1', area: null, icon: '🛏️', description: 'Quarto amplo com armário planejado e boa iluminação natural.' },
          { name: 'Quarto 2', area: null, icon: '🛏️', description: 'Segundo quarto com espaço confortável e ventilação cruzada.' },
          { name: 'Banheiro', area: null, icon: '🚿', description: 'Banheiro social com acabamento em bom estado.' },
        ],
      },
      {
        name: '2º Andar (Cobertura)',
        label: 'Cobertura com telha colonial',
        rooms: [
          { name: 'Cômodo 1 / Quarto 3', area: null, icon: '🛏️', description: 'Espaço versátil: pode ser quarto, escritório ou sala de TV.' },
          { name: 'Cômodo 2 / Quarto 4', area: null, icon: '🛏️', description: 'Segundo cômodo da cobertura, também transformável em quarto.' },
          { name: 'Banheiro da cobertura', area: null, icon: '🚿', description: 'Banheiro completo no andar da cobertura.' },
          { name: '2ª Área de serviço', area: null, icon: '🧺', description: 'Segunda área de serviço na cobertura — praticidade extra.' },
        ],
      },
    ],
    highlights: [
      {
        icon: '🌿',
        title: 'Vista para a mata da UFJF',
        description: 'Imovel de fundos with vista aberta para a mata preservada da Universidade Federal de Juiz de Fora, trazendo mais privacidade e sensacao de tranquilidade.',
      },
      {
        icon: '🏡',
        title: 'Sensação de campo na cidade',
        description: 'Cheiro de mato, pássaros cantando e animais silvestres. A tranquilidade do interior sem abrir mão da conveniência urbana.',
      },
      {
        icon: '📐',
        title: 'Escada convencional',
        description: 'Acesso entre andares por escada reta e ampla — nada de escada caracol. Conforto e segurança para toda a família.',
      },
      {
        icon: '🏗️',
        title: 'Cobertura em telha colonial',
        description: 'Todo o segundo andar é coberto with telha colonial, garantindo conforto térmico e estética tradicional.',
      },
    ],
  },

  // ─── Estilo de vida ─────────────────────────────────────
  lifestyle: {
    title: 'O estilo de vida que você merece',
    text: `Morar no Cascatinha é viver com a tranquilidade de um bairro residencial sem abrir mão da conveniência urbana. A poucos minutos do Independência Shopping, de universidades, supermercados e dos melhores restaurantes da cidade, você tem tudo ao seu alcance.

É o lugar perfeito para quem busca qualidade de vida com praticidade: mornings tranquilas no terraço, tardes produtivas e noites com a família — tudo isso com a segurança e o conforto que uma cobertura proporciona.`,
  },

  // ─── Mapa ───────────────────────────────────────────────
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.2!2d-43.3545!3d-21.7485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b6e2f7b8a9f%3A0x0!2sRua+Francisco+Vaz+de+Magalh%C3%A3es%2C+560+-+Cascatinha%2C+Juiz+de+Fora+-+MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000',
    mapsLink: 'https://www.google.com/maps/search/Rua+Francisco+Vaz+de+Magalh%C3%A3es+560+Cascatinha+Juiz+de+Fora+MG',
    label: 'Rua Francisco Vaz de Magalhães, 560 — Cascatinha, Juiz de Fora',
  },

  // ─── Contato / WhatsApp ─────────────────────────────────
  contact: {
    phone: '5532988999679', // número atualizado conforme pedido
    whatsappMessage:
      'Olá! Tenho interesse na cobertura no Cascatinha e gostaria de mais informações.',
    email: 'contato@imobiliaria.com.br', // substituir pelo e-mail real
    brokerName: 'Corretor', // substituir pelo nome real
    companyName: 'Imobiliária', // substituir pelo nome real
  },


  // ─── Galeria ────────────────────────────────────────────
  gallery: [
    { src: '/images/gallery/01-quarto-vista.png', alt: 'Quarto 1 com piso laminado e vista para a natureza', category: 'Quartos' },
    { src: '/images/gallery/02-quarto-porta.png', alt: 'Quarto 1 bem iluminado e espaçoso com piso laminado madeira', category: 'Quartos' },
    { src: '/images/gallery/03-quarto-corredor.png', alt: 'Quarto 2 com excelente iluminação natural', category: 'Quartos' },
    { src: '/images/gallery/04-quarto-janela.png', alt: 'Quarto 2 com vista para natureza', category: 'Quartos' },
    { src: '/images/gallery/06-sala-escada.png', alt: 'Sala com vista para entrada e cozinha', category: 'Salas' },
    { src: '/images/gallery/07-cozinha.png', alt: 'Cozinha com bancada em granito preto (São Gabriel)e armários', category: 'Cozinha e Despensa' },

    { src: '/images/gallery/09-area-servico.png', alt: 'Área de serviço adjacente a cozinha com tanque', category: 'Serviço' },
    { src: '/images/gallery/12-area-servico-2.png', alt: 'Área de serviço with varal de teto', category: 'Serviço' },
    { src: '/images/gallery/10-cozinha-pia.png', alt: 'Bancada espaçosa da cozinha em granito São Gabriel', category: 'Cozinha e Despensa' },
    { src: '/images/gallery/11-despensa.png', alt: 'Vista ampla da cozinha para área de entrada', category: 'Cozinha e Despensa' },
    { src: '/images/gallery/13-despensa-prateleiras.png', alt: 'Despensa com prateleiras de madeira rústica', category: 'Cozinha e Despensa' },
    { src: '/images/gallery/14-prateleiras.png', alt: 'Espaço despensa organizado com prateleiras largas', category: 'Cozinha e Despensa' },
    { src: '/images/gallery/15-cozinha-panoramica.png', alt: 'Visão panorâmica da cozinha e acessos', category: 'Cozinha e Despensa' },
    { src: '/images/gallery/16-terraco.png', alt: 'Terraço coberto amplo e arejado', category: 'Terraço Gourmet' },
    { src: '/images/gallery/17-terraco-pia.png', alt: 'Área de apoio do terraço com pia', category: 'Terraço Gourmet' },
    { src: '/images/hero-bg-v2.png', alt: 'Vista limpa e ampla do terraço coberto', category: 'Terraço Gourmet' },
    { src: '/images/gallery/21-terraco-balcao2.jpeg', alt: 'Detalhe do balcão no terraço', category: 'Terraço Gourmet' },
    { src: '/images/gallery/22-terraco-pia2.jpeg', alt: 'Pia e área de serviço externa no terraço', category: 'Terraço Gourmet' },
    { src: '/images/gallery/23-terraco.jpeg', alt: 'Vista entrada terraço', category: 'Terraço Gourmet' },
    { src: '/images/gallery/24-corredor2.jpeg', alt: 'Corredor de acesso no segundo andar', category: 'Corredores e Banheiros' },
    { src: '/images/gallery/25-banheiro2.png', alt: 'Banheiro completo do segundo andar', category: 'Corredores e Banheiros' },
    { src: '/images/gallery/26-banheiro-pia2.jpeg', alt: 'Detalhe da pia do banheiro superior', category: 'Corredores e Banheiros' },
    { src: '/images/gallery/improved_room_1.png', alt: 'Quarto 3 andar superior com vista para natureza', category: 'Quartos' },
    { src: '/images/gallery/improved_room_2.png', alt: 'Visão entrada quarto 3 superior com acesso para escritório', category: 'Quartos' },
    { src: '/images/gallery/improved_room_3.png', alt: 'Vista escritório, adjacente ao quarto 3 superior', category: 'Quartos' },
    { src: '/images/gallery/improved_room_4.png', alt: 'Escritório Amplo', category: 'Quartos' },
    { src: '/images/gallery/improved_room_5.png', alt: 'Vista escada andar superior para inferior', category: 'Quartos' },
    { src: '/images/gallery/improved_room_6.png', alt: 'Vista escada andar inferior, com armário embutido adega para vinhos', category: 'Quartos' },
    { src: '/images/gallery/36-escada-descendo.jpeg', alt: 'Vista do andar inferior para andar superior', category: 'Escadas' },
    { src: '/images/gallery/39-banheiro3-pia.jpeg', alt: 'Banheiro do primeiro andar', category: 'Corredores e Banheiros' },
    { src: '/images/gallery/40-banheiro3-geral.png', alt: 'Visão geral do banheiro completo primeiro andar', category: 'Corredores e Banheiros' },
    { src: '/images/gallery/41-banheiro3-amplo.jpeg', alt: 'Banheiro reformado do primeiro andar', category: 'Corredores e Banheiros' },
  ],

  // ─── CTA textos ─────────────────────────────────────────
  cta: {
    primary: 'Falar no WhatsApp',
    secondary: 'Enviar mensagem',
    final: 'Agende sua visita agora',
    finalSubtitle:
      'Não perca a oportunidade de conhecer esta cobertura exclusiva no Cascatinha.',
  },

  // ─── SEO ────────────────────────────────────────────────
  seo: {
    title: 'Cobertura à Venda no Cascatinha | Juiz de Fora — 3 Quartos, 120m²',
    description:
      'Cobertura exclusiva no Cascatinha, Juiz de Fora. 120m², 3 quartos, 2 banheiros, terraço gourmet, 1 vaga. Localização estratégica próxima a universidades e shopping. Agende sua visita!',
    ogImage: '/images/hero-bg-v2.png',
  },
} as const;

export type Property = typeof property;
