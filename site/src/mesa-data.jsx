/* ===== anavanzin · mesa — dados, arte de ícones, conteúdo bilíngue ===== */

// --- geometric file-icon art (ink line, square corners) ---
function IconArt({ art }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinejoin: 'miter', strokeLinecap: 'butt' };
  const ink = 'var(--ink)', rub = 'var(--rubric)', gold = 'var(--gold)';
  switch (art) {
    case 'doc': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <path d="M7 3 H19 L24 8 V27 H7 Z" {...s} />
        <path d="M19 3 V8 H24" {...s} />
        <line x1="10" y1="13" x2="21" y2="13" {...s} /><line x1="10" y1="17" x2="21" y2="17" {...s} /><line x1="10" y1="21" x2="17" y2="21" {...s} />
      </svg>);
    case 'stack': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <rect x="5" y="4" width="16" height="20" {...s} />
        <rect x="9" y="7" width="16" height="20" {...s} fill="var(--paper)" />
        <line x1="12" y1="13" x2="22" y2="13" {...s} /><line x1="12" y1="17" x2="22" y2="17" {...s} /><line x1="12" y1="21" x2="19" y2="21" {...s} />
      </svg>);
    case 'grid': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <rect x="5" y="5" width="8.5" height="8.5" {...s} /><rect x="16.5" y="5" width="8.5" height="8.5" {...s} stroke={rub} />
        <rect x="5" y="16.5" width="8.5" height="8.5" {...s} stroke={rub} /><rect x="16.5" y="16.5" width="8.5" height="8.5" {...s} />
      </svg>);
    case 'margin': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <rect x="5" y="4" width="20" height="22" {...s} />
        <line x1="11" y1="4" x2="11" y2="26" {...s} stroke={rub} />
        <line x1="14" y1="10" x2="22" y2="10" {...s} /><line x1="14" y1="14" x2="22" y2="14" {...s} /><line x1="14" y1="18" x2="20" y2="18" {...s} />
        <circle cx="8" cy="10" r="1" fill={rub} stroke="none" />
      </svg>);
    case 'book': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <path d="M15 7 C12 4 8 4 5 5 V24 C8 23 12 23 15 25 C18 23 22 23 25 24 V5 C22 4 18 4 15 7 Z" {...s} />
        <line x1="15" y1="7" x2="15" y2="25" {...s} />
      </svg>);
    case 'nodes': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <line x1="8" y1="9" x2="21" y2="16" {...s} /><line x1="21" y1="16" x2="11" y2="23" {...s} /><line x1="8" y1="9" x2="11" y2="23" {...s} />
        <circle cx="8" cy="9" r="2.6" {...s} fill="var(--paper)" /><circle cx="21" cy="16" r="2.6" {...s} fill="var(--paper)" stroke={rub} /><circle cx="11" cy="23" r="2.6" {...s} fill="var(--paper)" />
      </svg>);
    case 'folder': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <path d="M4 8 H12 L14 11 H26 V24 H4 Z" {...s} />
        <line x1="4" y1="14" x2="26" y2="14" {...s} />
      </svg>);
    case 'quote': return (
      <svg viewBox="0 0 30 30" style={{ color: rub }}>
        <text x="15" y="25" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="34" fontWeight="600" fill={rub}>&#8220;</text>
      </svg>);
    case 'envelope': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <rect x="4" y="7" width="22" height="16" {...s} />
        <path d="M4 8 L15 17 L26 8" {...s} stroke={rub} />
      </svg>);
    case 'scroll': return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}>
        <path d="M8 5 H23 V22 C23 24 21 25 19 25 H6 C8 25 9 24 9 22 V6" {...s} />
        <line x1="12" y1="11" x2="20" y2="11" {...s} /><line x1="12" y1="15" x2="20" y2="15" {...s} />
      </svg>);
    default: return (
      <svg viewBox="0 0 30 30" style={{ color: ink }}><rect x="6" y="5" width="18" height="20" {...s} /></svg>);
  }
}

// --- helper: pick language ---
function L(obj, lang) { return (obj && (obj[lang] || obj.pt)) || ''; }

// --- menu bar ---
const MENUBAR = [
  { id: 'sobre', pt: 'Sobre', en: 'About' },
  { id: 'tese', pt: 'Tese', en: 'Thesis' },
  { id: 'conceitos', pt: 'Conceitos', en: 'Concepts' },
  { id: 'perfil', pt: 'Perfis', en: 'Profiles' },
  { id: 'ius', pt: 'Ius Gentium', en: 'Ius Gentium' },
  { id: 'contato', pt: 'Contato', en: 'Contact' },
];

// --- desk zones ---
const ZONES = [
  { id: 'identidade', label: { pt: 'identidade', en: 'identity' }, cls: '', items: ['sobre', 'perfil', 'curriculo'] },
  { id: 'outros', label: { pt: 'outros', en: 'other' }, cls: '', items: ['trabalhos', 'citacoes', 'advocacia', 'martirios', 'justitia_png', 'vo_jpg'] },
  { id: 'pesquisa', label: { pt: 'pesquisa', en: 'research' }, cls: 'research', items: ['iconocracia', 'atlas', 'radiografia', 'marginalia', 'publicacoes', 'sala', 'conceitos'] },
];

// --- content ---
const A = 'assets/';
const CONTENT = {
  sobre: { file: { pt: 'sobre', en: 'about' }, ext: '.txt', kind: 'page', path: '/sobre.html', art: 'doc', w: 520, h: 540,
    viewer: RZ('assets/ana-portrait.png'), caption: { pt: 'ana vanzin', en: 'ana vanzin' },
    kicker: { pt: 'Advogada · historiadora do direito', en: 'Lawyer · legal historian' },
    title: { pt: 'ana vanzin', en: 'ana vanzin' },
    lede: { pt: 'A primeira Justitia vendada não nasceu como virtude — nasceu como sátira.', en: 'The first blindfolded Justitia was not born as a virtue — it was born as satire.' },
    body: { pt: 'Atuo entre o foro e o arquivo: advogada em exercício e doutoranda em história e iconografia do direito no PPGD/UFSC. Minha pesquisa lê as imagens da lei — sobretudo as alegorias femininas — como argumentos jurídicos por outros meios.',
      en: 'I work between the courtroom and the archive: a practising lawyer and a PhD candidate in legal history and iconography at PPGD/UFSC. My research reads the images of law — above all its feminine allegories — as legal arguments by other means.' } },
  perfil: { file: { pt: 'perfil', en: 'profile' }, ext: '.card', kind: 'page', path: '/perfil.html', img: RZ('assets/ana-portrait.png'), w: 440, h: 480,
    kicker: { pt: 'Ficha', en: 'Profile card' }, title: { pt: 'ana vanzin', en: 'ana vanzin' },
    lede: { pt: 'Florianópolis · PPGD/UFSC', en: 'Florianópolis · PPGD/UFSC' },
    viewer: RZ('assets/ana-portrait.png'), caption: { pt: 'perfil.card', en: 'profile.card' },
    body: { pt: 'Advogada e doutoranda. Pesquisa: alegoria feminina na cultura jurídica, história e iconografia do direito.', en: 'Lawyer and PhD candidate. Research: the feminine allegory in legal culture, legal history and iconography.' } },
  curriculo: { file: { pt: 'currículo', en: 'résumé' }, ext: '', kind: 'page', path: '/readme.html', art: 'scroll', w: 480, h: 400,
    kicker: { pt: 'readme', en: 'readme' }, title: { pt: 'currículo', en: 'résumé' },
    lede: { pt: 'Formação, pesquisa e atuação — em uma página.', en: 'Education, research and practice — on one page.' },
    body: { pt: 'Graduação e mestrado em Direito; doutoramento em andamento (PPGD/UFSC). Atuação em advocacia e em história do direito. Versão completa em /readme.html.', en: 'Law degree and master’s; doctorate in progress (PPGD/UFSC). Practice in law and in legal history. Full version at /readme.html.' } },

  iconocracia: { file: { pt: 'iconocracia', en: 'iconocracy' }, ext: '/', kind: 'page', path: '/iconocracia/', img: RZ('assets/justitia-mark.svg'), w: 540, h: 460,
    kicker: { pt: 'Tese de doutoramento · PPGD/UFSC', en: 'Doctoral thesis · PPGD/UFSC' }, title: { pt: 'iconocracia', en: 'iconocracy' },
    lede: { pt: 'O governo pela imagem: como a lei aprendeu a se mostrar como mulher.', en: 'Government by image: how law learned to present itself as a woman.' },
    body: { pt: 'A tese percorre cinco séculos de alegorias femininas do direito — da deusa armada à República sentada — tratando cada figura como dispositivo: forma de fundar, legitimar e exibir o poder de julgar.', en: 'The thesis traces five centuries of feminine allegories of law — from the armed goddess to the seated Republic — treating each figure as a device: a way to found, legitimate and display the power to judge.' },
    note: { pt: 'Dentro desta seção: atlas (ferramenta), radiografia e o corpus de fichas.', en: 'Inside this section: the atlas (tool), radiography and the corpus of cards.' } },
  atlas: { file: { pt: 'atlas', en: 'atlas' }, ext: '/', kind: 'page', path: '/atlas/', art: 'grid', w: 500, h: 420,
    kicker: { pt: 'Ensaios visuais', en: 'Visual essays' }, title: { pt: 'atlas', en: 'atlas' },
    lede: { pt: 'O percurso editorial pelas alegorias — para ler, não para filtrar.', en: 'The editorial path through the allegories — to read, not to filter.' },
    body: { pt: 'O atlas editorial (/atlas/) é a leitura curada das figuras. A ferramenta de busca e filtro vive dentro da tese, em /iconocracia/atlas/.', en: 'The editorial atlas (/atlas/) is the curated reading of the figures. The search-and-filter tool lives inside the thesis, at /iconocracia/atlas/.' } },
  radiografia: { file: { pt: 'radiografia', en: 'radiography' }, ext: '/', kind: 'page', path: '/iconocracia/radiografia/', img: RZ('assets/pixel-justitia.png'), w: 500, h: 440,
    kicker: { pt: 'Leitura camada a camada', en: 'Layer-by-layer reading' }, title: { pt: 'radiografia', en: 'radiography' },
    lede: { pt: 'Desmontar a imagem da lei em seus signos: venda, balança, espada, corpo.', en: 'Taking apart the image of law into its signs: blindfold, scales, sword, body.' },
    body: { pt: 'Cada alegoria é aberta em seus atributos e lida contra o seu tempo — a radiografia da iconografia jurídica.', en: 'Each allegory is opened into its attributes and read against its time — the radiography of legal iconography.' } },
  marginalia: { file: { pt: 'marginália', en: 'marginalia' }, ext: '/', kind: 'page', path: '/marginalia/', art: 'margin', w: 470, h: 400,
    kicker: { pt: 'Notas de margem', en: 'Margin notes' }, title: { pt: 'marginália', en: 'marginalia' },
    lede: { pt: 'O que fica na margem do argumento — achados, dúvidas, citações.', en: 'What stays in the margin of the argument — findings, doubts, citations.' },
    body: { pt: 'Um caderno aberto: fragmentos de pesquisa em ordem cronológica inversa, no espírito da nota de rodapé.', en: 'An open notebook: research fragments in reverse chronological order, in the spirit of the footnote.' } },
  publicacoes: { file: { pt: 'publicações', en: 'publications' }, ext: '/', kind: 'page', path: '/publicacoes/', art: 'stack', w: 520, h: 440,
    kicker: { pt: 'Publicações selecionadas', en: 'Selected publications' }, title: { pt: 'publicações', en: 'publications' },
    lede: { pt: 'Artigos e capítulos sobre alegoria, gênero e poder de julgar.', en: 'Articles and chapters on allegory, gender and the power to judge.' },
    list: [
      { t: { pt: 'A venda como sátira: leitura da Stultifera Navis', en: 'The blindfold as satire: reading the Stultifera Navis' }, y: '2025' },
      { t: { pt: 'República sentada: a alegoria fundadora de 1889', en: 'The seated Republic: the founding allegory of 1889' }, y: '2024' },
      { t: { pt: 'Mulheres da lei: alegoria, gênero e poder de julgar', en: 'Women of law: allegory, gender and the power to judge' }, y: '2023' },
    ] },
  sala: { file: { pt: 'sala de leitura', en: 'reading room' }, ext: '/', kind: 'page', path: '/sala-de-leitura/', art: 'book', w: 490, h: 410,
    kicker: { pt: 'Fontes & leituras', en: 'Sources & readings' }, title: { pt: 'sala de leitura', en: 'reading room' },
    lede: { pt: 'A bibliografia viva da pesquisa, anotada e aberta.', en: 'The living bibliography of the research, annotated and open.' },
    body: { pt: 'Edições, fac-símiles e leituras dirigidas — o lugar onde a tese conversa com suas fontes.', en: 'Editions, facsimiles and guided readings — where the thesis converses with its sources.' } },
  conceitos: { file: { pt: 'conceitos', en: 'concepts' }, ext: '.html', kind: 'page', path: '/conceitos.html', art: 'nodes', w: 500, h: 420,
    kicker: { pt: 'Vocabulário', en: 'Vocabulary' }, title: { pt: 'conceitos', en: 'concepts' },
    lede: { pt: 'Os termos que sustentam a tese, em rede.', en: 'The terms that hold the thesis together, in a network.' },
    body: { pt: 'Iconocracia, alegoria, atributo, rubrica, dispositivo — um pequeno léxico que liga as seções entre si.', en: 'Iconocracy, allegory, attribute, rubric, device — a small lexicon that links the sections to one another.' } },

  trabalhos: { file: { pt: 'trabalhos', en: 'works' }, ext: '.html', kind: 'page', path: '/trabalhos.html', art: 'folder', w: 490, h: 400,
    kicker: { pt: 'Projetos & curadorias', en: 'Projects & curatorship' }, title: { pt: 'trabalhos', en: 'works' },
    lede: { pt: 'O que sai da pesquisa para o mundo: seminários, exposições, textos.', en: 'What leaves the research for the world: seminars, exhibitions, texts.' },
    body: { pt: 'Uma pasta de projetos em direito, história e cultura visual.', en: 'A folder of projects in law, history and visual culture.' } },
  citacoes: { file: { pt: 'citações', en: 'quotes' }, ext: '/', kind: 'page', path: '/quotes/', art: 'quote', w: 470, h: 380,
    kicker: { pt: 'Coletânea', en: 'Collection' }, title: { pt: 'citações', en: 'quotes' },
    lede: { pt: 'Frases que a pesquisa carrega — fontes e ecos.', en: 'Lines the research carries — sources and echoes.' },
    body: { pt: 'Um florilégio de passagens sobre justiça, imagem e cegueira.', en: 'A florilegium of passages on justice, image and blindness.' } },
  advocacia: { file: { pt: 'advocacia', en: 'practice' }, ext: '.html', kind: 'page', path: '/advocacia.html', img: RZ('assets/justitia-mark.svg'), w: 500, h: 400,
    kicker: { pt: 'Atuação', en: 'Legal practice' }, title: { pt: 'advocacia', en: 'practice' },
    lede: { pt: 'O direito também se exerce — não só se estuda.', en: 'Law is also practised — not only studied.' },
    body: { pt: 'Atuação jurídica com a mesma atenção ao detalhe e ao argumento que move a pesquisa. Contato e áreas em /advocacia.html.', en: 'Legal practice with the same attention to detail and argument that drives the research. Contact and areas at /advocacia.html.' } },

  justitia_png: { file: { pt: 'justitia', en: 'justitia' }, ext: '.png', kind: 'app', img: RZ('assets/pixel-justitia.png'), pix: true, w: 460, h: 520,
    kicker: { pt: 'Imagem · 16-bit', en: 'Image · 16-bit' }, title: { pt: 'justitia.png', en: 'justitia.png' },
    lede: { pt: 'A Justitia vendada, em pixel.', en: 'The blindfolded Justitia, in pixels.' },
    viewer: RZ('assets/pixel-justitia-sky.png'), pixView: true, caption: { pt: 'justitia.png · 16-bit', en: 'justitia.png · 16-bit' },
    body: { pt: 'O emblema pixelado da casa — venda, balança e espada.', en: 'The house emblem in pixels — blindfold, scales and sword.' } },
  vo_jpg: { file: { pt: 'vó', en: 'grandma' }, ext: '.jpg', kind: 'app', img: RZ('assets/avo.png'), w: 460, h: 500,
    kicker: { pt: 'Álbum', en: 'Album' }, title: { pt: 'vó.jpg', en: 'grandma.jpg' },
    lede: { pt: 'Uma fotografia que fica na mesa.', en: 'A photograph that stays on the desk.' },
    viewer: RZ('assets/avo.png'), caption: { pt: 'vó.jpg', en: 'grandma.jpg' },
    body: { pt: 'A memória pessoal convive com o arquivo — também isso é fonte.', en: 'Personal memory lives alongside the archive — that, too, is a source.' } },

  martirios: { file: { pt: 'martírios', en: 'martyrdoms' }, ext: '.png', kind: 'app', img: RZ('assets/martirios.png'), w: 500, h: 560,
    kicker: { pt: 'Emblema · xilogravura', en: 'Emblem · woodcut' }, title: { pt: 'martírios e delírios', en: 'martyrdoms & deliriums' },
    lede: { pt: 'A imagem como acusação — o sabá impresso.', en: 'The image as accusation — the printed sabbath.' },
    viewer: RZ('assets/martirios.png'), caption: { pt: 'martírios e delírios · ana vanzin', en: 'martyrdoms & deliriums · ana vanzin' },
    body: { pt: 'Uma xilogravura de feitiçaria que abre o repertório da tese: a gravura barata e satírica como dispositivo de poder — irmã da venda que ridiculariza a Justiça.', en: 'A witchcraft woodcut that opens the thesis repertoire: the cheap, satirical print as a device of power — sibling to the blindfold that mocks Justice.' } },

  tese: { file: { pt: 'tese', en: 'thesis' }, ext: '', kind: 'app', art: 'doc', w: 540, h: 470,
    kicker: { pt: 'Janela · resumo da tese', en: 'Window · thesis abstract' }, title: { pt: 'iconocracia — a tese', en: 'iconocracy — the thesis' },
    lede: { pt: 'Da venda como sátira (1494) à República sentada (1889).', en: 'From the blindfold as satire (1494) to the seated Republic (1889).' },
    body: { pt: 'O argumento central: a imparcialidade da lei foi, primeiro, uma piada sobre juízes cegos; ao longo de cinco séculos, a alegoria feminina a transformou em fundamento. A tese segue essa linha e mostra a iconografia como teoria do poder de julgar.', en: 'The core argument: the impartiality of law was, at first, a joke about blind judges; over five centuries, the feminine allegory turned it into a foundation. The thesis follows that line and shows iconography as a theory of the power to judge.' } },
  ius: { file: { pt: 'ius gentium', en: 'ius gentium' }, ext: '', kind: 'app', img: RZ('assets/seal.svg'), w: 500, h: 420,
    kicker: { pt: 'Grupo de pesquisa', en: 'Research group' }, title: { pt: 'ius gentium', en: 'ius gentium' },
    lede: { pt: 'História, direito e imagem — um seminário permanente.', en: 'History, law and image — a permanent seminar.' },
    body: { pt: 'Reúne pesquisadoras e pesquisadores em torno da cultura visual do direito: alegorias, frontispícios, selos e emblemas como fontes. Encontros mensais e um arquivo iconográfico em construção.', en: 'Brings together researchers around the visual culture of law: allegories, frontispieces, seals and emblems as sources. Monthly meetings and an iconographic archive in the making.' } },
  contato: { file: { pt: 'contato', en: 'contact' }, ext: '', kind: 'app', art: 'envelope', w: 460, h: 360,
    kicker: { pt: 'Contato', en: 'Contact' }, title: { pt: 'contato', en: 'contact' },
    lede: { pt: 'Para pesquisa, advocacia ou imprensa.', en: 'For research, legal practice or press.' },
    contact: true },
};

window.MESA = { IconArt, L, MENUBAR, ZONES, CONTENT };
