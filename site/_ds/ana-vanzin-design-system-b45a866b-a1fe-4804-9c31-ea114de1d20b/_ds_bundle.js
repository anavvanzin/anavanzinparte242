/* @ds-bundle: {"format":3,"namespace":"AnaVanzinDesignSystem_b45a86","components":[{"name":"FootnoteRef","sourcePath":"components/content/FootnoteRef.jsx"},{"name":"Footnotes","sourcePath":"components/content/FootnoteRef.jsx"},{"name":"PublicationEntry","sourcePath":"components/content/PublicationEntry.jsx"},{"name":"SectionRule","sourcePath":"components/content/SectionRule.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"RubricLink","sourcePath":"components/core/RubricLink.jsx"},{"name":"DesktopIcon","sourcePath":"components/desktop/DesktopIcon.jsx"},{"name":"Dock","sourcePath":"components/desktop/Dock.jsx"},{"name":"Window","sourcePath":"components/desktop/Window.jsx"},{"name":"BlindfoldHero","sourcePath":"components/site/BlindfoldHero.jsx"},{"name":"NavBar","sourcePath":"components/site/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"}],"sourceHashes":{"atlas/data.js":"73f1aa6395da","atlas/parts.jsx":"77256d7f3472","atlas/tweaks-panel.jsx":"6591467622ed","brand/tweaks-panel.jsx":"6591467622ed","components/content/FootnoteRef.jsx":"7ba61a7f552d","components/content/PublicationEntry.jsx":"0346867b5cdc","components/content/SectionRule.jsx":"87dbb565ead7","components/core/Button.jsx":"37f6f8c5d357","components/core/Eyebrow.jsx":"985e0442c257","components/core/RubricLink.jsx":"60ca22471f88","components/desktop/DesktopIcon.jsx":"d1ce65f06c3b","components/desktop/Dock.jsx":"0609d20e7b7d","components/desktop/Window.jsx":"bb5b5cd85541","components/site/BlindfoldHero.jsx":"079f9c988b9f","components/site/NavBar.jsx":"a6b96e1896f2","components/site/SiteFooter.jsx":"d197a80c8fc6","design_handoff_anavanzin_site/pages/image-slot.js":"9309434cb09c","design_handoff_research_wing/reference/content.js":"c4f90ab55430","design_handoff_research_wing/reference/editorial.js":"325e81ca1442","design_handoff_research_wing/reference/object.js":"f196da9a655d","design_handoff_research_wing/reference/theme-filter.js":"5f07894ce584","desktop-app.js":"473dd4ae60de","hifi/image-slot.js":"9309434cb09c","icons.js":"0e894ae4247d","manifesto/app.jsx":"e8d8cddd7a28","manifesto/data.js":"74d20079c9ae","manifesto/tweaks-panel.jsx":"6591467622ed","site/atlas/object.js":"f196da9a655d","site/content.js":"c4f90ab55430","site/desktop-app.js":"473dd4ae60de","site/editorial.js":"325e81ca1442","site/icons.js":"0e894ae4247d","site/theme-filter.js":"5f07894ce584","site/window-contents.js":"112425ce2fed","site_lite/desktop-app.js":"473dd4ae60de","site_lite/icons.js":"0e894ae4247d","site_lite/window-contents.js":"112425ce2fed","ui_kits/desktop/Desktop.jsx":"22dcf72a1600","ui_kits/desktop/WindowContents.jsx":"fc847cf8fc2e","ui_kits/desktop/icons.jsx":"bbe24b8f9374","ui_kits/website/ScreensContent.jsx":"e641854e50d6","ui_kits/website/ScreensHome.jsx":"25165d15b726","uploads/app.js":"bbbfa2cd21a2","window-contents.js":"112425ce2fed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnaVanzinDesignSystem_b45a86 = window.AnaVanzinDesignSystem_b45a86 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// atlas/data.js
try { (() => {
// Atlas-site — research data (fake but faithful to the corpus schema).
const A = "../assets/";
window.AtlasData = {
  thesis: {
    kicker: "ICONOCRACIA · Tese de Doutorado · PPGD/UFSC",
    title: "A alegoria feminina como tecnologia visual do Estado",
    lede: "Uma cartografia comparada do corpo feminino alegórico na cultura jurídica de seis nações — França, Reino Unido, Alemanha, Estados Unidos, Bélgica e Brasil — entre 1789 e 2000. Onde o Estado precisou ser visto, vestiu uma mulher.",
    author: "Ana Vanzin",
    group: "Ius Gentium · UFSC · Florianópolis",
    year: "MMXXVI",
    heroImg: A + "corpus/br-stf-justica-1961.jpg",
    heroCap: "BR · 1961 · Alfredo Ceschiatti · A Justiça, granito · Supremo Tribunal Federal, Brasília"
  },
  stats: [{
    v: "247",
    l: "placas no corpus",
    s: "seis nações · 1789–2000"
  }, {
    v: "8",
    l: "painéis do atlas",
    s: "disposição warburguiana"
  }, {
    v: "10",
    l: "indicadores",
    s: "iconometria do endurecimento"
  }, {
    v: "62%",
    l: "codificado",
    s: "Panofsky · três níveis"
  }],
  argument: {
    cap: "A tese iconocrática",
    drop: "A",
    body: "imagem é sempre uma escavação. Superfícies acumulam — gravura sobre gravura, selo sobre selo, corpo sobre lei — até o substrato original tornar-se mito. A alegoria feminina não ilustra o poder soberano: ela é o poder soberano tornado visível. Ocupa a posição da própria lei — central, imponente, formalmente drapejada — e contudo habitada por uma subjetividade que o sistema não consegue nomear.",
    pull: "Onde se esperava um selo, colocou-se uma figura feminina. A tensão entre a figura e o aparato documental que a cerca é a tese iconocrática tornada visível."
  },
  anatomia: {
    cap: "Anatomia da alegoria · ler o corpo como documento",
    title: "O corpo feminino é o aparato",
    lede: "Décio Villares, «O Retrato da República» (1896), pintado para selar a jovem República brasileira. Tratada como peça do corpus — não como ilustração — a figura deixa de representar o Estado e passa a operá-lo. Cada elemento sobreposto ao corpo feminino executa uma função soberana; é essa transferência que a tese nomeia tecnologia visual.",
    fig: A + "corpus/br-villares-republica.jpg",
    figCap: "BR · 1896 · Décio Villares — O Retrato da República (óleo s/ tela)",
    parts: [{
      n: "1",
      x: "52%",
      y: "15%",
      el: "O barrete frígio e o louro",
      fn: "A liberdade revolucionária importada — a Marianne francesa — naturalizada como insígnia do Brasil."
    }, {
      n: "2",
      x: "49%",
      y: "40%",
      el: "A égide de ouro",
      fn: "A face da Medusa ao peito: a proteção do Estado que é também o poder de petrificar quem o encara."
    }, {
      n: "3",
      x: "31%",
      y: "55%",
      el: "A espada baixa",
      fn: "Força em repouso — a violência convertida em guarda, a coerção tornada serenidade."
    }, {
      n: "4",
      x: "70%",
      y: "22%",
      el: "A inscrição musiva",
      fn: "«ESTADOS UNIDOS DO BRAZIL»: o corpo emoldurado pela legenda que o fixa como norma."
    }, {
      n: "5",
      x: "43%",
      y: "90%",
      el: "A palma aos pés",
      fn: "Vitória e martírio depositados no chão — o prêmio que a alegoria distribui mas não recebe."
    }]
  },
  // Curated vitrine — real corpus plates, six nations, true provenance.
  corpus: [
  // ── Fundacional: o Estado veste pela primeira vez um corpo feminino ──
  {
    id: "FR-1792-01",
    title: "Liberté",
    country: "FR",
    year: 1792,
    regime: "FUNDACIONAL",
    support: "gravura",
    img: A + "corpus/fr-moitte-liberte-1792.jpg"
  }, {
    id: "FR-1793-02",
    title: "A Liberdade coroando a Virtude",
    country: "FR",
    year: 1793,
    regime: "FUNDACIONAL",
    support: "gravura",
    img: A + "corpus/fr-boizot-liberte-1793.jpg"
  }, {
    id: "FR-1793-03",
    title: "A Liberdade armada do Cetro da Razão",
    country: "FR",
    year: 1793,
    regime: "FUNDACIONAL",
    support: "gravura",
    img: A + "corpus/fr-boizot-liberte-armada-1793.jpg"
  }, {
    id: "BR-1896-01",
    title: "O Retrato da República",
    country: "BR",
    year: 1896,
    regime: "FUNDACIONAL",
    support: "pintura",
    img: A + "corpus/br-villares-republica.jpg"
  }, {
    id: "BR-1896-02",
    title: "Alegoria da República",
    country: "BR",
    year: 1896,
    regime: "FUNDACIONAL",
    support: "pintura",
    img: A + "corpus/br-lopes-republica-1896.jpg"
  }, {
    id: "US-1896-01",
    title: "History Instructing Youth",
    country: "US",
    year: 1896,
    regime: "FUNDACIONAL",
    support: "cédula",
    img: A + "corpus/us-educational-1896-c.png"
  },
  // ── Normativo: a fórmula que sobrevive + a circulação como moeda ──
  {
    id: "BE-1559-01",
    title: "Iustitia",
    country: "BE",
    year: 1559,
    regime: "NORMATIVO",
    support: "gravura",
    img: A + "corpus/fr-bruegel-justicia-1559.jpg"
  }, {
    id: "DE-1589-01",
    title: "Justitia da torre do relógio",
    country: "DE",
    year: 1589,
    regime: "NORMATIVO",
    support: "escultura",
    img: A + "corpus/de-justitia-esslingen-1589-c.png"
  }, {
    id: "DE-1752-01",
    title: "Allegorie der Jus Civile",
    country: "DE",
    year: 1752,
    regime: "NORMATIVO",
    support: "escultura",
    img: A + "corpus/de-jus-civile-wenzinger-1752-c.png"
  }, {
    id: "UK-1600-01",
    title: "Iustitia e Prudentia",
    country: "UK",
    year: "s/d",
    regime: "NORMATIVO",
    support: "gravura",
    img: A + "corpus/uk-justitia-prudentia-c.png"
  }, {
    id: "FR-1865-01",
    title: "A Justiça, a Vingança e a Verdade",
    country: "FR",
    year: 1865,
    regime: "NORMATIVO",
    support: "gravura",
    img: A + "corpus/fr-chifflart-justice-1865.jpg"
  }, {
    id: "BR-1961-01",
    title: "A Justiça",
    country: "BR",
    year: 1961,
    regime: "NORMATIVO",
    support: "escultura",
    img: A + "corpus/br-stf-justica-1961.jpg"
  }, {
    id: "FR-1900-01",
    title: "A República de Clésinger",
    country: "FR",
    year: 1900,
    regime: "NORMATIVO",
    support: "escultura",
    img: A + "corpus/fr-clesinger-republique-1900.jpg"
  }, {
    id: "FR-1849-01",
    title: "Cérès — 5 francs",
    country: "FR",
    year: 1849,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/fr-ceres-5f-1849-c.png"
  }, {
    id: "UK-1898-01",
    title: "Britannia — 1 penny",
    country: "UK",
    year: 1898,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/uk-penny-1895-c.png"
  }, {
    id: "UK-1695-01",
    title: "Britannia — meio penny",
    country: "UK",
    year: 1695,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/uk-halfpenny-1695-c.png"
  }, {
    id: "DE-1900-01",
    title: "Germania — Reichspost",
    country: "DE",
    year: 1900,
    regime: "NORMATIVO",
    support: "selo",
    img: A + "corpus/de-germania-1900.jpg"
  }, {
    id: "DE-1919-01",
    title: "Germania — 50 Mark",
    country: "DE",
    year: 1919,
    regime: "NORMATIVO",
    support: "cédula",
    img: A + "corpus/de-50mark-1919-c.png"
  }, {
    id: "DE-1910-01",
    title: "1000 Mark — duas alegorias",
    country: "DE",
    year: 1910,
    regime: "NORMATIVO",
    support: "cédula",
    img: A + "corpus/de-1000mark-1910-c.png"
  }, {
    id: "DE-1908-01",
    title: "100 Mark — duas alegorias",
    country: "DE",
    year: 1908,
    regime: "NORMATIVO",
    support: "cédula",
    img: A + "corpus/de-100mark-1908-c.png"
  }, {
    id: "US-1864-01",
    title: "Seated Liberty — 1 dólar",
    country: "US",
    year: 1864,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/us-seated-liberty-1840-c.png"
  }, {
    id: "BR-1906-01",
    title: "República — 1000 réis",
    country: "BR",
    year: 1906,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/br-1000reis-1906-c.png"
  }, {
    id: "BR-1970-01",
    title: "República — 1 cruzeiro",
    country: "BR",
    year: 1970,
    regime: "NORMATIVO",
    support: "cédula",
    img: A + "corpus/br-1cruzeiro-1970-c.png"
  }, {
    id: "BR-1965-01",
    title: "República — 50 cruzeiros",
    country: "BR",
    year: 1965,
    regime: "NORMATIVO",
    support: "moeda",
    img: A + "corpus/br-50cruzeiros-1965-c.png"
  },
  // ── Militar / endurecimento: a guerra e a colônia enrijecem a figura ──
  {
    id: "FR-1915-01",
    title: "A República nos chama",
    country: "FR",
    year: 1915,
    regime: "MILITAR",
    support: "litografia",
    img: A + "corpus/fr-steinlen-republique-1915.jpg"
  }, {
    id: "UK-1912-01",
    title: "Britannia armada — 1 penny",
    country: "UK",
    year: 1912,
    regime: "MILITAR",
    support: "moeda",
    img: A + "corpus/uk-britannia-penny-1912.jpg"
  }, {
    id: "BE-1912-01",
    title: "Banque du Congo Belge — 100 francs",
    country: "BE",
    year: 1912,
    regime: "MILITAR",
    support: "cédula",
    img: A + "corpus/be-congo-100f-1912-c.png"
  }, {
    id: "BE-1921-01",
    title: "Monumento ao Congo Belga",
    country: "BE",
    year: 1921,
    regime: "MILITAR",
    support: "monumento",
    img: A + "corpus/be-congo-monumento-1921.jpg"
  },
  // ── Contra-alegoria: sátira e fissura ──
  {
    id: "FR-1871-01",
    title: "A República amável",
    country: "FR",
    year: 1871,
    regime: "CONTRA_ALEGORIA",
    support: "gravura",
    img: A + "corpus/fr-rops-republique-1871.jpg"
  }, {
    id: "FR-1904-01",
    title: "O chocalho da República",
    country: "FR",
    year: 1904,
    regime: "CONTRA_ALEGORIA",
    support: "litografia",
    img: A + "corpus/fr-veber-hochet-1904.jpg"
  }],
  panels: [{
    n: "I",
    name: "Gênese",
    desc: "A primeira vez que o Estado vestiu um corpo feminino.",
    period: "1789–1850"
  }, {
    n: "II",
    name: "Justitia",
    desc: "Balança, espada, venda — a fórmula que sobrevive.",
    period: "1800–2000"
  }, {
    n: "III",
    name: "Domesticação",
    desc: "Como o corpo alegórico foi purificado.",
    period: "1850–1920"
  }, {
    n: "IV",
    name: "ENDURECIMENTO",
    desc: "O corpo que endurece quando o Estado faz guerra.",
    period: "1870–1945"
  }, {
    n: "V",
    name: "Pedra e Bronze",
    desc: "Quando a alegoria se torna monumento.",
    period: "1870–1940"
  }, {
    n: "VI",
    name: "Balança e Império",
    desc: "A justiça como arma geopolítica.",
    period: "1850–1960"
  }, {
    n: "VII",
    name: "Branquitude",
    desc: "O contrato racial da imagem soberana.",
    period: "1870–1950"
  }, {
    n: "VIII",
    name: "Fissuras",
    desc: "Contra-alegorias e rupturas.",
    period: "1960–2000"
  }],
  panelImg: [A + "corpus/fr-moitte-liberte-1792.jpg",
  // I · Gênese
  A + "corpus/fr-bruegel-justicia-1559.jpg",
  // II · Justitia
  A + "corpus/fr-ceres-5f-1849-c.png",
  // III · Domesticação
  A + "corpus/fr-steinlen-republique-1915.jpg",
  // IV · ENDURECIMENTO
  A + "corpus/br-stf-justica-1961.jpg",
  // V · Pedra e Bronze
  A + "corpus/be-congo-100f-1912-c.png",
  // VI · Balança e Império
  A + "corpus/us-educational-1896-c.png",
  // VII · Branquitude
  A + "corpus/fr-veber-hochet-1904.jpg" // VIII · Fissuras
  ],
  radiografia: {
    cap: "Radiografia · ENDURECIMENTO",
    title: "Da serenidade ao endurecimento",
    desc: "O mesmo dispositivo — a mulher-Estado — em duas têmperas. O rosto sereno e laureado da moeda republicana francesa, e o corpo armado, de elmo, escudo e tridente, da potência imperial britânica. A iconometria mede, em dez indicadores ordinais, a distância entre a serenidade e o endurecimento: a guerra não inventa a figura, ela a enrijece.",
    indicators: ["desincorporação", "rigidez postural", "dessexualização", "uniformização facial", "heraldicização", "enquadramento arq.", "apagamento narrativo", "monocromatização", "serialidade", "inscrição estatal"],
    a: {
      cap: "FR · 1849 · moeda",
      title: "Cérès, 5 francs",
      regime: "NORMATIVO",
      img: A + "corpus/fr-ceres-5f-1849-c.png",
      scores: [3, 3, 2, 3, 3, 2, 2, 3, 3, 4]
    },
    b: {
      cap: "UK · 1912 · moeda",
      title: "Britannia armada",
      regime: "MILITAR",
      img: A + "corpus/uk-britannia-penny-1912.jpg",
      scores: [7, 8, 7, 7, 9, 6, 8, 6, 8, 9]
    }
  },
  verbetes: [{
    term: "Iconocracia",
    source: "Mondzain (2002) → tese",
    type: "mobilizado",
    ch: "Cap. 2"
  }, {
    term: "Visiocracia",
    source: "Goodrich (2014)",
    type: "mobilizado",
    ch: "Cap. 1"
  }, {
    term: "Contrato Sexual Visual",
    source: "original · sobre Pateman",
    type: "original",
    ch: "Cap. 1"
  }, {
    term: "Feminilidade de Estado",
    source: "original",
    type: "original",
    ch: "Cap. 2"
  }, {
    term: "Economia Icônica",
    source: "Mondzain (2002)",
    type: "mobilizado",
    ch: "Cap. 1"
  }, {
    term: "endurecimento",
    source: "original",
    type: "original",
    ch: "Cap. 6–7"
  }, {
    term: "Purificação Clássica",
    source: "original",
    type: "original",
    ch: "Cap. 5–6"
  }, {
    term: "Pintura de alma",
    source: "Legendre · Goodrich · Mondzain",
    type: "original",
    ch: "Cap. 1"
  }, {
    term: "Pathosformel",
    source: "Warburg",
    type: "mobilizado",
    ch: "Cap. 4"
  }, {
    term: "Zwischenraum",
    source: "Warburg",
    type: "mobilizado",
    ch: "Cap. 8"
  }, {
    term: "Regime Iconocrático",
    source: "original",
    type: "original",
    ch: "Cap. 2"
  }, {
    term: "Acoplamento imagem-norma",
    source: "original",
    type: "original",
    ch: "Cap. 5"
  }, {
    term: "Iconometria",
    source: "método quantitativo",
    type: "método",
    ch: "Cap. 6"
  }, {
    term: "Iconologia",
    source: "método qualitativo · Panofsky",
    type: "método",
    ch: "Cap. 7"
  }],
  method: [{
    k: "QUAN",
    t: "Iconometria do corpus",
    d: "Dez indicadores ordinais aplicados a cada placa; séries por década, suporte e nação revelam a curva do endurecimento. Cap. 6."
  }, {
    k: "QUAL",
    t: "Iconologia jurídica",
    d: "Leitura panofskyana em três níveis — pré-iconográfico, iconográfico, iconológico — ancorada na crítica feminista do direito. Cap. 7."
  }, {
    k: "SÍNTESE",
    t: "Atlas comparativo",
    d: "Montagem warburguiana, não linear: os oito painéis fazem ver o Zwischenraum entre nações, regimes e séculos. Cap. 8–9."
  }],
  COUNTRY: {
    FR: "França",
    UK: "Reino Unido",
    DE: "Alemanha",
    US: "EUA",
    BE: "Bélgica",
    BR: "Brasil"
  },
  REGIME_LABEL: {
    FUNDACIONAL: "fundacional",
    NORMATIVO: "normativo",
    MILITAR: "militar",
    CONTRA_ALEGORIA: "contra-alegoria"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "atlas/data.js", error: String((e && e.message) || e) }); }

// atlas/parts.jsx
try { (() => {
// Atlas-site — theme engine, shared atoms, and section components.
(function () {
  const D = window.AtlasData;
  const REG = {
    FUNDACIONAL: "var(--c-fund)",
    NORMATIVO: "var(--c-norm)",
    MILITAR: "var(--c-mil)",
    CONTRA_ALEGORIA: "var(--c-accent)"
  };

  // Resolve an asset path → inlined blob URL when bundled standalone (keyed by
  // filename via <meta name="ext-resource-dependency">), else the original path.
  const RES = p => {
    const f = String(p).split("/").pop();
    return window.__resources && window.__resources[f] || p;
  };

  // ── Theme → CSS custom properties ───────────────────────────────
  function atlasTheme(t) {
    const light = {
      "--c-ground": "#EFE5CF",
      "--c-panel": "#F8F5EE",
      "--c-panel-2": "rgba(255,255,255,.42)",
      "--c-ink": "#1A1612",
      "--c-ink-2": "#6F665C",
      "--c-ink-3": "#8D8377",
      "--c-border": "#D4C19A",
      "--c-hair": "rgba(184,146,74,.5)",
      "--c-gold": "#B8924A",
      "--c-plate": "#1D2548",
      "--c-on-accent": "#F8F5EE",
      "--c-grain": "var(--grain)"
    };
    const dark = {
      "--c-ground": "#171D38",
      "--c-panel": "#1F274A",
      "--c-panel-2": "rgba(255,255,255,.05)",
      "--c-ink": "#EFE6D2",
      "--c-ink-2": "#C7BCA6",
      "--c-ink-3": "#9A9276",
      "--c-border": "rgba(184,146,74,.34)",
      "--c-hair": "rgba(184,146,74,.4)",
      "--c-gold": "#D4A85E",
      "--c-plate": "#0E142C",
      "--c-on-accent": "#0E142C",
      "--c-grain": "none"
    };
    const base = t.tone === "cabinet" ? dark : light;
    const dens = {
      compacto: ["56px", "16px"],
      regular: ["88px", "22px"],
      amplo: ["124px", "32px"]
    }[t.density] || ["88px", "22px"];
    return {
      ...base,
      "--c-accent": t.accent || "#A04030",
      "--c-fund": "#6B52B0",
      "--c-norm": "#2A7A5A",
      "--c-mil": "#B23636",
      "--scale": t.scale || 1,
      "--t-hero": "calc(62px * var(--scale))",
      "--t-h1": "calc(38px * var(--scale))",
      "--t-h2": "calc(25px * var(--scale))",
      "--t-h3": "calc(19px * var(--scale))",
      "--t-body": "calc(16px * var(--scale))",
      "--t-small": "calc(13px * var(--scale))",
      "--pad-sec": dens[0],
      "--gap": dens[1]
    };
  }
  const heroCols = s => ({
    "equilíbrio": "1.05fr .95fr",
    "imagem dominante": "0.78fr 1.22fr",
    "texto dominante": "1.45fr .7fr"
  })[s] || "1.05fr .95fr";
  const corpusMin = d => ({
    compacto: "150px",
    regular: "182px",
    amplo: "232px"
  })[d] || "182px";

  // ── Atoms ────────────────────────────────────────────────────────
  const Cap = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: "calc(10px * var(--scale))",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "var(--c-gold)",
      ...style
    }
  }, children);
  const DoubleRule = ({
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-gold)",
      borderBottom: "1px solid var(--c-gold)",
      height: 4,
      ...style
    }
  });
  function Plate({
    it,
    label
  }) {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        position: "relative",
        aspectRatio: "3/4",
        overflow: "hidden",
        background: "var(--c-plate)",
        border: "1px solid var(--c-gold)",
        boxShadow: "var(--shadow-plate)",
        borderRadius: "var(--radius-sm)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES(it.img),
      alt: it.title,
      loading: "lazy",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), label !== false && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(180deg,transparent,rgba(13,16,30,.92))",
        borderTop: "1px solid var(--c-gold)",
        padding: "18px 9px 7px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 7,
        letterSpacing: "2px",
        color: "var(--c-gold)",
        textTransform: "uppercase"
      }
    }, it.country, " \xB7 ", it.year, " \xB7 ", it.support), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(13px * var(--scale))",
        color: "#E8DCC4",
        marginTop: 2,
        lineHeight: 1.15
      }
    }, it.title)));
  }
  function Badge({
    children,
    color
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 9,
        letterSpacing: "1px",
        padding: "3px 9px",
        borderRadius: 999,
        background: `color-mix(in srgb, ${color} 18%, transparent)`,
        color
      }
    }, children);
  }

  // ── Sections ─────────────────────────────────────────────────────
  function Nav({
    tone,
    onTone
  }) {
    const links = [["argumento", "Tese"], ["anatomia", "Anatomia"], ["corpus", "Corpus"], ["atlas", "Atlas"], ["radiografia", "Radiografia"], ["lexico", "Léxico"], ["metodo", "Método"]];
    const jump = id => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.offsetTop - 64,
        behavior: "smooth"
      });
    };
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "14px 40px",
        background: "color-mix(in srgb, var(--c-ground) 86%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://anavanzin.com/",
      className: "mono",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 9,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--c-ink-3)",
        textDecoration: "none"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--c-accent)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--c-ink-3)"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "10",
      viewBox: "0 0 15 11",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 5.5H1M6 1 1 5.5 6 10"
    })), "anavanzin.com"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 18,
        background: "var(--c-border)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "calc(20px * var(--scale))",
        letterSpacing: "3px",
        color: "var(--c-ink)"
      }
    }, "ICONOCRACIA"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 8,
        letterSpacing: "2.5px",
        color: "var(--c-gold)",
        textTransform: "uppercase"
      }
    }, "Atlas")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: 18,
        alignItems: "center"
      }
    }, links.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => jump(id),
      className: "mono",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 10,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "var(--c-ink-2)",
        padding: 0
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--c-accent)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--c-ink-2)"
    }, l))));
  }
  function Hero({
    t
  }) {
    const d = D.thesis;
    return /*#__PURE__*/React.createElement("header", {
      id: "topo",
      style: {
        padding: "var(--pad-sec) 40px",
        display: "grid",
        gridTemplateColumns: heroCols(t.heroSplit),
        gap: "56px",
        alignItems: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        height: 1,
        background: "var(--c-gold)",
        marginBottom: 24,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: -3,
        width: 64,
        height: 1,
        background: "var(--c-accent)"
      }
    })), /*#__PURE__*/React.createElement(Cap, null, t.kicker || d.kicker), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-hero)",
        lineHeight: 1.02,
        color: "var(--c-ink)",
        margin: "16px 0 0",
        maxWidth: "15ch"
      }
    }, t.title || d.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "calc(18px * var(--scale))",
        lineHeight: 1.65,
        color: "var(--c-ink-2)",
        margin: "22px 0 0",
        maxWidth: "54ch"
      }
    }, d.lede), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        marginTop: 26,
        flexWrap: "wrap"
      },
      className: "mono"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--c-ink-3)"
      }
    }, d.author), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--c-ink-3)"
      }
    }, "\xB7 ", d.group), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--c-gold)"
      }
    }, "\xB7 ", d.year))), /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        position: "relative",
        aspectRatio: "4/5",
        border: "1px solid var(--c-gold)",
        overflow: "hidden",
        background: "var(--c-plate)",
        boxShadow: "var(--shadow-plate)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES(d.heroImg),
      alt: d.heroCap,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        width: 16,
        height: 16,
        borderTop: "1px solid var(--c-gold)",
        borderLeft: "1px solid var(--c-gold)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 8,
        right: 8,
        width: 16,
        height: 16,
        borderBottom: "1px solid var(--c-gold)",
        borderRight: "1px solid var(--c-gold)"
      }
    }), /*#__PURE__*/React.createElement("figcaption", {
      className: "mono",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(180deg,transparent,rgba(13,16,30,.94))",
        padding: "26px 12px 9px",
        fontSize: 8,
        letterSpacing: "1.5px",
        color: "var(--c-gold)",
        textTransform: "uppercase",
        lineHeight: 1.5
      }
    }, d.heroCap)));
  }
  function Stats() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "0 40px calc(var(--pad-sec) * .6)",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "var(--gap)"
      }
    }, D.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        background: "var(--c-panel)",
        border: "1px solid var(--c-border)",
        padding: "18px 18px 14px",
        backgroundImage: "var(--c-grain)",
        backgroundSize: "200px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: i % 2 ? "var(--c-accent)" : "var(--c-gold)"
      }
    }), /*#__PURE__*/React.createElement(Cap, null, s.l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(40px * var(--scale))",
        lineHeight: 1,
        color: "var(--c-ink)",
        marginTop: 4
      }
    }, s.v), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 8,
        letterSpacing: "1px",
        color: "var(--c-ink-3)",
        marginTop: 6
      }
    }, s.s))));
  }
  function Argument() {
    const a = D.argument;
    return /*#__PURE__*/React.createElement("section", {
      id: "argumento",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement(Cap, null, a.cap), /*#__PURE__*/React.createElement(DoubleRule, {
      style: {
        margin: "16px 0 32px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr .9fr",
        gap: "56px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "calc(20px * var(--scale))",
        lineHeight: 1.85,
        color: "var(--c-ink)",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(64px * var(--scale))",
        lineHeight: .7,
        color: "var(--c-accent)",
        float: "left",
        padding: "6px 12px 0 0"
      }
    }, a.drop), a.body), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        paddingLeft: 20,
        borderLeft: "3px solid var(--c-accent)",
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(24px * var(--scale))",
        lineHeight: 1.3,
        color: "var(--c-ink)"
      }
    }, a.pull)));
  }
  function Anatomia() {
    const a = D.anatomia;
    return /*#__PURE__*/React.createElement("section", {
      id: "anatomia",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement(Cap, null, a.cap), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "var(--c-ink)",
        margin: "6px 0 0"
      }
    }, a.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "calc(18px * var(--scale))",
        color: "var(--c-ink-2)",
        lineHeight: 1.78,
        maxWidth: "60ch",
        margin: "14px 0 0"
      }
    }, a.lede), /*#__PURE__*/React.createElement(DoubleRule, {
      style: {
        margin: "26px 0 32px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        gap: "56px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        position: "relative",
        border: "1px solid var(--c-gold)",
        background: "var(--c-plate)",
        boxShadow: "var(--shadow-plate)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES(a.fig),
      alt: "",
      loading: "lazy",
      style: {
        display: "block",
        width: "100%",
        aspectRatio: "3/4",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "11%",
        bottom: "7%",
        width: 1,
        background: "linear-gradient(180deg,var(--c-gold),rgba(184,146,74,.18))",
        transform: "translateX(-.5px)"
      }
    }), a.parts.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: {
        position: "absolute",
        left: p.x,
        top: p.y,
        transform: "translate(-50%,-50%)",
        width: 27,
        height: 27,
        borderRadius: "50%",
        background: "var(--brand-amethyst)",
        border: "1.5px solid #E8DCC4",
        boxShadow: "0 0 0 4px rgba(138,95,168,.3), var(--shadow-plate)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "#F4F0E8"
      }
    }, p.n)), /*#__PURE__*/React.createElement("figcaption", {
      className: "mono",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(180deg,transparent,rgba(13,16,30,.92))",
        borderTop: "1px solid var(--c-gold)",
        padding: "24px 12px 9px",
        fontSize: 8,
        letterSpacing: "2px",
        color: "var(--c-gold)",
        textTransform: "uppercase"
      }
    }, a.figCap)), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0
      }
    }, a.parts.map((p, i) => /*#__PURE__*/React.createElement("li", {
      key: p.n,
      style: {
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: 20,
        alignItems: "start",
        padding: "20px 0",
        borderTop: i ? "1px solid var(--c-hair)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "1.5px solid var(--brand-amethyst)",
        color: "var(--brand-amethyst)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h3)",
        color: "var(--c-ink)",
        lineHeight: 1.12
      }
    }, p.el), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--t-body)",
        color: "var(--c-ink-2)",
        lineHeight: 1.62,
        marginTop: 6
      }
    }, p.fn)))))));
  }
  function CorpusWall({
    t
  }) {
    const regs = ["FUNDACIONAL", "NORMATIVO", "MILITAR", "CONTRA_ALEGORIA"];
    return /*#__PURE__*/React.createElement("section", {
      id: "corpus",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Cap, null, "Corpus iconogr\xE1fico \xB7 ", D.corpus.length, " placas em vitrine"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "var(--c-ink)",
        margin: "6px 0 0"
      }
    }, "A parede de esp\xE9cimes")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, regs.map(r => /*#__PURE__*/React.createElement("span", {
      key: r,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      },
      className: "mono"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: REG[r]
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        letterSpacing: "1px",
        color: "var(--c-ink-2)",
        textTransform: "uppercase"
      }
    }, D.REGIME_LABEL[r]))))), /*#__PURE__*/React.createElement(DoubleRule, {
      style: {
        margin: "18px 0 24px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill,minmax(${corpusMin(t.density)},1fr))`,
        gap: "var(--gap)"
      }
    }, D.corpus.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Plate, {
      it: it
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: REG[it.regime],
        boxShadow: "0 0 0 2px rgba(0,0,0,.25)"
      }
    })))));
  }
  function AtlasBand() {
    return /*#__PURE__*/React.createElement("section", {
      id: "atlas",
      style: {
        padding: "var(--pad-sec) 40px",
        backgroundColor: "#1A2143",
        backgroundImage: "linear-gradient(rgba(184,146,74,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,146,74,.06) 1px, transparent 1px), linear-gradient(160deg,#1A2143,#2A3360)",
        backgroundSize: "24px 24px, 24px 24px, cover",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Cap, {
      style: {
        color: "#D4A85E"
      }
    }, "O Atlas Iconocr\xE1tico \xB7 oito pain\xE9is \xB7 Warburg"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "#EFE6D2",
        margin: "8px 0 0",
        maxWidth: "20ch"
      }
    }, "Uma montagem que n\xE3o resolve a tens\xE3o \u2014 a habita"), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid #B8924A",
        borderBottom: "1px solid #B8924A",
        height: 4,
        margin: "24px 0 32px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "var(--gap)"
      }
    }, D.panels.map((p, i) => /*#__PURE__*/React.createElement("article", {
      key: p.n,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "4/5",
        border: "1px solid #B8924A",
        overflow: "hidden",
        background: "#0E142C"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES(D.panelImg[i]),
      alt: p.name,
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: .92
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(26px * var(--scale))",
        color: "#D4A85E",
        lineHeight: 1
      }
    }, p.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "calc(18px * var(--scale))",
        color: "#EFE6D2"
      }
    }, p.name)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "calc(13px * var(--scale))",
        color: "#C7BCA6",
        lineHeight: 1.45,
        margin: "4px 0 0"
      }
    }, p.desc), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 8,
        letterSpacing: "1.5px",
        color: "#9A9276",
        marginTop: 4
      }
    }, p.period)))));
  }
  function Radiografia() {
    const r = D.radiografia;
    const Spec = ({
      s
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "3/4",
        border: "1px solid var(--c-gold)",
        overflow: "hidden",
        background: "var(--c-plate)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES(s.img),
      alt: s.title,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Cap, null, s.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h3)",
        color: "var(--c-ink)",
        margin: "4px 0 10px"
      }
    }, s.title), /*#__PURE__*/React.createElement(Badge, {
      color: REG[s.regime]
    }, D.REGIME_LABEL[s.regime]), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, r.indicators.map((name, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 8,
        color: "var(--c-ink-3)",
        width: 96,
        textAlign: "right",
        letterSpacing: ".3px"
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        background: "color-mix(in srgb, var(--c-ink) 8%, transparent)",
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: s.scores[i] * 10 + "%",
        height: "100%",
        background: "var(--c-mil)",
        borderRadius: 3
      }
    })))))));
    return /*#__PURE__*/React.createElement("section", {
      id: "radiografia",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement(Cap, null, r.cap), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "var(--c-ink)",
        margin: "6px 0 0"
      }
    }, r.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--t-body)",
        color: "var(--c-ink-2)",
        lineHeight: 1.7,
        maxWidth: "66ch",
        margin: "12px 0 0"
      }
    }, r.desc), /*#__PURE__*/React.createElement(DoubleRule, {
      style: {
        margin: "24px 0 28px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px"
      }
    }, /*#__PURE__*/React.createElement(Spec, {
      s: r.a
    }), /*#__PURE__*/React.createElement(Spec, {
      s: r.b
    })));
  }
  function Lexico() {
    return /*#__PURE__*/React.createElement("section", {
      id: "lexico",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement(Cap, null, "L\xE9xico \xB7 conceitos da tese"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "var(--c-ink)",
        margin: "6px 0 24px"
      }
    }, "Vocabul\xE1rio iconocr\xE1tico"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap)"
      }
    }, D.verbetes.map(v => {
      const orig = v.type === "original";
      const ac = orig ? "var(--c-accent)" : "var(--c-plate)";
      return /*#__PURE__*/React.createElement("div", {
        key: v.term,
        style: {
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 16,
          alignItems: "start",
          background: "var(--c-panel)",
          border: "1px solid var(--c-border)",
          borderLeft: `3px solid ${ac}`,
          padding: "14px 18px",
          backgroundImage: "var(--c-grain)",
          backgroundSize: "200px"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "var(--t-h3)",
          color: "var(--c-ink)",
          lineHeight: 1
        }
      }, v.term), /*#__PURE__*/React.createElement("div", {
        className: "mono",
        style: {
          fontSize: 9,
          letterSpacing: "1.5px",
          color: "var(--c-gold)",
          marginTop: 4
        }
      }, v.source)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "mono",
        style: {
          fontSize: 8,
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "3px 8px",
          border: `1px solid ${ac}`,
          color: ac
        }
      }, v.type), /*#__PURE__*/React.createElement("span", {
        className: "mono",
        style: {
          fontSize: 9,
          color: "var(--c-ink-3)"
        }
      }, v.ch)));
    })));
  }
  function Method() {
    return /*#__PURE__*/React.createElement("section", {
      id: "metodo",
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "1px solid var(--c-border)"
      }
    }, /*#__PURE__*/React.createElement(Cap, null, "Desenho metodol\xF3gico"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h1)",
        color: "var(--c-ink)",
        margin: "6px 0 28px"
      }
    }, "Tr\xEAs registros, um argumento"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--gap)"
      }
    }, D.method.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.k,
      style: {
        padding: "22px 22px 26px",
        border: "1px solid var(--c-border)",
        background: "var(--c-panel-2)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 14,
        height: 14,
        borderTop: "1px solid var(--c-gold)",
        borderLeft: "1px solid var(--c-gold)"
      }
    }), /*#__PURE__*/React.createElement(Cap, null, m.k), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h2)",
        color: "var(--c-ink)",
        margin: "8px 0 10px"
      }
    }, m.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--t-small)",
        color: "var(--c-ink-2)",
        lineHeight: 1.65,
        margin: 0
      }
    }, m.d)))));
  }
  function Colophon() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        padding: "var(--pad-sec) 40px",
        borderTop: "3px double var(--c-gold)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: RES("../assets/logo-symbol.png"),
      alt: "",
      style: {
        width: 64,
        height: 64,
        objectFit: "cover",
        borderRadius: 4,
        border: "1px solid var(--c-gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--t-h2)",
        color: "var(--c-ink)",
        marginTop: 16
      }
    }, "Iuris Memoria"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 9,
        letterSpacing: "2.5px",
        color: "var(--c-ink-3)",
        textTransform: "uppercase",
        marginTop: 10,
        lineHeight: 1.9
      }
    }, "ICONOCRACIA \xB7 Ius Gentium \xB7 UFSC \xB7 Florian\xF3polis \xB7 MMXXVI", /*#__PURE__*/React.createElement("br", null), "anavvanzin / iconocracy-corpus \xB7 PPGD"));
  }
  window.AtlasParts = {
    atlasTheme,
    Nav,
    Hero,
    Stats,
    Argument,
    Anatomia,
    CorpusWall,
    AtlasBand,
    Radiografia,
    Lexico,
    Method,
    Colophon
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "atlas/parts.jsx", error: String((e && e.message) || e) }); }

// atlas/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "atlas/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// brand/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// components/content/FootnoteRef.jsx
try { (() => {
/** Superscript rubric footnote marker linking to a Footnotes list. */
function FootnoteRef({
  n,
  style
}) {
  return /*#__PURE__*/React.createElement("sup", {
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `#fn-${n}`,
    id: `fnref-${n}`,
    style: {
      color: 'var(--accent)',
      textDecoration: 'none',
      fontSize: '0.72em',
      fontWeight: 600,
      ...style
    }
  }, n));
}

/** Footnote list: hairline rule above, author-year-page register. */
function Footnotes({
  notes = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 'var(--space-4) 0 0',
      borderTop: 'var(--rule-w-hairline) solid var(--rule-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-footnote)',
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      ...style
    }
  }, notes.map((note, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    id: `fn-${i + 1}`,
    style: {
      display: 'flex',
      gap: '0.6em'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `#fnref-${i + 1}`,
    style: {
      color: 'var(--accent)',
      textDecoration: 'none',
      fontWeight: 600
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", null, note))));
}
Object.assign(__ds_scope, { FootnoteRef, Footnotes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FootnoteRef.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Square-cornered button. outline (default) inverts to ink on hover; solid is ink; quiet is text-only. */
function Button({
  children,
  variant = 'outline',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = size === 'sm' ? '6px 14px' : size === 'lg' ? '14px 30px' : '10px 22px';
  const fs = size === 'sm' ? '12px' : '13px';
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    fontSize: fs,
    padding: pad,
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-ui) ease, color var(--duration-ui) ease',
    opacity: disabled ? 0.4 : 1
  };
  const looks = {
    outline: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    solid: {
      background: press ? 'var(--rubric)' : hover && !disabled ? 'color-mix(in srgb, var(--ink) 88%, var(--paper))' : 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)'
    },
    quiet: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      border: '1px solid transparent',
      textDecoration: 'underline',
      textUnderlineOffset: '0.2em',
      textDecorationThickness: '1px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...looks[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Tracked-out uppercase Garamond label. The brand's eyebrow/small-caps device. */
function Eyebrow({
  children,
  color = 'rubric',
  as: Tag = 'div',
  style
}) {
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontSize: 'var(--text-eyebrow)',
      color: color === 'ink' ? 'var(--ink)' : color === 'muted' ? 'var(--text-faint)' : 'var(--rubric)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionRule.jsx
try { (() => {
/** Section opening: rubric eyebrow, Garamond title, strong ink rule beneath. */
function SectionRule({
  eyebrow,
  title,
  lang,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--leading-heading)',
      margin: 0
    }
  }, title), lang ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-faint)'
    }
  }, lang) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--rule-w-strong) solid var(--ink)'
    }
  }));
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/core/RubricLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rubric text link. external adds the → device after the label. */
function RubricLink({
  href = '#',
  children,
  external = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, external ? {
    target: '_blank',
    rel: 'noreferrer'
  } : {}, {
    style: {
      color: 'var(--accent)',
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '0.18em',
      transition: 'color var(--duration-ui) ease',
      ...style
    }
  }, rest), children, external ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2009\u2192") : null);
}
Object.assign(__ds_scope, { RubricLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RubricLink.jsx", error: String((e && e.message) || e) }); }

// components/content/PublicationEntry.jsx
try { (() => {
/** Bibliography-style entry: year in marginalia, italic Garamond title, footnote-style meta. */
function PublicationEntry({
  year,
  title,
  href,
  meta,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(56px, 80px) 1fr',
      gap: '0 var(--space-5)',
      padding: 'var(--space-5) 0',
      borderTop: 'var(--rule-w-hairline) solid var(--rule-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-h3)',
      color: 'var(--text-faint)',
      lineHeight: 1.2
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-tight)',
      margin: 0
    }
  }, href ? /*#__PURE__*/React.createElement(__ds_scope.RubricLink, {
    href: href,
    style: {
      color: 'var(--ink)',
      textDecorationColor: 'var(--rubric)'
    }
  }, title) : title), meta ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, meta) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-footnote)',
      color: 'var(--text-faint)',
      margin: 0
    }
  }, note) : null));
}
Object.assign(__ds_scope, { PublicationEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PublicationEntry.jsx", error: String((e && e.message) || e) }); }

// components/desktop/DesktopIcon.jsx
try { (() => {
/** A desktop icon: glyph above a label. Single-click selects (rubric highlight),
 *  double-click opens. Pass any node as `icon` (svg, img, brand mark). */
function DesktopIcon({
  icon,
  label,
  selected = false,
  onSelect,
  onOpen,
  width = 84,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onPointerDown: e => {
      if (e.stopPropagation) e.stopPropagation();
      if (onSelect) onSelect();
    },
    onDoubleClick: onOpen,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      width,
      padding: 3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 3,
      outline: selected ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
      outlineOffset: 1
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: 1.2,
      textAlign: 'center',
      padding: '1px 5px',
      background: selected ? 'var(--rubric)' : 'transparent',
      color: selected ? 'var(--paper)' : 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { DesktopIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/desktop/DesktopIcon.jsx", error: String((e && e.message) || e) }); }

// components/desktop/Dock.jsx
try { (() => {
/** Bottom dock: ink bar with the site wordmark and a tab per open window.
 *  Active window tab is filled paper; minimized tabs are faded. */
function Dock({
  brand = 'anavanzin.com',
  items = [],
  onItemClick,
  hint,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '0 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.26em',
      fontSize: 11,
      color: 'var(--gold-2)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'rgba(242,234,217,0.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      overflow: 'hidden'
    }
  }, items.map(it => {
    const on = it.active && !it.minimized;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onPointerDown: e => {
        if (e.stopPropagation) e.stopPropagation();
      },
      onClick: () => onItemClick && onItemClick(it.id),
      style: {
        background: on ? 'var(--paper)' : 'transparent',
        color: on ? 'var(--ink)' : 'var(--paper)',
        border: '1px solid ' + (on ? 'var(--paper)' : 'rgba(242,234,217,0.35)'),
        borderRadius: 0,
        padding: '3px 10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        whiteSpace: 'nowrap',
        opacity: it.minimized ? 0.6 : 1
      }
    }, it.title);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'rgba(242,234,217,0.5)',
      whiteSpace: 'nowrap'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Dock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/desktop/Dock.jsx", error: String((e && e.message) || e) }); }

// components/desktop/Window.jsx
try { (() => {
/** A System-7-style window: hairline title bar with stripe flanks, square close
 *  (left) and minimize (right) boxes, square corners, hard offset outline. */
function Window({
  title,
  active = true,
  width = 480,
  onClose,
  onMinimize,
  onTitleDown,
  bodyPad = 22,
  children,
  style
}) {
  const stripes = active ? 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)' : 'none';
  const flank = {
    flex: 1,
    height: 11,
    alignSelf: 'center',
    background: stripes,
    opacity: active ? 0.9 : 0,
    minWidth: 12
  };
  const box = {
    width: 15,
    height: 15,
    border: '1.5px solid var(--ink)',
    background: 'var(--paper)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    cursor: 'pointer',
    boxSizing: 'border-box',
    opacity: active ? 1 : 0.4
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      borderRadius: 0,
      boxShadow: active ? '5px 5px 0 0 var(--ink)' : '3px 3px 0 0 var(--ink-50)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: onTitleDown,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 30,
      padding: '0 9px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--ink)',
      cursor: onTitleDown ? 'grab' : 'default',
      userSelect: 'none',
      touchAction: 'none'
    }
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fechar",
    onClick: onClose,
    onPointerDown: e => e.stopPropagation(),
    style: box
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: flank
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      color: active ? 'var(--ink)' : 'var(--text-faint)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: flank
  }), onMinimize ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Minimizar",
    onClick: onMinimize,
    onPointerDown: e => e.stopPropagation(),
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 1.5,
      background: 'var(--ink)'
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: bodyPad
    }
  }, children));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/desktop/Window.jsx", error: String((e && e.message) || e) }); }

// components/site/BlindfoldHero.jsx
try { (() => {
/**
 * The signature hero: name very large in Garamond, one thin rubric line at
 * blindfold height. The line's draw-in is the site's only animation and is
 * gated on prefers-reduced-motion.
 */
function BlindfoldHero({
  name = 'ana vanzin',
  subtitle,
  lede,
  animate = true,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0 var(--space-7)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes av-blindfold-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .av-blindfold-line { transform-origin: left center; }
        @media (prefers-reduced-motion: no-preference) {
          .av-blindfold-line[data-animate="true"] {
            animation: av-blindfold-draw var(--duration-reveal) var(--ease-page) both;
            animation-delay: 250ms;
          }
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: '0.01em',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "av-blindfold-line",
    "data-animate": animate ? 'true' : 'false',
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '42%',
      height: 1,
      background: 'var(--rubric)'
    }
  })), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontSize: 'var(--text-eyebrow)',
      color: 'var(--rubric)',
      marginTop: 'var(--space-5)'
    }
  }, subtitle) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55,
      marginTop: 'var(--space-5)'
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { BlindfoldHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/BlindfoldHero.jsx", error: String((e && e.message) || e) }); }

// components/site/NavBar.jsx
try { (() => {
/** Site header: lockup left, small-caps Garamond nav right, active item underlined in rubric. */
function NavBar({
  items = [],
  activeId,
  onSelect,
  lockupSrc = 'assets/lockup.svg',
  langToggle,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      borderBottom: 'var(--rule-w-hairline) solid var(--rule-hairline)',
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "ana vanzin \u2014 in\xEDcio",
    style: {
      display: 'flex',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lockupSrc,
    alt: "ana vanzin",
    style: {
      height: 44,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "principal",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, items.map(item => {
    const active = item.id === activeId;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: item.href || '#' + item.id,
      onClick: onSelect ? e => {
        e.preventDefault();
        onSelect(item.id);
      } : undefined,
      "aria-current": active ? 'page' : undefined,
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-caps)',
        fontSize: '13px',
        color: active ? 'var(--rubric)' : 'var(--ink)',
        textDecoration: 'none',
        borderBottom: active ? '1px solid var(--rubric)' : '1px solid transparent',
        paddingBottom: 3,
        transition: 'color var(--duration-ui) ease, border-color var(--duration-ui) ease'
      }
    }, item.label);
  }), langToggle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-faint)',
      letterSpacing: '0.1em'
    }
  }, langToggle) : null));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
/** Inverse ink footer: seal, contact line, printer's flourish. */
function SiteFooter({
  sealSrc = 'assets/seal.svg',
  email = 'ana@anavanzin.com',
  lines = [],
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: 'var(--space-7) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sealSrc,
    alt: "",
    width: "56",
    height: "56",
    style: {
      filter: 'invert(1) hue-rotate(180deg) saturate(0)',
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontSize: 'var(--text-eyebrow)',
      color: 'var(--paper)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--rubric)',
      paddingBottom: 3
    }
  }, email), lines.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 'var(--text-small)',
      color: 'var(--ink-30)',
      maxWidth: '52ch'
    }
  }, line)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--ink-50)'
    }
  }, "\u2767"));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// design_handoff_anavanzin_site/pages/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_anavanzin_site/pages/image-slot.js", error: String((e && e.message) || e) }); }

// design_handoff_research_wing/reference/content.js
try { (() => {
/* ============================================================
   ana vanzin — shared content architecture
   One bilingual data spine for the research wing. No styling here.
   Consumed by: atlas/*, sala-de-leitura, desenhe-um-simbolo, and any
   future route. Pages read window.AVContent and render with the
   editorial primitives (editorial.css). PT primary / EN secondary.

   Collections:
     THEMES        — the taxonomy that links essays, objects, readings
     OBJECTS       — Atlas dossiers (visual objects under curation)
     READINGS      — the reading-room shelves (books, articles, sources)
     SYMBOLS       — legal symbols, used by "Draw a Legal Symbol"
     ESSAYS        — pointers into marginália (index only, not full text)
     PUBLICATIONS  — pointers into publicações (index only)
     PROJECTS      — research strands / work in formation
   Helpers: AVContent.theme(slug), .objectsByTheme(slug), .readingsByTheme(slug)
   ============================================================ */
(function () {
  function L(o) {
    var lang = window.AV && window.AV.lang || 'pt';
    return o && typeof o === 'object' && ('pt' in o || 'en' in o) ? o[lang] != null ? o[lang] : o.pt : o;
  }

  /* ---------- THEMES — the shared taxonomy ---------- */
  var THEMES = [{
    slug: 'justica-cegueira',
    n: '01',
    name: {
      pt: 'justiça e cegueira',
      en: 'justice and blindness'
    },
    gloss: {
      pt: 'a venda, do escárnio à virtude',
      en: 'the blindfold, from satire to virtue'
    }
  }, {
    slug: 'nacao-republica',
    n: '02',
    name: {
      pt: 'nação e república',
      en: 'nation and republic'
    },
    gloss: {
      pt: 'Marianne, Britannia, a República',
      en: 'Marianne, Britannia, the Republic'
    }
  }, {
    slug: 'direito-violencia',
    n: '03',
    name: {
      pt: 'direito e violência',
      en: 'law and violence'
    },
    gloss: {
      pt: 'o gume por trás da virtude',
      en: 'the blade behind the virtue'
    }
  }, {
    slug: 'alegoria-feminina',
    n: '04',
    name: {
      pt: 'alegoria feminina',
      en: 'feminine allegory'
    },
    gloss: {
      pt: 'o corpo emprestado à lei',
      en: 'the body lent to law'
    }
  }, {
    slug: 'soberania-visual',
    n: '05',
    name: {
      pt: 'soberania visual',
      en: 'visual sovereignty'
    },
    gloss: {
      pt: 'quem governa o que se vê',
      en: 'who governs what is seen'
    }
  }, {
    slug: 'colonialidade-ver',
    n: '06',
    name: {
      pt: 'colonialidade do ver',
      en: 'coloniality of seeing'
    },
    gloss: {
      pt: 'raça, nação e o olhar jurídico',
      en: 'race, nation and the legal gaze'
    }
  }];

  /* ---------- OBJECTS — Atlas dossiers ---------- */
  var OBJECTS = [{
    slug: 'justitia',
    href: 'atlas/justitia.html',
    img: 'assets/atlas/justitia.jpg',
    status: {
      pt: 'em curadoria',
      en: 'under curation'
    },
    title: {
      pt: 'Justitia vendada',
      en: 'Blindfolded Justitia'
    },
    object: {
      pt: 'Xilogravura',
      en: 'Woodcut'
    },
    origin: {
      pt: 'Das Narrenschiff, Basileia',
      en: 'Das Narrenschiff, Basel'
    },
    date: '1494',
    maker: {
      pt: 'Sebastian Brant (atrib. oficina)',
      en: 'Sebastian Brant (attrib. workshop)'
    },
    shelf: {
      pt: 'fólio 22v',
      en: 'folio 22v'
    },
    rights: {
      pt: 'direitos a verificar',
      en: 'rights to be verified'
    },
    themes: ['justica-cegueira', 'alegoria-feminina'],
    caption: {
      pt: 'O tolo venda os olhos de Justitia. A primeira Justitia vendada não é virtude — é escárnio.',
      en: "The fool blindfolds Justitia. The first blindfolded Justitia is not virtue — it is mockery."
    },
    symbols: ['venda', 'balanca', 'gume'],
    summary: {
      pt: 'A mais antiga Justitia vendada de que se tem notícia não a mostra como virtude, mas como alvo: um tolo lhe cobre os olhos, e o gesto é de zombaria. Este dossiê reúne o objeto, sua descrição material e as leituras que o atravessam.',
      en: 'The earliest known blindfolded Justitia shows her not as virtue but as target: a fool covers her eyes, and the gesture is one of mockery. This dossier gathers the object, its material description and the readings that cross it.'
    },
    notes: [{
      k: {
        pt: 'O gesto',
        en: 'The gesture'
      },
      t: {
        pt: 'A autoria do gesto decide o sentido. Quase nunca é a própria Justitia quem se venda — é alguém que a venda.',
        en: 'The authorship of the gesture decides its meaning. It is almost never Justitia who blindfolds herself — it is someone who blindfolds her.'
      }
    }, {
      k: {
        pt: 'A viagem',
        en: 'The journey'
      },
      t: {
        pt: 'Da margem satírica do livro impresso ao tímpano do tribunal, em pouco mais de um século.',
        en: 'From the satirical margin of the printed book to the courthouse tympanum, in little more than a century.'
      }
    }],
    essay: {
      href: 'marginalia/justica-nao-nasceu-cega.html',
      label: {
        pt: 'a justiça não nasceu cega',
        en: 'justice was not born blind'
      }
    },
    sources: [{
      pt: 'Brant, Sebastian. <em>Das Narrenschiff</em>. Basileia, 1494, fol. 22v. Digitalização e direitos a confirmar.',
      en: 'Brant, Sebastian. <em>Das Narrenschiff</em>. Basel, 1494, fol. 22v. Digitisation and rights to be confirmed.'
    }]
  }, {
    slug: 'marianne',
    href: 'atlas/marianne.html',
    img: 'assets/atlas/marianne.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'Marianne',
      en: 'Marianne'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'França',
      en: 'France'
    },
    date: 'séc. XVIII–',
    maker: {
      pt: 'tradição republicana',
      en: 'republican tradition'
    },
    shelf: {
      pt: 'múltiplos suportes',
      en: 'multiple supports'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'alegoria-feminina', 'soberania-visual'],
    caption: {
      pt: 'A República figurada em corpo de mulher — e sua irmã tropical.',
      en: 'The Republic figured in a woman\u2019s body — and her tropical sister.'
    },
    symbols: ['barrete', 'coroa'],
    summary: {
      pt: 'A figura feminina que encarna a República francesa e viaja, transformada, para a alegoria da nação brasileira. Dossiê em formação.',
      en: 'The feminine figure that embodies the French Republic and travels, transformed, into the allegory of the Brazilian nation. Dossier in formation.'
    },
    notes: [],
    essay: {
      href: 'publicacoes/maria-marianne.html',
      label: {
        pt: 'Maria, Marianne e a República',
        en: 'Maria, Marianne and the Republic'
      }
    },
    sources: []
  }, {
    slug: 'britannia',
    href: 'atlas/britannia.html',
    img: 'assets/atlas/britannia.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'Britannia',
      en: 'Britannia'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'Grã-Bretanha',
      en: 'Great Britain'
    },
    date: 'séc. XVII–',
    maker: {
      pt: 'tradição imperial',
      en: 'imperial tradition'
    },
    shelf: {
      pt: 'moeda, estátua, gravura',
      en: 'coin, statue, print'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'soberania-visual', 'colonialidade-ver'],
    caption: {
      pt: 'A nação imperial em corpo de mulher armada.',
      en: 'The imperial nation as an armed woman\u2019s body.'
    },
    symbols: ['gume', 'coroa'],
    summary: {
      pt: 'A alegoria britânica entre virtude cívica e poder imperial. Dossiê em formação.',
      en: 'The British allegory between civic virtue and imperial power. Dossier in formation.'
    },
    notes: [],
    essay: null,
    sources: []
  }, {
    slug: 'republica',
    href: 'atlas/republica.html',
    img: 'assets/atlas/republica.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'A República',
      en: 'The Republic'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'Brasil',
      en: 'Brazil'
    },
    date: '1889–',
    maker: {
      pt: 'iconografia republicana',
      en: 'republican iconography'
    },
    shelf: {
      pt: 'moeda, selo, pintura',
      en: 'coin, stamp, painting'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'alegoria-feminina', 'colonialidade-ver'],
    caption: {
      pt: 'A irmã tropical de Marianne: a República brasileira figurada como mulher.',
      en: 'Marianne\u2019s tropical sister: the Brazilian Republic figured as a woman.'
    },
    symbols: ['barrete', 'coroa'],
    summary: {
      pt: 'A alegoria feminina da nação brasileira, entre importação iconográfica e invenção local. Dossiê em formação.',
      en: 'The feminine allegory of the Brazilian nation, between iconographic import and local invention. Dossier in formation.'
    },
    notes: [],
    essay: {
      href: 'publicacoes/maria-marianne.html',
      label: {
        pt: 'Maria, Marianne e a República',
        en: 'Maria, Marianne and the Republic'
      }
    },
    sources: []
  }];

  /* ---------- SYMBOLS — for "Draw a Legal Symbol" ---------- */
  /* path = an SVG path string drawn on a 100x100 viewBox (study line) */
  var SYMBOLS = [{
    slug: 'venda',
    name: {
      pt: 'a venda',
      en: 'the blindfold'
    },
    gloss: {
      pt: 'cega o juízo — ou o protege do que não deve ver',
      en: 'blinds judgement — or shields it from what it must not see'
    },
    theme: 'justica-cegueira',
    path: 'M16 50 Q50 38 84 50 Q50 62 16 50 Z M16 50 L8 44 M84 50 L92 44'
  }, {
    slug: 'balanca',
    name: {
      pt: 'a balança',
      en: 'the scale'
    },
    gloss: {
      pt: 'a medida como tecnologia política',
      en: 'measure as a political technology'
    },
    theme: 'direito-violencia',
    path: 'M50 18 L50 78 M34 78 L66 78 M22 34 L78 34 M22 34 L14 54 M22 34 L30 54 M14 54 Q22 64 30 54 M78 34 L70 54 M78 34 L86 54 M70 54 Q78 64 86 54'
  }, {
    slug: 'gume',
    name: {
      pt: 'o gume',
      en: 'the blade'
    },
    gloss: {
      pt: 'a força que a virtude esconde',
      en: 'the force the virtue conceals'
    },
    theme: 'direito-violencia',
    path: 'M50 14 L50 70 M38 70 L62 70 M34 76 L66 76 M44 22 L50 14 L56 22'
  }, {
    slug: 'coroa',
    name: {
      pt: 'a coroa',
      en: 'the crown'
    },
    gloss: {
      pt: 'soberania que se vê de longe',
      en: 'sovereignty seen from afar'
    },
    theme: 'soberania-visual',
    path: 'M22 64 L18 34 L34 50 L50 28 L66 50 L82 34 L78 64 Z M22 64 L78 64'
  }, {
    slug: 'barrete',
    name: {
      pt: 'o barrete frígio',
      en: 'the Phrygian cap'
    },
    gloss: {
      pt: 'a liberdade que a república veste',
      en: 'the liberty the republic wears'
    },
    theme: 'nacao-republica',
    path: 'M30 70 L30 46 Q30 22 56 22 Q74 22 70 40 Q66 50 70 70 Z M30 46 Q44 52 70 48'
  }, {
    slug: 'trono',
    name: {
      pt: 'o trono',
      en: 'the throne'
    },
    gloss: {
      pt: 'o lugar de onde a lei fala',
      en: 'the seat from which law speaks'
    },
    theme: 'soberania-visual',
    path: 'M30 30 L30 84 M70 30 L70 84 M30 30 L70 30 M30 56 L70 56 M24 84 L76 84'
  }];

  /* ---------- READINGS — the reading-room shelves ---------- */
  var READINGS = [{
    slug: 'lei-imagem',
    anchor: 'lei-imagem',
    shelf: {
      pt: 'Lei e imagem',
      en: 'Law and image'
    },
    note: {
      pt: 'Como o direito se torna visível, e o que a imagem faz quando vira norma.',
      en: 'How law becomes visible, and what the image does once it becomes norm.'
    },
    themes: ['soberania-visual', 'justica-cegueira'],
    items: [{
      author: 'Costas Douzinas & Lynda Nead (eds.)',
      year: '1999',
      title: {
        pt: 'Law and the Image',
        en: 'Law and the Image'
      },
      line: {
        pt: 'A imagem como lugar do jurídico, não seu ornamento.',
        en: 'The image as a site of the legal, not its ornament.'
      }
    }, {
      author: 'Peter Goodrich',
      year: '1995',
      title: {
        pt: 'Oedipus Lex',
        en: 'Oedipus Lex'
      },
      line: {
        pt: 'Psicanálise, história e os signos do direito.',
        en: 'Psychoanalysis, history and the signs of law.'
      }
    }, {
      author: 'W. J. T. Mitchell',
      year: '1986',
      title: {
        pt: 'Iconology',
        en: 'Iconology'
      },
      line: {
        pt: 'Imagem, texto e ideologia — a gramática do ver.',
        en: 'Image, text and ideology — the grammar of seeing.'
      }
    }]
  }, {
    slug: 'alegoria-corpo',
    anchor: 'alegoria-corpo',
    shelf: {
      pt: 'Alegoria e corpo',
      en: 'Allegory and body'
    },
    note: {
      pt: 'Por que a autoridade toma forma de mulher — e o que esse corpo carrega.',
      en: 'Why authority takes the form of a woman — and what that body carries.'
    },
    themes: ['alegoria-feminina', 'nacao-republica'],
    items: [{
      author: 'Marina Warner',
      year: '1985',
      title: {
        pt: 'Monuments and Maidens',
        en: 'Monuments and Maidens'
      },
      line: {
        pt: 'A alegoria feminina da forma pública, de Atena à República.',
        en: 'The feminine allegory of public form, from Athena to the Republic.'
      }
    }, {
      author: 'Carole Pateman',
      year: '1988',
      title: {
        pt: 'O Contrato Sexual',
        en: 'The Sexual Contract'
      },
      line: {
        pt: 'O pacto que a teoria política não nomeia.',
        en: 'The pact that political theory does not name.'
      }
    }, {
      author: 'Maurice Agulhon',
      year: '1979',
      title: {
        pt: 'Marianne au combat',
        en: 'Marianne into Battle'
      },
      line: {
        pt: 'A figura da República como imagem militante.',
        en: 'The figure of the Republic as militant image.'
      }
    }]
  }, {
    slug: 'metodo',
    anchor: 'metodo',
    shelf: {
      pt: 'Método: atlas e iconologia',
      en: 'Method: atlas and iconology'
    },
    note: {
      pt: 'Ferramentas para ler imagens em série — montagem, sobrevivência, sintoma.',
      en: 'Tools for reading images in series — montage, survival, symptom.'
    },
    themes: ['soberania-visual', 'colonialidade-ver'],
    items: [{
      author: 'Aby Warburg',
      year: '1929',
      title: {
        pt: 'Atlas Mnemosyne',
        en: 'Mnemosyne Atlas'
      },
      line: {
        pt: 'A montagem de imagens como forma de pensamento.',
        en: 'The montage of images as a form of thought.'
      }
    }, {
      author: 'Georges Didi-Huberman',
      year: '2002',
      title: {
        pt: 'A Imagem Sobrevivente',
        en: 'The Surviving Image'
      },
      line: {
        pt: 'Warburg, o tempo das imagens e o sintoma.',
        en: 'Warburg, the time of images and the symptom.'
      }
    }, {
      author: 'Erwin Panofsky',
      year: '1939',
      title: {
        pt: 'Estudos de Iconologia',
        en: 'Studies in Iconology'
      },
      line: {
        pt: 'Os três níveis do sentido na imagem.',
        en: 'The three levels of meaning in the image.'
      }
    }]
  }, {
    slug: 'nacao-genero',
    anchor: 'nacao-genero',
    shelf: {
      pt: 'Nação, gênero e direito',
      en: 'Nation, gender and law'
    },
    note: {
      pt: 'Cidadania, nacionalidade e o lugar jurídico da mulher.',
      en: 'Citizenship, nationality and the legal place of women.'
    },
    themes: ['nacao-republica', 'colonialidade-ver'],
    items: [{
      author: 'Nira Yuval-Davis',
      year: '1997',
      title: {
        pt: 'Gênero e Nação',
        en: 'Gender and Nation'
      },
      line: {
        pt: 'A mulher como fronteira simbólica da nação.',
        en: 'Woman as the symbolic boundary of the nation.'
      }
    }, {
      author: 'Linda Kerber',
      year: '1998',
      title: {
        pt: 'No Constitutional Right to Be Ladies',
        en: 'No Constitutional Right to Be Ladies'
      },
      line: {
        pt: 'Obrigações, cidadania e o corpo feminino diante da lei.',
        en: 'Obligations, citizenship and the female body before the law.'
      }
    }]
  }];

  /* ---------- ESSAYS — pointers into marginália ---------- */
  var ESSAYS = [{
    href: 'marginalia/justica-nao-nasceu-cega.html',
    date: '2026 · 03',
    title: {
      pt: 'a justiça não nasceu cega',
      en: 'justice was not born blind'
    },
    themes: ['justica-cegueira', 'alegoria-feminina']
  }, {
    href: 'marginalia/balanca.html',
    date: '2026 · 02',
    title: {
      pt: 'uma balança nunca é só uma balança',
      en: 'a scale is never just a scale'
    },
    themes: ['direito-violencia', 'soberania-visual']
  }, {
    href: 'marginalia/fachada.html',
    date: '2026 · 01',
    title: {
      pt: 'a mulher na fachada do tribunal',
      en: 'the woman on the courthouse façade'
    },
    themes: ['nacao-republica', 'alegoria-feminina']
  }];

  /* ---------- PROJECTS — research strands ---------- */
  var PROJECTS = [{
    slug: 'iconocracia',
    href: 'iconocracia/',
    title: {
      pt: 'ICONOCRACIA',
      en: 'ICONOCRACIA'
    },
    line: {
      pt: 'A tese: como o direito imagina a si mesmo.',
      en: 'The thesis: how law imagines itself.'
    }
  }, {
    slug: 'feminilidade-estado',
    title: {
      pt: 'Feminilidade de Estado',
      en: 'State Femininity'
    },
    line: {
      pt: 'A nação personificada como mulher: Justitia, Marianne, a República.',
      en: 'The nation personified as a woman: Justitia, Marianne, the Republic.'
    }
  }, {
    slug: 'condicao-juridica',
    title: {
      pt: 'Condição jurídica da mulher',
      en: 'Women\u2019s legal condition'
    },
    line: {
      pt: 'Nacionalidade, casamento e cidadania na história do direito.',
      en: 'Nationality, marriage and citizenship in legal history.'
    }
  }];
  function theme(slug) {
    return THEMES.filter(function (t) {
      return t.slug === slug;
    })[0] || null;
  }
  function objectsByTheme(slug) {
    return OBJECTS.filter(function (o) {
      return o.themes.indexOf(slug) >= 0;
    });
  }
  function readingsByTheme(slug) {
    return READINGS.filter(function (r) {
      return r.themes.indexOf(slug) >= 0;
    });
  }
  function object(slug) {
    return OBJECTS.filter(function (o) {
      return o.slug === slug;
    })[0] || null;
  }
  window.AVContent = {
    L: L,
    THEMES: THEMES,
    OBJECTS: OBJECTS,
    SYMBOLS: SYMBOLS,
    READINGS: READINGS,
    ESSAYS: ESSAYS,
    PROJECTS: PROJECTS,
    theme: theme,
    object: object,
    objectsByTheme: objectsByTheme,
    readingsByTheme: readingsByTheme
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_research_wing/reference/content.js", error: String((e && e.message) || e) }); }

// design_handoff_research_wing/reference/editorial.js
try { (() => {
/* ana vanzin — editorial route shell.
   Bilingual (PT primary / EN secondary) via localStorage 'av_lang', shared
   across all routes and the desktop homepage. Generic + declarative:
   - any element with data-pt / data-en   -> textContent swapped on lang change
   - any element with data-pt-html / data-en-html -> innerHTML swapped
   - .langtog buttons[data-lang] toggle + persist
   - .avnav a[data-match] (space-separated filenames) gets .cur for current page
   No asset paths here, so the file loads correctly from root or a subdir. */
(function () {
  function getLang() {
    try {
      var s = localStorage.getItem('av_lang');
      return s === 'en' ? 'en' : 'pt';
    } catch (e) {
      return 'pt';
    }
  }
  function setLang(l) {
    try {
      localStorage.setItem('av_lang', l);
    } catch (e) {}
  }
  var lang = getLang();
  function paintText() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-pt]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-pt-html]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang + '-html');
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.langtog button[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
    // let pages react (re-render data-driven content)
    window.dispatchEvent(new CustomEvent('av:lang', {
      detail: {
        lang: lang
      }
    }));
  }
  function markActive() {
    var route = document.body && document.body.getAttribute('data-route');
    if (!route) return;
    document.querySelectorAll('.avnav a[data-route]').forEach(function (a) {
      if (a.getAttribute('data-route') === route) a.classList.add('cur');
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.langtog button[data-lang]');
    if (!b) return;
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    setLang(lang);
    paintText();
  });

  // expose current lang for pages that build content imperatively
  window.AV = {
    get lang() {
      return lang;
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      paintText();
      markActive();
    });
  } else {
    paintText();
    markActive();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_research_wing/reference/editorial.js", error: String((e && e.message) || e) }); }

// design_handoff_research_wing/reference/object.js
try { (() => {
/* ana vanzin — Atlas object page renderer (reusable).
   Each atlas/<slug>.html is an identical thin host; the slug is read from
   the filename, and the dossier is rendered from window.AVContent.
   Uses the editorial primitives (editorial.css). Re-renders on av:lang. */
(function () {
  function slugFromPath() {
    var f = (location.pathname.split('/').pop() || 'justitia.html').replace(/\.html?$/, '');
    return f || 'justitia';
  }
  var L = function (o) {
    return window.AVContent.L(o);
  };
  var SLUG = slugFromPath();
  function themeChips(slugs) {
    return slugs.map(function (s) {
      var t = window.AVContent.theme(s);
      if (!t) return '';
      return '<a class="oc-th" href="../sala-de-leitura/#' + t.slug + '">' + L(t.name) + '</a>';
    }).join('');
  }
  function symbolRow(slugs) {
    if (!slugs || !slugs.length) return '';
    var items = slugs.map(function (s) {
      var sy = window.AVContent.SYMBOLS.filter(function (x) {
        return x.slug === s;
      })[0];
      if (!sy) return '';
      return '<a class="oc-sym" href="../iconocracia/desenhe-um-simbolo.html#' + sy.slug + '" title="' + L(sy.gloss) + '">' + '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="' + sy.path + '"/></svg>' + '<span>' + L(sy.name) + '</span></a>';
    }).join('');
    return '<div class="oc-syms"><p class="oc-h"><span data-k="symbols"></span></p><div class="oc-sym-row">' + items + '</div></div>';
  }
  function notesBlock(notes) {
    if (!notes || !notes.length) return '';
    return notes.map(function (n) {
      return '<aside class="mn"><span class="mn-k">' + L(n.k) + '</span><span>' + L(n.t) + '</span></aside>';
    }).join('');
  }
  function sourcesBlock(src) {
    if (!src || !src.length) return '';
    var lis = src.map(function (s) {
      return '<li>' + L(s) + '</li>';
    }).join('');
    var h = window.AV && window.AV.lang === 'en' ? 'Sources &amp; notes' : 'Fontes &amp; notas';
    return '<div class="source-note prose"><p class="sn-h">' + h + '</p><ol>' + lis + '</ol></div>';
  }
  function relatedBlock(o) {
    var en = window.AV && window.AV.lang === 'en';
    var rows = [];
    if (o.essay) rows.push('<li><a href="../' + o.essay.href + '"><span class="ri-k">' + (en ? 'essay' : 'ensaio') + '</span><span class="ri-t">' + L(o.essay.label) + '</span><span class="ar">→</span></a></li>');
    var firstTheme = o.themes[0];
    if (firstTheme) rows.push('<li><a href="../sala-de-leitura/#' + firstTheme + '"><span class="ri-k">' + (en ? 'reading' : 'leitura') + '</span><span class="ri-t">' + (en ? 'In the reading room' : 'Na sala de leitura') + '</span><span class="ar">→</span>' + '<span class="ri-d">' + (en ? 'shelves linked to this object' : 'prateleiras ligadas a este objeto') + '</span></a></li>');
    rows.push('<li><a href="index.html"><span class="ri-k">' + (en ? 'atlas' : 'atlas') + '</span><span class="ri-t">' + (en ? 'All objects' : 'Todos os objetos') + '</span><span class="ar">→</span></a></li>');
    return '<nav class="related"><p class="rel-h">' + (en ? 'Research trail' : 'Trilha de pesquisa') + '</p><ul>' + rows.join('') + '</ul></nav>';
  }
  function figure(o) {
    var inner;
    if (o.img) {
      inner = '<img src="../' + o.img + '" alt="' + L(o.caption) + '" loading="lazy">';
    } else {
      inner = '<div class="ph tall"><span class="ph-lbl">' + L(o.caption) + '</span></div>';
    }
    return '<figure class="ed-fig"><div class="frame">' + inner + '</div>' + '<figcaption><span class="cap">' + L(o.caption) + '</span>' + '<span class="src">' + L(o.origin) + ', ' + o.date + ' · ' + L(o.rights) + '</span></figcaption></figure>';
  }
  function metaBlock(o) {
    var en = window.AV && window.AV.lang === 'en';
    function fm(k, v, mono) {
      return '<div class="fm"><span class="k">' + k + '</span><span class="v' + (mono ? ' mono' : '') + '">' + v + '</span></div>';
    }
    return '<div class="folio-meta">' + fm(en ? 'Object' : 'Objeto', L(o.object)) + fm(en ? 'Origin' : 'Origem', L(o.origin)) + fm(en ? 'Date' : 'Data', o.date, true) + fm(en ? 'Maker' : 'Autoria', L(o.maker)) + fm(en ? 'Shelfmark' : 'Localização', L(o.shelf), true) + fm(en ? 'Status' : 'Estado', L(o.status)) + '</div>';
  }
  function render() {
    var root = document.getElementById('obj');
    var o = window.AVContent.object(SLUG);
    var en = window.AV && window.AV.lang === 'en';
    document.documentElement.lang = en ? 'en' : 'pt';
    if (!o) {
      root.innerHTML = '<div class="ed-head"><p class="kicker">Atlas</p><h1 class="ed-title">' + (en ? 'object not found' : 'objeto não encontrado') + '</h1>' + '<p class="dek">' + (en ? 'This dossier is not yet in the archive.' : 'Este dossiê ainda não está no arquivo.') + ' <a class="tl" href="index.html">' + (en ? 'Back to the Atlas' : 'Voltar ao Atlas') + ' →</a></p></div>';
      return;
    }
    document.title = L(o.title) + ' · Atlas · ana vanzin';
    root.innerHTML = '<a class="ed-back" href="index.html"><span class="ar">←</span><span>' + (en ? 'Atlas' : 'Atlas') + '</span></a>' + '<div class="ed-head">' + '<p class="kicker rise">' + (en ? 'Atlas · object dossier' : 'Atlas · dossiê de objeto') + '</p>' + '<h1 class="ed-title rise" style="--d:.06s">' + L(o.title) + '</h1>' + '<p class="dek rise" style="--d:.12s">' + L(o.summary) + '</p>' + '<div class="oc-ths rise" style="--d:.16s">' + themeChips(o.themes) + '</div>' + metaBlock(o) + '</div>' + '<section class="oc-fig">' + figure(o) + '</section>' + '<section class="oc-body"><div class="prose">' + notesBlock(o.notes) + '<p class="lede">' + L(o.summary) + '</p>' + (o.essay ? '<p>' + (en ? 'Read the essay that follows this object: ' : 'Leia o ensaio que acompanha este objeto: ') + '<a class="tl" href="../' + o.essay.href + '">' + L(o.essay.label) + ' <span class="ar">→</span></a></p>' : '') + '</div></section>' + symbolRow(o.symbols) + sourcesBlock(o.sources) + relatedBlock(o);

    // labels that need lang
    root.querySelectorAll('[data-k="symbols"]').forEach(function (el) {
      el.textContent = en ? 'Symbols in this object' : 'Símbolos neste objeto';
    });
  }
  window.addEventListener('av:lang', render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);else render();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_research_wing/reference/object.js", error: String((e && e.message) || e) }); }

// design_handoff_research_wing/reference/theme-filter.js
try { (() => {
/* ana vanzin — reusable theme filter.
   A row of pill buttons built from AVContent.THEMES (+ "all").
   Filters any list of elements carrying data-themes="slug slug".
   Bilingual: re-labels on av:lang. Square-corner-free pills follow
   the editorial grammar (see .tfilter in editorial.css).

   window.AVThemeFilter.mount(containerEl, { base, onChange })
   window.AVThemeFilter.apply(listEl, slug)   // 'all' shows everything */
(function () {
  var L = function (o) {
    return window.AVContent.L(o);
  };
  function mount(container, opts) {
    opts = opts || {};
    var active = 'all';
    function render() {
      var en = window.AV && window.AV.lang === 'en';
      var btns = [];
      btns.push(btn('all', '', en ? 'all' : 'tudo'));
      window.AVContent.THEMES.forEach(function (t) {
        btns.push(btn(t.slug, t.n, L(t.name)));
      });
      container.innerHTML = btns.join('');
      container.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', b.dataset.slug === active ? 'true' : 'false');
        b.addEventListener('click', function () {
          active = b.dataset.slug;
          container.querySelectorAll('button').forEach(function (x) {
            x.setAttribute('aria-pressed', x.dataset.slug === active ? 'true' : 'false');
          });
          if (opts.onChange) opts.onChange(active);
        });
      });
    }
    function btn(slug, n, label) {
      return '<button type="button" data-slug="' + slug + '">' + (n ? '<span class="n">' + n + '</span>' : '') + label + '</button>';
    }
    render();
    window.addEventListener('av:lang', render);
    return {
      get active() {
        return active;
      }
    };
  }
  function apply(listEl, slug) {
    if (!listEl) return;
    Array.prototype.forEach.call(listEl.children, function (el) {
      var t = el.getAttribute('data-themes');
      var show = slug === 'all' || t && t.split(/\s+/).indexOf(slug) >= 0;
      el.classList.toggle('is-hidden', !show);
      if (el.classList.contains('rr-shelf')) return; // shelves use .is-hidden (display:none via CSS)
      el.style.display = show ? '' : 'none';
    });
  }
  window.AVThemeFilter = {
    mount: mount,
    apply: apply
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_research_wing/reference/theme-filter.js", error: String((e && e.message) || e) }); }

// desktop-app.js
try { (() => {
/*IIFE*/(function () {
  /* ana vanzin desktop — window manager, menu bar, dock, boot. */
  const {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  } = window.avapp;
  const {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  } = window.avapp;
  const REG = {
    sobre: {
      title: {
        pt: 'sobre.txt',
        en: 'about.txt'
      },
      w: 440,
      Body: WSobre
    },
    tese: {
      title: {
        pt: 'tese',
        en: 'thesis'
      },
      w: 560,
      Body: WTese
    },
    publicacoes: {
      title: {
        pt: 'publicações',
        en: 'publications'
      },
      w: 520,
      Body: WPublicacoes
    },
    ius: {
      title: {
        pt: 'ius gentium',
        en: 'ius gentium'
      },
      w: 440,
      Body: WIus
    },
    curriculo: {
      title: {
        pt: 'currículo',
        en: 'curriculum'
      },
      w: 460,
      Body: WCv
    },
    contato: {
      title: {
        pt: 'contato',
        en: 'contact'
      },
      w: 420,
      Body: WContato
    },
    justitia: {
      title: {
        pt: 'justitia.png',
        en: 'justitia.png'
      },
      w: 360,
      Body: WJustitia
    },
    vo: {
      title: {
        pt: 'vó.jpg',
        en: 'grandma.jpg'
      },
      w: 360,
      Body: WVo
    }
  };
  const regTitle = (id, lang) => REG[id].title[lang] || REG[id].title.pt;
  const DESK_ICONS = [{
    id: 'sobre',
    label: {
      pt: 'sobre.txt',
      en: 'about.txt'
    },
    Icon: DocIcon
  }, {
    id: 'tese',
    label: {
      pt: 'tese',
      en: 'thesis'
    },
    Icon: FolderIcon
  }, {
    id: 'conceitos',
    label: {
      pt: 'conceitos',
      en: 'concepts'
    },
    Icon: SealIcon
  }, {
    id: 'iconocracia',
    label: {
      pt: 'iconocracia',
      en: 'iconocracia'
    },
    Icon: AtlasIcon
  }, {
    id: 'quotes',
    label: {
      pt: 'citações',
      en: 'quotes'
    },
    Icon: QuoteIcon
  }, {
    id: 'trabalhos',
    label: {
      pt: 'trabalhos',
      en: 'works'
    },
    Icon: WorksIcon
  }, {
    id: 'publicacoes',
    label: {
      pt: 'publicações',
      en: 'publications'
    },
    Icon: FolderIcon
  }, {
    id: 'ius',
    label: {
      pt: 'ius gentium',
      en: 'ius gentium'
    },
    Icon: GroupIcon
  }, {
    id: 'curriculo',
    label: {
      pt: 'currículo',
      en: 'curriculum'
    },
    Icon: DocIcon
  }, {
    id: 'justitia',
    label: {
      pt: 'justitia.png',
      en: 'justitia.png'
    },
    Icon: ImageIcon
  }, {
    id: 'vo',
    label: {
      pt: 'vó.jpg',
      en: 'grandma.jpg'
    },
    Icon: ImageIcon
  }, {
    id: 'contato',
    label: {
      pt: 'contato',
      en: 'contact'
    },
    Icon: MailIcon
  }];
  const MENUS = ['sobre', 'tese', 'conceitos', 'publicacoes', 'ius', 'contato'];
  const MENU_LABEL = {
    pt: {
      sobre: 'Sobre',
      tese: 'Tese',
      conceitos: 'Conceitos',
      publicacoes: 'Perfis',
      ius: 'Ius Gentium',
      contato: 'Contato'
    },
    en: {
      sobre: 'About',
      tese: 'Thesis',
      conceitos: 'Concepts',
      publicacoes: 'Profiles',
      ius: 'Ius Gentium',
      contato: 'Contact'
    }
  };
  const UI = {
    pt: {
      welcome: 'bem-vinda',
      tagline: 'direito & iconografia',
      enter: 'entrar →',
      dockHint: 'clique duplo · arraste pela barra',
      dockHintM: 'toque · arraste a barra',
      clk: 'pt-BR'
    },
    en: {
      welcome: 'welcome',
      tagline: 'law & iconography',
      enter: 'enter →',
      dockHint: 'double-click · drag the title bar',
      dockHintM: 'tap · drag the bar',
      clk: 'en-GB'
    }
  };
  const winW = id => Math.min(REG[id].w, (typeof window !== 'undefined' ? window.innerWidth : 1280) - 24);
  function mobForced() {
    try {
      return localStorage.getItem('av_forcemob') === '1' || /[?&]mob/.test(location.search);
    } catch (e) {
      return false;
    }
  }
  function useIsMobile() {
    const [m, setM] = React.useState(() => typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches));
    React.useEffect(() => {
      const mq = window.matchMedia('(max-width: 760px)');
      const fn = () => setM(mobForced() || mq.matches);
      mq.addEventListener('change', fn);
      return () => mq.removeEventListener('change', fn);
    }, []);
    return m;
  }

  /* ---- striped (System-7) title bar ---- */
  function ChromeBox({
    children,
    active,
    onClick,
    label
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseDown: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      "aria-label": label,
      style: {
        width: 15,
        height: 15,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4,
        lineHeight: 0
      }
    }, children);
  }
  function TitleBar({
    title,
    active,
    onClose,
    onMin,
    onDown,
    draggable = true
  }) {
    const stripes = active ? 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)' : 'none';
    const flank = {
      flex: 1,
      height: 11,
      alignSelf: 'center',
      background: stripes,
      opacity: active ? 0.9 : 0,
      minWidth: 12
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: draggable ? onDown : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        height: draggable ? 30 : 38,
        padding: '0 9px',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        cursor: draggable ? 'grab' : 'default',
        userSelect: 'none',
        touchAction: 'none'
      }
    }, /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onClose,
      label: "Fechar"
    }), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        color: active ? 'var(--ink)' : 'var(--text-faint)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onMin,
      label: "Minimizar"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 1.5,
        background: 'var(--ink)'
      }
    })));
  }
  function WindowFrame({
    win,
    active,
    onClose,
    onMin,
    onFocus,
    onDragStart,
    lang,
    isMobile
  }) {
    const reg = REG[win.id];
    const Body = reg.Body;
    const frame = isMobile ? {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '100%',
      zIndex: 9500 + win.z,
      background: 'var(--paper)',
      borderTop: '1px solid var(--ink)',
      boxShadow: '0 -6px 0 0 var(--ink)'
    } : {
      position: 'absolute',
      left: win.x,
      top: win.y,
      width: winW(win.id),
      zIndex: win.z,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      boxShadow: active ? '5px 5px 0 0 var(--ink)' : '3px 3px 0 0 var(--ink-50)'
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => onFocus(win.id),
      style: frame
    }, isMobile && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '7px 0 2px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 4,
        background: 'var(--ink-30, rgba(0,0,0,0.25))',
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement(TitleBar, {
      title: regTitle(win.id, lang),
      active: active || isMobile,
      onClose: () => onClose(win.id),
      onMin: () => onMin(win.id),
      onDown: e => onDragStart(e, win.id),
      draggable: !isMobile
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: win.id === 'justitia' ? 12 : 22,
        maxHeight: isMobile ? '64vh' : '58vh',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Body, {
      lang: lang
    })));
  }
  function Clock({
    lang
  }) {
    const [t, setT] = React.useState('');
    React.useEffect(() => {
      const tick = () => setT(new Date().toLocaleTimeString(UI[lang].clk, {
        hour: '2-digit',
        minute: '2-digit'
      }));
      tick();
      const i = setInterval(tick, 15000);
      return () => clearInterval(i);
    }, [lang]);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        letterSpacing: '0.12em',
        fontSize: 13,
        color: 'var(--gold)'
      }
    }, t);
  }
  function Boot({
    onEnter,
    lang
  }) {
    const u = UI[lang];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
        textAlign: 'center',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(420px, 86vw)',
        border: '1px solid var(--ink)',
        boxShadow: '5px 5px 0 0 var(--ink)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '0 9px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        display: 'inline-block',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: 'nowrap'
      }
    }, u.welcome), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '34px 28px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      style: {
        height: 150,
        imageRendering: 'pixelated'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 1,
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        height: 1,
        background: 'var(--rubric)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.22em',
        fontSize: 11,
        color: 'var(--gold)'
      }
    }, u.tagline), /*#__PURE__*/React.createElement("button", {
      onClick: onEnter,
      style: {
        marginTop: 12,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        fontSize: 13,
        padding: '11px 26px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, u.enter))));
  }
  function Desktop() {
    const [booted, setBooted] = React.useState(() => {
      try {
        return localStorage.getItem('av_booted') === '1';
      } catch (e) {
        return false;
      }
    });
    const [wins, setWins] = React.useState(() => {
      const mob = typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches);
      return mob ? [] : [{
        id: 'tese',
        x: 250,
        y: 92,
        z: 2,
        min: false
      }, {
        id: 'justitia',
        x: 760,
        y: 150,
        z: 1,
        min: false
      }];
    });
    const [zTop, setZTop] = React.useState(3);
    const [sel, setSel] = React.useState(null);
    const drag = React.useRef(null);
    const isMobile = useIsMobile();
    const [lang, setLang] = React.useState(() => {
      try {
        const s = localStorage.getItem('av_lang');
        return s === 'pt' || s === 'en' ? s : 'pt';
      } catch (e) {
        return 'pt';
      }
    });
    const setLangP = l => {
      setLang(l);
      try {
        localStorage.setItem('av_lang', l);
      } catch (e) {}
    };
    React.useEffect(() => {
      document.documentElement.lang = lang;
    }, [lang]);
    const enter = () => {
      setBooted(true);
      try {
        localStorage.setItem('av_booted', '1');
      } catch (e) {}
    };
    const focus = id => setWins(ws => {
      const z = zTop;
      setZTop(p => p + 1);
      return ws.map(w => w.id === id ? {
        ...w,
        z,
        min: false
      } : w);
    });
    const open = id => {
      if (id === 'sobre') {
        window.location.href = 'readme.html';
        return;
      }
      if (id === 'conceitos') {
        window.location.href = 'conceitos.html';
        return;
      }
      if (id === 'iconocracia') {
        window.location.href = 'iconocracia/';
        return;
      }
      if (id === 'quotes') {
        window.location.href = 'quotes/';
        return;
      }
      if (id === 'trabalhos') {
        window.location.href = 'trabalhos.html';
        return;
      }
      setSel(id);
      setWins(ws => {
        const z = zTop;
        setZTop(p => p + 1);
        if (ws.some(w => w.id === id)) return ws.map(w => w.id === id ? {
          ...w,
          z,
          min: false
        } : w);
        const n = ws.filter(w => !w.min).length;
        const x = Math.min(160 + n * 32, Math.max(12, window.innerWidth - winW(id) - 16));
        return [...ws, {
          id,
          x,
          y: 78 + n * 28,
          z,
          min: false
        }];
      });
    };
    const close = id => setWins(ws => ws.filter(w => w.id !== id));
    const minimize = id => setWins(ws => ws.map(w => w.id === id ? {
      ...w,
      min: true
    } : w));
    const dragStart = (e, id) => {
      focus(id);
      const w = wins.find(x => x.id === id);
      drag.current = {
        id,
        dx: e.clientX - w.x,
        dy: e.clientY - w.y
      };
    };
    React.useEffect(() => {
      const move = e => {
        if (!drag.current) return;
        const {
          id,
          dx,
          dy
        } = drag.current;
        setWins(ws => ws.map(w => w.id === id ? {
          ...w,
          x: Math.max(0, Math.min(e.clientX - dx, window.innerWidth - 60)),
          y: Math.max(34, Math.min(e.clientY - dy, window.innerHeight - 60))
        } : w));
      };
      const up = () => {
        drag.current = null;
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      return () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
    }, []);
    const visible = wins.filter(w => !w.min);
    const topId = visible.reduce((a, w) => !a || w.z > a.z ? w : a, null)?.id;
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => setSel(null),
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--paper)',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: '4%',
        bottom: 40,
        height: '80%',
        width: 'auto',
        imageRendering: 'pixelated',
        opacity: 0.15,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 34,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 16px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SealIcon, {
      size: 20
    }), !isMobile && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'var(--rule-hairline)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? 13 : 16,
        overflowX: isMobile ? 'auto' : 'hidden',
        flex: isMobile ? 1 : '0 1 auto',
        minWidth: 0
      }
    }, MENUS.map(id => /*#__PURE__*/React.createElement("button", {
      key: id,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => open(id),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 13.5,
        color: 'var(--ink)',
        padding: '4px 2px',
        whiteSpace: 'nowrap',
        borderBottom: topId === id ? '1.5px solid var(--rubric)' : '1.5px solid transparent'
      }
    }, MENU_LABEL[lang][id]))), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        border: '1px solid var(--ink)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, ['pt', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
      key: l,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => setLangP(l),
      style: {
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: '0.12em',
        padding: '2px 9px',
        lineHeight: 1.6,
        background: lang === l ? 'var(--ink)' : 'var(--paper)',
        color: lang === l ? 'var(--paper)' : 'var(--text-faint)'
      }
    }, l.toUpperCase()))), !isMobile && /*#__PURE__*/React.createElement(Clock, {
      lang: lang
    }))), /*#__PURE__*/React.createElement("div", {
      style: isMobile ? {
        position: 'absolute',
        top: 42,
        left: 0,
        right: 0,
        bottom: 42,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(86px, 1fr))',
        gap: 16,
        padding: '20px 14px 28px',
        zIndex: 1,
        alignContent: 'start'
      } : {
        position: 'absolute',
        top: 50,
        left: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        zIndex: 1
      }
    }, DESK_ICONS.map(({
      id,
      label,
      Icon
    }) => {
      const active = sel === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onPointerDown: e => {
          e.stopPropagation();
          setSel(id);
        },
        onDoubleClick: () => open(id),
        onClick: e => {
          if (isMobile || e.detail === 0) open(id);
        },
        style: {
          background: 'none',
          border: 0,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          width: isMobile ? 'auto' : 84,
          padding: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: isMobile ? {
          width: '100%',
          height: 76,
          background: 'var(--paper)',
          border: '1px solid var(--ink)',
          borderRadius: 3,
          boxShadow: active ? '3px 3px 0 0 var(--rubric)' : '2px 2px 0 0 var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: -3,
          transition: 'box-shadow .1s ease'
        } : {
          padding: 3,
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: 1
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        size: isMobile ? 46 : 44
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          lineHeight: 1.2,
          textAlign: 'center',
          background: active ? 'var(--rubric)' : 'transparent',
          color: active ? 'var(--paper)' : 'var(--ink)',
          padding: '1px 5px'
        }
      }, label[lang]));
    })), isMobile && visible.length > 0 && /*#__PURE__*/React.createElement("div", {
      onPointerDown: e => {
        e.stopPropagation();
        minimize(topId);
      },
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 9400,
        background: 'rgba(28,25,20,0.34)'
      }
    }), visible.map(w => /*#__PURE__*/React.createElement(WindowFrame, {
      key: w.id,
      win: w,
      active: topId === w.id,
      onClose: close,
      onMin: minimize,
      onFocus: focus,
      onDragStart: dragStart,
      lang: lang,
      isMobile: isMobile
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 36,
        background: 'var(--ink)',
        color: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 12px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.26em',
        fontSize: 11,
        color: 'var(--gold-2)',
        whiteSpace: 'nowrap'
      }
    }, "anavanzin.com"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'rgba(242,234,217,0.25)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden'
      }
    }, wins.map(w => {
      const on = !w.min && topId === w.id;
      return /*#__PURE__*/React.createElement("button", {
        key: w.id,
        onPointerDown: e => e.stopPropagation(),
        onClick: () => w.min ? focus(w.id) : topId === w.id ? minimize(w.id) : focus(w.id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: on ? 'var(--paper)' : 'transparent',
          color: on ? 'var(--ink)' : 'var(--paper)',
          border: '1px solid ' + (on ? 'var(--paper)' : 'rgba(242,234,217,0.35)'),
          borderRadius: 0,
          padding: '3px 10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 12.5,
          whiteSpace: 'nowrap',
          opacity: w.min ? 0.6 : 1
        }
      }, regTitle(w.id, lang));
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 11,
        color: 'rgba(242,234,217,0.5)',
        whiteSpace: 'nowrap'
      }
    }, UI[lang][isMobile ? 'dockHintM' : 'dockHint'])), !booted && /*#__PURE__*/React.createElement(Boot, {
      onEnter: enter,
      lang: lang
    }));
  }
  (window.avapp = window.avapp || {}).Desktop = Desktop;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "desktop-app.js", error: String((e && e.message) || e) }); }

// hifi/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "hifi/image-slot.js", error: String((e && e.message) || e) }); }

// icons.js
try { (() => {
/*IIFE*/(function () {
  /* Retro desktop icons for the ana vanzin OS — crisp, pixel-leaning, brand palette.
     Exposed on window for sibling babel scripts. */

  const _crisp = {
    shapeRendering: 'crispEdges'
  };
  function FolderIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "11",
      width: "22",
      height: "8",
      fill: "var(--gold)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "26",
      fill: "var(--gold-2)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "22",
      x2: "44",
      y2: "22",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }));
  }
  function DocIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 4 H32 L39 11 V44 H11 Z",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 4 V11 H39 Z",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "20",
      x2: "34",
      y2: "20",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "26",
      x2: "34",
      y2: "26",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "31",
      x2: "34",
      y2: "31",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "36",
      x2: "28",
      y2: "36",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function MailIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "12",
      width: "38",
      height: "26",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 13 L24 28 L43 13",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 37 L19 24 M43 37 L29 24",
      fill: "none",
      stroke: "var(--ink-50)",
      strokeWidth: "1.2"
    }));
  }
  function GroupIcon({
    size = 46
  }) {
    /* Ius Gentium — a stacked-rings device echoing the seal */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "18",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "13",
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "22",
      r: "5",
      fill: "var(--rubric)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "22",
      r: "5",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 34 q6 -8 13 -8 q7 0 13 8",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }));
  }
  function ImageIcon({
    size = 46,
    src = 'assets/pixel-justitia.png'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: 'var(--paper)',
        border: '1.6px solid var(--ink)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        height: '112%',
        width: 'auto',
        imageRendering: 'pixelated',
        marginBottom: '-4%'
      }
    }));
  }
  function SealIcon({
    size = 46,
    src = 'assets/sun-seal.svg'
  }) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      width: size,
      height: size,
      style: {
        display: 'block'
      }
    });
  }
  function QuoteIcon({
    size = 46
  }) {
    /* Citações — open quotation marks over a citation rule */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "32",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "14",
      x2: "42",
      y2: "14",
      stroke: "var(--ink)",
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      y1: "35",
      x2: "35",
      y2: "35",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function AtlasIcon({
    size = 46
  }) {
    /* ICONOCRACIA atlas — a Warburg mounting board with specimen tiles */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "6",
      width: "38",
      height: "36",
      fill: "var(--ink)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--gold-2)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper-deep)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "none",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }));
  }
  function WorksIcon({
    size = 46
  }) {
    /* Trabalhos — a dossier of stacked sheets with a rubric clip */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "26",
      height: "31",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "7",
      width: "26",
      height: "31",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "4",
      width: "8",
      height: "5",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "17",
      x2: "34",
      y2: "17",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "22",
      x2: "34",
      y2: "22",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "27",
      x2: "30",
      y2: "27",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "32",
      x2: "34",
      y2: "32",
      stroke: "var(--gold)",
      strokeWidth: "1.6"
    }));
  }
  function CloseBox({
    active
  }) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'inline-block',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4
      }
    });
  }
  Object.assign(window.avapp = window.avapp || {}, {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons.js", error: String((e && e.message) || e) }); }

// manifesto/app.jsx
try { (() => {
// Manifesto da Iconocracia — React app: theme engine, slides, navigation,
// fullscreen, speaker notes, print-to-PDF, presentation mode, Tweaks.
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useCallback
  } = React;
  const D = window.ManifestoData;

  // ── i18n ──────────────────────────────────────────────────────────────
  const L = (o, lang) => o && typeof o === "object" && ("pt" in o || "en" in o) ? o[lang] ?? o.pt : o;

  // ── theme engine ──────────────────────────────────────────────────────
  const ACCENTS = {
    rubric: "#9B2C1C",
    amethyst: "#8A5FA8",
    gold: "#9C7C3D",
    green: "#2A7A5A",
    plate: "#1D2548"
  };
  function themeVars(tone, accent, scale) {
    const A = ACCENTS[accent] || accent || ACCENTS.rubric;
    const light = {
      ground: "#F2EAD9",
      paper: "#F2EAD9",
      panel: "#F8F2E4",
      ink: "#211B16",
      ink70: "#4A413A",
      ink50: "#7A6E62",
      ink15: "rgba(33,27,22,.14)",
      hair: "rgba(33,27,22,.22)",
      dot: "rgba(33,27,22,.13)"
    };
    const cabinet = {
      ground: "#171D38",
      paper: "#171D38",
      panel: "#1F274A",
      ink: "#EFE6D2",
      ink70: "#C7BCA6",
      ink50: "#8E866F",
      ink15: "rgba(239,230,210,.14)",
      hair: "rgba(212,168,94,.34)",
      dot: "rgba(239,230,210,.16)"
    };
    const t = tone === "cabinet" ? cabinet : light;
    return {
      "--m-ground": t.ground,
      "--m-paper": t.paper,
      "--m-panel": t.panel,
      "--m-ink": t.ink,
      "--m-ink-70": t.ink70,
      "--m-ink-50": t.ink50,
      "--m-ink-15": t.ink15,
      "--m-hair": t.hair,
      "--m-dot": t.dot,
      "--m-accent": A,
      "--m-scale": String(scale)
    };
  }

  // ── one slide ─────────────────────────────────────────────────────────
  function Slide({
    s,
    lang,
    dir,
    idx,
    showFolio,
    riscoW,
    printing
  }) {
    const cls = ["m-slide", "m-kind-" + s.kind, printing ? "" : "on", dir ? "dir-" + dir : ""].join(" ");
    return /*#__PURE__*/React.createElement("section", {
      className: cls,
      "data-screen-label": "manifesto " + s.folio,
      key: idx
    }, showFolio && /*#__PURE__*/React.createElement("span", {
      className: "m-folio"
    }, s.folio), s.kind === "cover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "m-eb"
    }, L(D.meta.kicker, lang)), /*#__PURE__*/React.createElement("h1", {
      className: "m-display"
    }, D.meta.title, /*#__PURE__*/React.createElement("span", {
      className: "m-band",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      className: "m-sub"
    }, L(D.meta.subtitle, lang))), s.kind === "phrase" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "m-phrase",
      dangerouslySetInnerHTML: {
        __html: L(s.phrase, lang)
      }
    }), s.risco && /*#__PURE__*/React.createElement("div", {
      className: "m-risco",
      "aria-hidden": "true",
      style: {
        "--risco-w": riscoW + "px"
      }
    }), s.sub && /*#__PURE__*/React.createElement("p", {
      className: "m-sub"
    }, L(s.sub, lang))), s.kind === "close" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "m-phrase sm",
      dangerouslySetInnerHTML: {
        __html: L(s.phrase, lang)
      }
    }), s.sub && /*#__PURE__*/React.createElement("p", {
      className: "m-sub"
    }, L(s.sub, lang)), /*#__PURE__*/React.createElement("div", {
      className: "m-sign"
    }, /*#__PURE__*/React.createElement("span", {
      className: "m-rule",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "m-name"
    }, D.meta.author), /*#__PURE__*/React.createElement("p", {
      className: "m-role"
    }, L(D.meta.role, lang)))));
  }
  const TWEAK_DEFAULTS = {
    tone: "claro",
    accent: "rubric",
    scale: 1.0,
    speed: "container",
    risco: 120,
    folio: true,
    dots: true,
    grain: true,
    autoplay: false,
    interval: 6,
    coverTitle: ""
  };
  const SPEEDS = {
    lenta: 900,
    container: 600,
    rápida: 320
  };
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const N = D.slides.length;
    const [i, setI] = useState(() => {
      try {
        const s = parseInt(localStorage.getItem("av_manifesto_i"));
        if (!isNaN(s) && s >= 0 && s < N) return s;
      } catch (e) {}
      return 0;
    });
    const [lang, setLang] = useState(() => {
      try {
        return localStorage.getItem("av_lang") === "en" ? "en" : "pt";
      } catch (e) {
        return "pt";
      }
    });
    const [dir, setDir] = useState(null);
    const [notes, setNotes] = useState(false);
    const [fs, setFs] = useState(false);
    const [printing, setPrinting] = useState(false);
    const liveTitle = (t.coverTitle || "").trim();
    if (liveTitle) D.meta.title = liveTitle;
    const go = useCallback(n => {
      setI(cur => {
        const next = Math.max(0, Math.min(N - 1, n));
        setDir(next > cur ? "next" : next < cur ? "prev" : null);
        try {
          localStorage.setItem("av_manifesto_i", String(next));
        } catch (e) {}
        return next;
      });
    }, [N]);

    // persist lang + broadcast
    useEffect(() => {
      try {
        localStorage.setItem("av_lang", lang);
      } catch (e) {}
      document.documentElement.lang = lang;
      window.dispatchEvent(new CustomEvent("av:lang", {
        detail: {
          lang
        }
      }));
    }, [lang]);

    // keyboard
    useEffect(() => {
      const onKey = e => {
        if (e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          go(i + 1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(i - 1);
        } else if (e.key === "Home") go(0);else if (e.key === "End") go(N - 1);else if (e.key.toLowerCase() === "n") setNotes(v => !v);else if (e.key.toLowerCase() === "f") toggleFs();else if (e.key === "Escape") setNotes(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [i, go, N]);

    // autoplay / presentation mode
    useEffect(() => {
      if (!t.autoplay || printing) return;
      const ms = Math.max(2, Number(t.interval) || 6) * 1000;
      const id = setTimeout(() => go(i >= N - 1 ? 0 : i + 1), ms);
      return () => clearTimeout(id);
    }, [t.autoplay, t.interval, i, printing, go, N]);

    // fullscreen
    const toggleFs = useCallback(() => {
      const el = document.documentElement;
      if (!document.fullscreenElement) {
        (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || function () {}).call(document);
      }
    }, []);
    useEffect(() => {
      const h = () => setFs(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", h);
      return () => document.removeEventListener("fullscreenchange", h);
    }, []);

    // print: reveal all slides during print, restore after
    useEffect(() => {
      const before = () => setPrinting(true);
      const after = () => setPrinting(false);
      window.addEventListener("beforeprint", before);
      window.addEventListener("afterprint", after);
      return () => {
        window.removeEventListener("beforeprint", before);
        window.removeEventListener("afterprint", after);
      };
    }, []);
    const doPrint = () => {
      setPrinting(true);
      setTimeout(() => {
        window.print();
      }, 60);
    };
    const speedMs = SPEEDS[t.speed] ?? 600;
    const style = {
      ...themeVars(t.tone, t.accent, t.scale),
      "--m-speed": speedMs + "ms"
    };
    const rootCls = ["m-root", t.grain ? "grain" : "", printing ? "printing" : "", t.tone === "cabinet" ? "cabinet" : ""].join(" ");
    const cur = D.slides[i];
    return /*#__PURE__*/React.createElement("div", {
      className: rootCls,
      style: style
    }, /*#__PURE__*/React.createElement("header", {
      className: "m-top"
    }, /*#__PURE__*/React.createElement("a", {
      className: "m-brand",
      href: "../index.html",
      title: "\u2190 voltar \xE0 mesa"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../assets/sun-seal.svg",
      alt: ""
    }), /*#__PURE__*/React.createElement("b", null, "ana vanzin")), /*#__PURE__*/React.createElement("span", {
      className: "m-word"
    }, lang === "en" ? "manifesto · the core" : "manifesto · o núcleo"), /*#__PURE__*/React.createElement("span", {
      className: "m-tools"
    }, /*#__PURE__*/React.createElement("button", {
      className: "m-lang" + (lang === "pt" ? " on" : ""),
      onClick: () => setLang("pt"),
      "aria-pressed": lang === "pt"
    }, "PT"), /*#__PURE__*/React.createElement("button", {
      className: "m-lang" + (lang === "en" ? " on" : ""),
      onClick: () => setLang("en"),
      "aria-pressed": lang === "en"
    }, "EN"), /*#__PURE__*/React.createElement("span", {
      className: "m-sep"
    }), /*#__PURE__*/React.createElement("button", {
      className: "m-ic" + (notes ? " on" : ""),
      onClick: () => setNotes(v => !v),
      title: "Notas do orador (N)",
      "aria-label": "Notas"
    }, "\u2767"), /*#__PURE__*/React.createElement("button", {
      className: "m-ic",
      onClick: doPrint,
      title: "Imprimir / PDF",
      "aria-label": "Imprimir"
    }, "\u2399"), /*#__PURE__*/React.createElement("button", {
      className: "m-ic" + (fs ? " on" : ""),
      onClick: toggleFs,
      title: "Tela cheia (F)",
      "aria-label": "Tela cheia"
    }, "\u2922"))), !printing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "m-zone l",
      onClick: () => go(i - 1),
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "m-zone r",
      onClick: () => go(i + 1),
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-deck"
    }, printing ? D.slides.map((s, n) => /*#__PURE__*/React.createElement(Slide, {
      key: n,
      s: s,
      idx: n,
      lang: lang,
      showFolio: t.folio,
      riscoW: t.risco,
      printing: true
    })) : /*#__PURE__*/React.createElement(Slide, {
      key: i,
      s: cur,
      idx: i,
      lang: lang,
      dir: dir,
      showFolio: t.folio,
      riscoW: t.risco
    })), notes && !printing && /*#__PURE__*/React.createElement("aside", {
      className: "m-notes",
      "aria-label": "Notas do orador"
    }, /*#__PURE__*/React.createElement("p", {
      className: "m-notes-h"
    }, lang === "en" ? "Speaker note" : "Nota do orador", " \xB7 ", /*#__PURE__*/React.createElement("span", null, cur.folio)), /*#__PURE__*/React.createElement("p", {
      className: "m-notes-b"
    }, L(cur.note, lang))), !printing && /*#__PURE__*/React.createElement("nav", {
      className: "m-nav"
    }, /*#__PURE__*/React.createElement("button", {
      className: "m-arw",
      onClick: () => go(i - 1),
      disabled: i === 0,
      "aria-label": "Anterior"
    }, "\u2039"), t.dots && /*#__PURE__*/React.createElement("div", {
      className: "m-dots"
    }, D.slides.map((s, n) => /*#__PURE__*/React.createElement("button", {
      key: n,
      className: "m-dot",
      "aria-current": n === i,
      "aria-label": "slide " + (n + 1),
      onClick: () => go(n)
    }))), /*#__PURE__*/React.createElement("button", {
      className: "m-arw",
      onClick: () => go(i + 1),
      disabled: i === N - 1,
      "aria-label": "Pr\xF3ximo"
    }, "\u203A")), !printing && /*#__PURE__*/React.createElement("div", {
      className: "m-count"
    }, String(i + 1).padStart(2, "0"), " / ", String(N).padStart(2, "0")), /*#__PURE__*/React.createElement(TweaksPanel, {
      title: "Tweaks"
    }, /*#__PURE__*/React.createElement(TweakSection, {
      label: lang === "en" ? "Surface" : "Superfície"
    }, /*#__PURE__*/React.createElement(TweakRadio, {
      label: lang === "en" ? "Tone" : "Tom",
      value: t.tone,
      options: [{
        value: "claro",
        label: lang === "en" ? "paper" : "papel"
      }, {
        value: "cabinet",
        label: lang === "en" ? "cabinet" : "gabinete"
      }],
      onChange: v => setTweak("tone", v)
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: lang === "en" ? "Accent" : "Acento",
      value: t.accent,
      options: ["rubric", "amethyst", "gold", "green", "plate"].map(k => ({
        value: k,
        color: ACCENTS[k]
      })),
      onChange: v => setTweak("accent", v)
    }), /*#__PURE__*/React.createElement(TweakToggle, {
      label: lang === "en" ? "Paper grain" : "Textura de papel",
      value: t.grain,
      onChange: v => setTweak("grain", v)
    })), /*#__PURE__*/React.createElement(TweakSection, {
      label: lang === "en" ? "Type & rhythm" : "Tipo & ritmo"
    }, /*#__PURE__*/React.createElement(TweakSlider, {
      label: lang === "en" ? "Type scale" : "Escala tipográfica",
      value: t.scale,
      min: 0.8,
      max: 1.3,
      step: 0.05,
      onChange: v => setTweak("scale", v)
    }), /*#__PURE__*/React.createElement(TweakSlider, {
      label: lang === "en" ? "Rubric line" : "Linha rubrica",
      value: t.risco,
      min: 0,
      max: 320,
      step: 10,
      unit: "px",
      onChange: v => setTweak("risco", v)
    }), /*#__PURE__*/React.createElement(TweakSelect, {
      label: lang === "en" ? "Transition" : "Transição",
      value: t.speed,
      options: [{
        value: "lenta",
        label: lang === "en" ? "slow" : "lenta"
      }, {
        value: "container",
        label: lang === "en" ? "medium" : "média"
      }, {
        value: "rápida",
        label: lang === "en" ? "fast" : "rápida"
      }],
      onChange: v => setTweak("speed", v)
    })), /*#__PURE__*/React.createElement(TweakSection, {
      label: lang === "en" ? "Chrome" : "Interface"
    }, /*#__PURE__*/React.createElement(TweakToggle, {
      label: lang === "en" ? "Roman folio" : "Folio romano",
      value: t.folio,
      onChange: v => setTweak("folio", v)
    }), /*#__PURE__*/React.createElement(TweakToggle, {
      label: "Dots",
      value: t.dots,
      onChange: v => setTweak("dots", v)
    })), /*#__PURE__*/React.createElement(TweakSection, {
      label: lang === "en" ? "Presentation" : "Apresentação"
    }, /*#__PURE__*/React.createElement(TweakToggle, {
      label: lang === "en" ? "Auto-advance" : "Avanço automático",
      value: t.autoplay,
      onChange: v => setTweak("autoplay", v)
    }), /*#__PURE__*/React.createElement(TweakSlider, {
      label: lang === "en" ? "Interval" : "Intervalo",
      value: t.interval,
      min: 2,
      max: 15,
      step: 1,
      unit: "s",
      onChange: v => setTweak("interval", v)
    }), /*#__PURE__*/React.createElement(TweakText, {
      label: lang === "en" ? "Cover title" : "Título da capa",
      value: t.coverTitle,
      placeholder: "Iconocracia",
      onChange: v => setTweak("coverTitle", v)
    }))));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "manifesto/app.jsx", error: String((e && e.message) || e) }); }

// manifesto/data.js
try { (() => {
// Manifesto da Iconocracia — content spine (bilingual PT/EN).
// window.ManifestoData. Phrases carry <em> on the load-bearing word.
// Distilled from the seven sections of the thesis manifesto.
window.ManifestoData = {
  meta: {
    kicker: {
      pt: "manifesto · o núcleo da tese",
      en: "manifesto · the core of the thesis"
    },
    title: "Iconocracia",
    subtitle: {
      pt: "Alegoria feminina na história da cultura jurídica — sécs. XIX–XX.",
      en: "Feminine allegory in the history of legal culture — 19th–20th c."
    },
    author: "ana vanzin",
    role: {
      pt: "história e iconografia jurídica · PPGD/UFSC",
      en: "legal history & iconography · PPGD/UFSC"
    }
  },
  slides: [{
    kind: "cover",
    folio: "i",
    note: {
      pt: "Abertura. A tese se chama Iconocracia: o poder se exerce — e se legitima — pela imagem. Anunciar o objeto (a alegoria feminina) e o recorte (séculos XIX–XX).",
      en: "Opening. The thesis is called Iconocracia: power is exercised — and legitimised — through the image. Announce the object (feminine allegory) and the period."
    }
  }, {
    kind: "phrase",
    folio: "ii",
    phrase: {
      pt: "Em quase todos esses lugares há uma <em>mulher</em>.",
      en: "In almost all of these places there is a <em>woman</em>."
    },
    sub: {
      pt: "A moeda, o frontispício do código, o selo que valida a sentença, o frontão do tribunal — e quase nenhum lugar onde mulheres reais julgavam.",
      en: "The coin, the frontispiece of the code, the seal that validates the sentence, the courthouse pediment — and almost nowhere real women judged."
    },
    note: {
      pt: "Seção I. O inventário: onde o Estado precisa ser visto, há uma figura feminina; onde se decide, quase nenhuma mulher. A ubiquidade simbólica contra a ausência institucional.",
      en: "Section I. The inventory: where the State must be seen, a feminine figure; where it decides, almost no women. Symbolic ubiquity against institutional absence."
    }
  }, {
    kind: "phrase",
    folio: "iii",
    phrase: {
      pt: "A distância entre a mulher de <em>bronze</em> e a mulher de <em>carne</em>.",
      en: "The distance between the woman of <em>bronze</em> and the woman of <em>flesh</em>."
    },
    sub: {
      pt: "É o ponto de partida desta tese. Trato-a como estrutura — não como acaso de iconografia.",
      en: "This is the starting point of the thesis. I treat it as structure — not as an accident of iconography."
    },
    note: {
      pt: "A tese central. A alegoria feminina não ilustra o direito: trabalha dentro da sua economia de credibilidade. Recuso o diagnóstico de 'mero enfeite'.",
      en: "The central claim. Feminine allegory does not illustrate law: it works inside law's economy of credibility. I reject the 'mere ornament' diagnosis."
    }
  }, {
    kind: "phrase",
    folio: "iv",
    risco: true,
    phrase: {
      pt: "Iconocracia: o governo do <em>visível</em>.",
      en: "Iconocracia: the government of the <em>visible</em>."
    },
    sub: {
      pt: "A ordem em que imagens produzem, estabilizam e — em crise — expõem a legitimidade do Estado e do direito. O sufixo do poder é de propósito.",
      en: "The order in which images produce, stabilise and — in crisis — expose the legitimacy of State and law. The suffix of power is deliberate."
    },
    note: {
      pt: "Seção II. O conceito-chave. Grossi: o direito moderno como mitologia secularizada. Mondzain: a gestão do visível como tecnologia de governo. Codificar e estetizar foram simultâneos.",
      en: "Section II. The key concept. Grossi: modern law as secularised mythology. Mondzain: management of the visible as a technology of government. To codify and to aestheticise happened at once."
    }
  }, {
    kind: "phrase",
    folio: "v",
    phrase: {
      pt: "Feminilidade de <em>Estado</em>.",
      en: "<em>State</em> femininity."
    },
    sub: {
      pt: "A atribuição recorrente de corpo feminino às abstrações da soberania. Não é metáfora amável: é um dispositivo. O que se feminiza parece desinteressado, parece anterior à disputa.",
      en: "The recurrent attribution of a feminine body to the abstractions of sovereignty. Not a kindly metaphor: a device. What is feminised seems disinterested, seems prior to dispute."
    },
    note: {
      pt: "Seção III, primeiro conceito. Datar o conceito é parte do trabalho — sem deslizamento sinonímico. A feminização confere disponibilidade afetiva à abstração.",
      en: "Section III, first concept. Dating the concept is part of the work — no synonymic drift. Feminisation lends affective availability to abstraction."
    }
  }, {
    kind: "phrase",
    folio: "vi",
    risco: true,
    phrase: {
      pt: "Reconhecimento sem <em>reciprocidade</em>.",
      en: "Recognition without <em>reciprocity</em>."
    },
    sub: {
      pt: "A alegoria não representa mulheres — ocupa o lugar delas. Quanto mais o direito se feminiza na imagem, mais excluiu mulheres do exercício. A coincidência é o mecanismo.",
      en: "Allegory does not represent women — it takes their place. The more law feminises in image, the more it excluded women from practice. The coincidence is the mechanism."
    },
    note: {
      pt: "Seção III, segundo conceito — o coração político. Resistir ao presentismo: a força não é denunciar a incoerência, mas mostrar como ela foi produzida, normalizada e às vezes contestada.",
      en: "Section III, second concept — the political heart. Resist presentism: the strength is not to denounce the incoherence but to show how it was produced, normalised, and at times contested."
    }
  }, {
    kind: "phrase",
    folio: "vii",
    phrase: {
      pt: "Brasil, França, <em>Grã-Bretanha</em>.",
      en: "Brazil, France, <em>Great Britain</em>."
    },
    sub: {
      pt: "O Brasil é o caso-âncora: uma iconocracia tropical que importa os repertórios europeus e os reinscreve sobre escravidão e racialização. Marianne e Britannia, por contraste atlântico.",
      en: "Brazil is the anchor case: a tropical iconocracy that imports European repertoires and reinscribes them over slavery and racialisation. Marianne and Britannia, by Atlantic contrast."
    },
    note: {
      pt: "Seção IV. Poucos casos fortes, não panorama. A Efígie da República, a Justiça dos selos, a numismática da Primeira República. O contraste evita a exceção brasileira ingênua e a subordinação eurocêntrica.",
      en: "Section IV. Few strong cases, not a panorama. The Effigy of the Republic, the Justice of stamps, First-Republic numismatics. The contrast avoids both naïve Brazilian exception and Eurocentric subordination."
    }
  }, {
    kind: "phrase",
    folio: "viii",
    risco: true,
    phrase: {
      pt: "Um regime se conhece melhor quando <em>trinca</em>.",
      en: "A regime is known best when it <em>cracks</em>."
    },
    sub: {
      pt: "Vandalização, purificação simbólica, iconoclasmo feminista. Brasília, 8 de janeiro de 2023; México, 2021. Quando se ataca uma alegoria, expõe-se o que ela sustentava em silêncio.",
      en: "Vandalism, symbolic purification, feminist iconoclasm. Brasília, 8 January 2023; Mexico, 2021. To attack an allegory is to expose what it held up in silence."
    },
    note: {
      pt: "Seção V. O conflito de imagens como operador. O material pós-2000 entra sob protocolo — campo de reativação e disputa — sem contaminar a inferência do núcleo histórico.",
      en: "Section V. The conflict of images as operator. Post-2000 material enters under protocol — a field of reactivation and dispute — without contaminating the historical core's inference."
    }
  }, {
    kind: "phrase",
    folio: "ix",
    phrase: {
      pt: "Um <em>corpus</em>, não uma coleção.",
      en: "A <em>corpus</em>, not a collection."
    },
    sub: {
      pt: "Cerca de 280 peças catalogadas, em nove países. Pipeline obrigatório: teoria, codebook, amostragem, piloto, freeze, análise. Nenhuma citação fabricada — toda afirmação volta à fonte.",
      en: "Some 280 catalogued pieces, across nine countries. A mandatory pipeline: theory, codebook, sampling, pilot, freeze, analysis. No fabricated citation — every claim returns to a source."
    },
    note: {
      pt: "Seção VI. Método como ética de pesquisa. O freeze contém a sedução iconográfica — a vontade de provar o argumento em tudo. A imagem que não vira evidência organizada fica como apêndice.",
      en: "Section VI. Method as research ethics. The freeze contains iconographic seduction — the urge to prove the argument in everything. An image that doesn't become organised evidence stays an appendix."
    }
  }, {
    kind: "close",
    folio: "x",
    phrase: {
      pt: "Ler a direção do olhar como <em>decisão de Estado</em>.",
      en: "To read the gaze's direction as a <em>decision of State</em>."
    },
    sub: {
      pt: "A figura na moeda olha para frente, para o lado, para baixo, conforme o regime que a emitiu. Este trabalho começa por aí — e não promete fechar o que a imagem mantém em aberto.",
      en: "The figure on the coin looks ahead, aside, down, according to the regime that issued it. This work begins there — and does not promise to close what the image keeps open."
    },
    note: {
      pt: "Seção VII / encerramento. O que está em jogo: a cultura jurídica não se entende sem sua dimensão icônica; a exclusão articula-se com a exaltação simbólica; formações políticas comparam-se pela gramática visual de legitimação.",
      en: "Section VII / close. What is at stake: legal culture is unintelligible without its iconic dimension; exclusion articulates with symbolic exaltation; polities compare through their visual grammar of legitimation."
    }
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "manifesto/data.js", error: String((e && e.message) || e) }); }

// manifesto/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "manifesto/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// site/atlas/object.js
try { (() => {
/* ana vanzin — Atlas object page renderer (reusable).
   Each atlas/<slug>.html is an identical thin host; the slug is read from
   the filename, and the dossier is rendered from window.AVContent.
   Uses the editorial primitives (editorial.css). Re-renders on av:lang. */
(function () {
  function slugFromPath() {
    var f = (location.pathname.split('/').pop() || 'justitia.html').replace(/\.html?$/, '');
    return f || 'justitia';
  }
  var L = function (o) {
    return window.AVContent.L(o);
  };
  var SLUG = slugFromPath();
  function themeChips(slugs) {
    return slugs.map(function (s) {
      var t = window.AVContent.theme(s);
      if (!t) return '';
      return '<a class="oc-th" href="../sala-de-leitura/#' + t.slug + '">' + L(t.name) + '</a>';
    }).join('');
  }
  function symbolRow(slugs) {
    if (!slugs || !slugs.length) return '';
    var items = slugs.map(function (s) {
      var sy = window.AVContent.SYMBOLS.filter(function (x) {
        return x.slug === s;
      })[0];
      if (!sy) return '';
      return '<a class="oc-sym" href="../iconocracia/desenhe-um-simbolo.html#' + sy.slug + '" title="' + L(sy.gloss) + '">' + '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="' + sy.path + '"/></svg>' + '<span>' + L(sy.name) + '</span></a>';
    }).join('');
    return '<div class="oc-syms"><p class="oc-h"><span data-k="symbols"></span></p><div class="oc-sym-row">' + items + '</div></div>';
  }
  function notesBlock(notes) {
    if (!notes || !notes.length) return '';
    return notes.map(function (n) {
      return '<aside class="mn"><span class="mn-k">' + L(n.k) + '</span><span>' + L(n.t) + '</span></aside>';
    }).join('');
  }
  function sourcesBlock(src) {
    if (!src || !src.length) return '';
    var lis = src.map(function (s) {
      return '<li>' + L(s) + '</li>';
    }).join('');
    var h = window.AV && window.AV.lang === 'en' ? 'Sources &amp; notes' : 'Fontes &amp; notas';
    return '<div class="source-note prose"><p class="sn-h">' + h + '</p><ol>' + lis + '</ol></div>';
  }
  function relatedBlock(o) {
    var en = window.AV && window.AV.lang === 'en';
    var rows = [];
    if (o.essay) rows.push('<li><a href="../' + o.essay.href + '"><span class="ri-k">' + (en ? 'essay' : 'ensaio') + '</span><span class="ri-t">' + L(o.essay.label) + '</span><span class="ar">→</span></a></li>');
    var firstTheme = o.themes[0];
    if (firstTheme) rows.push('<li><a href="../sala-de-leitura/#' + firstTheme + '"><span class="ri-k">' + (en ? 'reading' : 'leitura') + '</span><span class="ri-t">' + (en ? 'In the reading room' : 'Na sala de leitura') + '</span><span class="ar">→</span>' + '<span class="ri-d">' + (en ? 'shelves linked to this object' : 'prateleiras ligadas a este objeto') + '</span></a></li>');
    rows.push('<li><a href="index.html"><span class="ri-k">' + (en ? 'atlas' : 'atlas') + '</span><span class="ri-t">' + (en ? 'All objects' : 'Todos os objetos') + '</span><span class="ar">→</span></a></li>');
    return '<nav class="related"><p class="rel-h">' + (en ? 'Research trail' : 'Trilha de pesquisa') + '</p><ul>' + rows.join('') + '</ul></nav>';
  }
  function figure(o) {
    var inner;
    if (o.img) {
      inner = '<img src="../' + o.img + '" alt="' + L(o.caption) + '" loading="lazy">';
    } else {
      inner = '<div class="ph tall"><span class="ph-lbl">' + L(o.caption) + '</span></div>';
    }
    return '<figure class="ed-fig"><div class="frame">' + inner + '</div>' + '<figcaption><span class="cap">' + L(o.caption) + '</span>' + '<span class="src">' + L(o.origin) + ', ' + o.date + ' · ' + L(o.rights) + '</span></figcaption></figure>';
  }
  function metaBlock(o) {
    var en = window.AV && window.AV.lang === 'en';
    function fm(k, v, mono) {
      return '<div class="fm"><span class="k">' + k + '</span><span class="v' + (mono ? ' mono' : '') + '">' + v + '</span></div>';
    }
    return '<div class="folio-meta">' + fm(en ? 'Object' : 'Objeto', L(o.object)) + fm(en ? 'Origin' : 'Origem', L(o.origin)) + fm(en ? 'Date' : 'Data', o.date, true) + fm(en ? 'Maker' : 'Autoria', L(o.maker)) + fm(en ? 'Shelfmark' : 'Localização', L(o.shelf), true) + fm(en ? 'Status' : 'Estado', L(o.status)) + '</div>';
  }
  function render() {
    var root = document.getElementById('obj');
    var o = window.AVContent.object(SLUG);
    var en = window.AV && window.AV.lang === 'en';
    document.documentElement.lang = en ? 'en' : 'pt';
    if (!o) {
      root.innerHTML = '<div class="ed-head"><p class="kicker">Atlas</p><h1 class="ed-title">' + (en ? 'object not found' : 'objeto não encontrado') + '</h1>' + '<p class="dek">' + (en ? 'This dossier is not yet in the archive.' : 'Este dossiê ainda não está no arquivo.') + ' <a class="tl" href="index.html">' + (en ? 'Back to the Atlas' : 'Voltar ao Atlas') + ' →</a></p></div>';
      return;
    }
    document.title = L(o.title) + ' · Atlas · ana vanzin';
    root.innerHTML = '<a class="ed-back" href="index.html"><span class="ar">←</span><span>' + (en ? 'Atlas' : 'Atlas') + '</span></a>' + '<div class="ed-head">' + '<p class="kicker rise">' + (en ? 'Atlas · object dossier' : 'Atlas · dossiê de objeto') + '</p>' + '<h1 class="ed-title rise" style="--d:.06s">' + L(o.title) + '</h1>' + '<p class="dek rise" style="--d:.12s">' + L(o.summary) + '</p>' + '<div class="oc-ths rise" style="--d:.16s">' + themeChips(o.themes) + '</div>' + metaBlock(o) + '</div>' + '<section class="oc-fig">' + figure(o) + '</section>' + '<section class="oc-body"><div class="prose">' + notesBlock(o.notes) + '<p class="lede">' + L(o.summary) + '</p>' + (o.essay ? '<p>' + (en ? 'Read the essay that follows this object: ' : 'Leia o ensaio que acompanha este objeto: ') + '<a class="tl" href="../' + o.essay.href + '">' + L(o.essay.label) + ' <span class="ar">→</span></a></p>' : '') + '</div></section>' + symbolRow(o.symbols) + sourcesBlock(o.sources) + relatedBlock(o);

    // labels that need lang
    root.querySelectorAll('[data-k="symbols"]').forEach(function (el) {
      el.textContent = en ? 'Symbols in this object' : 'Símbolos neste objeto';
    });
  }
  window.addEventListener('av:lang', render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);else render();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/atlas/object.js", error: String((e && e.message) || e) }); }

// site/content.js
try { (() => {
/* ============================================================
   ana vanzin — shared content architecture
   One bilingual data spine for the research wing. No styling here.
   Consumed by: atlas/*, sala-de-leitura, desenhe-um-simbolo, and any
   future route. Pages read window.AVContent and render with the
   editorial primitives (editorial.css). PT primary / EN secondary.

   Collections:
     THEMES        — the taxonomy that links essays, objects, readings
     OBJECTS       — Atlas dossiers (visual objects under curation)
     READINGS      — the reading-room shelves (books, articles, sources)
     SYMBOLS       — legal symbols, used by "Draw a Legal Symbol"
     ESSAYS        — pointers into marginália (index only, not full text)
     PUBLICATIONS  — pointers into publicações (index only)
     PROJECTS      — research strands / work in formation
   Helpers: AVContent.theme(slug), .objectsByTheme(slug), .readingsByTheme(slug)
   ============================================================ */
(function () {
  function L(o) {
    var lang = window.AV && window.AV.lang || 'pt';
    return o && typeof o === 'object' && ('pt' in o || 'en' in o) ? o[lang] != null ? o[lang] : o.pt : o;
  }

  /* ---------- THEMES — the shared taxonomy ---------- */
  var THEMES = [{
    slug: 'justica-cegueira',
    n: '01',
    name: {
      pt: 'justiça e cegueira',
      en: 'justice and blindness'
    },
    gloss: {
      pt: 'a venda, do escárnio à virtude',
      en: 'the blindfold, from satire to virtue'
    }
  }, {
    slug: 'nacao-republica',
    n: '02',
    name: {
      pt: 'nação e república',
      en: 'nation and republic'
    },
    gloss: {
      pt: 'Marianne, Britannia, a República',
      en: 'Marianne, Britannia, the Republic'
    }
  }, {
    slug: 'direito-violencia',
    n: '03',
    name: {
      pt: 'direito e violência',
      en: 'law and violence'
    },
    gloss: {
      pt: 'o gume por trás da virtude',
      en: 'the blade behind the virtue'
    }
  }, {
    slug: 'alegoria-feminina',
    n: '04',
    name: {
      pt: 'alegoria feminina',
      en: 'feminine allegory'
    },
    gloss: {
      pt: 'o corpo emprestado à lei',
      en: 'the body lent to law'
    }
  }, {
    slug: 'soberania-visual',
    n: '05',
    name: {
      pt: 'soberania visual',
      en: 'visual sovereignty'
    },
    gloss: {
      pt: 'quem governa o que se vê',
      en: 'who governs what is seen'
    }
  }, {
    slug: 'colonialidade-ver',
    n: '06',
    name: {
      pt: 'colonialidade do ver',
      en: 'coloniality of seeing'
    },
    gloss: {
      pt: 'raça, nação e o olhar jurídico',
      en: 'race, nation and the legal gaze'
    }
  }];

  /* ---------- OBJECTS — Atlas dossiers ---------- */
  var OBJECTS = [{
    slug: 'justitia',
    href: 'atlas/justitia.html',
    img: 'assets/atlas/justitia.jpg',
    status: {
      pt: 'em curadoria',
      en: 'under curation'
    },
    title: {
      pt: 'Justitia vendada',
      en: 'Blindfolded Justitia'
    },
    object: {
      pt: 'Xilogravura',
      en: 'Woodcut'
    },
    origin: {
      pt: 'Das Narrenschiff, Basileia',
      en: 'Das Narrenschiff, Basel'
    },
    date: '1494',
    maker: {
      pt: 'Sebastian Brant (atrib. oficina)',
      en: 'Sebastian Brant (attrib. workshop)'
    },
    shelf: {
      pt: 'fólio 22v',
      en: 'folio 22v'
    },
    rights: {
      pt: 'direitos a verificar',
      en: 'rights to be verified'
    },
    themes: ['justica-cegueira', 'alegoria-feminina'],
    caption: {
      pt: 'O tolo venda os olhos de Justitia. A primeira Justitia vendada não é virtude — é escárnio.',
      en: "The fool blindfolds Justitia. The first blindfolded Justitia is not virtue — it is mockery."
    },
    symbols: ['venda', 'balanca', 'gume'],
    summary: {
      pt: 'A mais antiga Justitia vendada de que se tem notícia não a mostra como virtude, mas como alvo: um tolo lhe cobre os olhos, e o gesto é de zombaria. Este dossiê reúne o objeto, sua descrição material e as leituras que o atravessam.',
      en: 'The earliest known blindfolded Justitia shows her not as virtue but as target: a fool covers her eyes, and the gesture is one of mockery. This dossier gathers the object, its material description and the readings that cross it.'
    },
    notes: [{
      k: {
        pt: 'O gesto',
        en: 'The gesture'
      },
      t: {
        pt: 'A autoria do gesto decide o sentido. Quase nunca é a própria Justitia quem se venda — é alguém que a venda.',
        en: 'The authorship of the gesture decides its meaning. It is almost never Justitia who blindfolds herself — it is someone who blindfolds her.'
      }
    }, {
      k: {
        pt: 'A viagem',
        en: 'The journey'
      },
      t: {
        pt: 'Da margem satírica do livro impresso ao tímpano do tribunal, em pouco mais de um século.',
        en: 'From the satirical margin of the printed book to the courthouse tympanum, in little more than a century.'
      }
    }],
    essay: {
      href: 'marginalia/justica-nao-nasceu-cega.html',
      label: {
        pt: 'a justiça não nasceu cega',
        en: 'justice was not born blind'
      }
    },
    sources: [{
      pt: 'Brant, Sebastian. <em>Das Narrenschiff</em>. Basileia, 1494, fol. 22v. Digitalização e direitos a confirmar.',
      en: 'Brant, Sebastian. <em>Das Narrenschiff</em>. Basel, 1494, fol. 22v. Digitisation and rights to be confirmed.'
    }]
  }, {
    slug: 'marianne',
    href: 'atlas/marianne.html',
    img: 'assets/atlas/marianne.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'Marianne',
      en: 'Marianne'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'França',
      en: 'France'
    },
    date: 'séc. XVIII–',
    maker: {
      pt: 'tradição republicana',
      en: 'republican tradition'
    },
    shelf: {
      pt: 'múltiplos suportes',
      en: 'multiple supports'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'alegoria-feminina', 'soberania-visual'],
    caption: {
      pt: 'A República figurada em corpo de mulher — e sua irmã tropical.',
      en: 'The Republic figured in a woman\u2019s body — and her tropical sister.'
    },
    symbols: ['barrete', 'coroa'],
    summary: {
      pt: 'A figura feminina que encarna a República francesa e viaja, transformada, para a alegoria da nação brasileira. Dossiê em formação.',
      en: 'The feminine figure that embodies the French Republic and travels, transformed, into the allegory of the Brazilian nation. Dossier in formation.'
    },
    notes: [],
    essay: {
      href: 'publicacoes/maria-marianne.html',
      label: {
        pt: 'Maria, Marianne e a República',
        en: 'Maria, Marianne and the Republic'
      }
    },
    sources: []
  }, {
    slug: 'britannia',
    href: 'atlas/britannia.html',
    img: 'assets/atlas/britannia.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'Britannia',
      en: 'Britannia'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'Grã-Bretanha',
      en: 'Great Britain'
    },
    date: 'séc. XVII–',
    maker: {
      pt: 'tradição imperial',
      en: 'imperial tradition'
    },
    shelf: {
      pt: 'moeda, estátua, gravura',
      en: 'coin, statue, print'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'soberania-visual', 'colonialidade-ver'],
    caption: {
      pt: 'A nação imperial em corpo de mulher armada.',
      en: 'The imperial nation as an armed woman\u2019s body.'
    },
    symbols: ['gume', 'coroa'],
    summary: {
      pt: 'A alegoria britânica entre virtude cívica e poder imperial. Dossiê em formação.',
      en: 'The British allegory between civic virtue and imperial power. Dossier in formation.'
    },
    notes: [],
    essay: null,
    sources: []
  }, {
    slug: 'republica',
    href: 'atlas/republica.html',
    img: 'assets/atlas/republica.jpg',
    status: {
      pt: 'em formação',
      en: 'in formation'
    },
    title: {
      pt: 'A República',
      en: 'The Republic'
    },
    object: {
      pt: 'Alegoria nacional',
      en: 'National allegory'
    },
    origin: {
      pt: 'Brasil',
      en: 'Brazil'
    },
    date: '1889–',
    maker: {
      pt: 'iconografia republicana',
      en: 'republican iconography'
    },
    shelf: {
      pt: 'moeda, selo, pintura',
      en: 'coin, stamp, painting'
    },
    rights: {
      pt: 'imagem a sourcing',
      en: 'image to be sourced'
    },
    themes: ['nacao-republica', 'alegoria-feminina', 'colonialidade-ver'],
    caption: {
      pt: 'A irmã tropical de Marianne: a República brasileira figurada como mulher.',
      en: 'Marianne\u2019s tropical sister: the Brazilian Republic figured as a woman.'
    },
    symbols: ['barrete', 'coroa'],
    summary: {
      pt: 'A alegoria feminina da nação brasileira, entre importação iconográfica e invenção local. Dossiê em formação.',
      en: 'The feminine allegory of the Brazilian nation, between iconographic import and local invention. Dossier in formation.'
    },
    notes: [],
    essay: {
      href: 'publicacoes/maria-marianne.html',
      label: {
        pt: 'Maria, Marianne e a República',
        en: 'Maria, Marianne and the Republic'
      }
    },
    sources: []
  }];

  /* ---------- SYMBOLS — for "Draw a Legal Symbol" ---------- */
  /* path = an SVG path string drawn on a 100x100 viewBox (study line) */
  var SYMBOLS = [{
    slug: 'venda',
    name: {
      pt: 'a venda',
      en: 'the blindfold'
    },
    gloss: {
      pt: 'cega o juízo — ou o protege do que não deve ver',
      en: 'blinds judgement — or shields it from what it must not see'
    },
    theme: 'justica-cegueira',
    path: 'M16 50 Q50 38 84 50 Q50 62 16 50 Z M16 50 L8 44 M84 50 L92 44'
  }, {
    slug: 'balanca',
    name: {
      pt: 'a balança',
      en: 'the scale'
    },
    gloss: {
      pt: 'a medida como tecnologia política',
      en: 'measure as a political technology'
    },
    theme: 'direito-violencia',
    path: 'M50 18 L50 78 M34 78 L66 78 M22 34 L78 34 M22 34 L14 54 M22 34 L30 54 M14 54 Q22 64 30 54 M78 34 L70 54 M78 34 L86 54 M70 54 Q78 64 86 54'
  }, {
    slug: 'gume',
    name: {
      pt: 'o gume',
      en: 'the blade'
    },
    gloss: {
      pt: 'a força que a virtude esconde',
      en: 'the force the virtue conceals'
    },
    theme: 'direito-violencia',
    path: 'M50 14 L50 70 M38 70 L62 70 M34 76 L66 76 M44 22 L50 14 L56 22'
  }, {
    slug: 'coroa',
    name: {
      pt: 'a coroa',
      en: 'the crown'
    },
    gloss: {
      pt: 'soberania que se vê de longe',
      en: 'sovereignty seen from afar'
    },
    theme: 'soberania-visual',
    path: 'M22 64 L18 34 L34 50 L50 28 L66 50 L82 34 L78 64 Z M22 64 L78 64'
  }, {
    slug: 'barrete',
    name: {
      pt: 'o barrete frígio',
      en: 'the Phrygian cap'
    },
    gloss: {
      pt: 'a liberdade que a república veste',
      en: 'the liberty the republic wears'
    },
    theme: 'nacao-republica',
    path: 'M30 70 L30 46 Q30 22 56 22 Q74 22 70 40 Q66 50 70 70 Z M30 46 Q44 52 70 48'
  }, {
    slug: 'trono',
    name: {
      pt: 'o trono',
      en: 'the throne'
    },
    gloss: {
      pt: 'o lugar de onde a lei fala',
      en: 'the seat from which law speaks'
    },
    theme: 'soberania-visual',
    path: 'M30 30 L30 84 M70 30 L70 84 M30 30 L70 30 M30 56 L70 56 M24 84 L76 84'
  }];

  /* ---------- READINGS — the reading-room shelves ---------- */
  var READINGS = [{
    slug: 'lei-imagem',
    anchor: 'lei-imagem',
    shelf: {
      pt: 'Lei e imagem',
      en: 'Law and image'
    },
    note: {
      pt: 'Como o direito se torna visível, e o que a imagem faz quando vira norma.',
      en: 'How law becomes visible, and what the image does once it becomes norm.'
    },
    themes: ['soberania-visual', 'justica-cegueira'],
    items: [{
      author: 'Costas Douzinas & Lynda Nead (eds.)',
      year: '1999',
      title: {
        pt: 'Law and the Image',
        en: 'Law and the Image'
      },
      line: {
        pt: 'A imagem como lugar do jurídico, não seu ornamento.',
        en: 'The image as a site of the legal, not its ornament.'
      }
    }, {
      author: 'Peter Goodrich',
      year: '1995',
      title: {
        pt: 'Oedipus Lex',
        en: 'Oedipus Lex'
      },
      line: {
        pt: 'Psicanálise, história e os signos do direito.',
        en: 'Psychoanalysis, history and the signs of law.'
      }
    }, {
      author: 'W. J. T. Mitchell',
      year: '1986',
      title: {
        pt: 'Iconology',
        en: 'Iconology'
      },
      line: {
        pt: 'Imagem, texto e ideologia — a gramática do ver.',
        en: 'Image, text and ideology — the grammar of seeing.'
      }
    }]
  }, {
    slug: 'alegoria-corpo',
    anchor: 'alegoria-corpo',
    shelf: {
      pt: 'Alegoria e corpo',
      en: 'Allegory and body'
    },
    note: {
      pt: 'Por que a autoridade toma forma de mulher — e o que esse corpo carrega.',
      en: 'Why authority takes the form of a woman — and what that body carries.'
    },
    themes: ['alegoria-feminina', 'nacao-republica'],
    items: [{
      author: 'Marina Warner',
      year: '1985',
      title: {
        pt: 'Monuments and Maidens',
        en: 'Monuments and Maidens'
      },
      line: {
        pt: 'A alegoria feminina da forma pública, de Atena à República.',
        en: 'The feminine allegory of public form, from Athena to the Republic.'
      }
    }, {
      author: 'Carole Pateman',
      year: '1988',
      title: {
        pt: 'O Contrato Sexual',
        en: 'The Sexual Contract'
      },
      line: {
        pt: 'O pacto que a teoria política não nomeia.',
        en: 'The pact that political theory does not name.'
      }
    }, {
      author: 'Maurice Agulhon',
      year: '1979',
      title: {
        pt: 'Marianne au combat',
        en: 'Marianne into Battle'
      },
      line: {
        pt: 'A figura da República como imagem militante.',
        en: 'The figure of the Republic as militant image.'
      }
    }]
  }, {
    slug: 'metodo',
    anchor: 'metodo',
    shelf: {
      pt: 'Método: atlas e iconologia',
      en: 'Method: atlas and iconology'
    },
    note: {
      pt: 'Ferramentas para ler imagens em série — montagem, sobrevivência, sintoma.',
      en: 'Tools for reading images in series — montage, survival, symptom.'
    },
    themes: ['soberania-visual', 'colonialidade-ver'],
    items: [{
      author: 'Aby Warburg',
      year: '1929',
      title: {
        pt: 'Atlas Mnemosyne',
        en: 'Mnemosyne Atlas'
      },
      line: {
        pt: 'A montagem de imagens como forma de pensamento.',
        en: 'The montage of images as a form of thought.'
      }
    }, {
      author: 'Georges Didi-Huberman',
      year: '2002',
      title: {
        pt: 'A Imagem Sobrevivente',
        en: 'The Surviving Image'
      },
      line: {
        pt: 'Warburg, o tempo das imagens e o sintoma.',
        en: 'Warburg, the time of images and the symptom.'
      }
    }, {
      author: 'Erwin Panofsky',
      year: '1939',
      title: {
        pt: 'Estudos de Iconologia',
        en: 'Studies in Iconology'
      },
      line: {
        pt: 'Os três níveis do sentido na imagem.',
        en: 'The three levels of meaning in the image.'
      }
    }]
  }, {
    slug: 'nacao-genero',
    anchor: 'nacao-genero',
    shelf: {
      pt: 'Nação, gênero e direito',
      en: 'Nation, gender and law'
    },
    note: {
      pt: 'Cidadania, nacionalidade e o lugar jurídico da mulher.',
      en: 'Citizenship, nationality and the legal place of women.'
    },
    themes: ['nacao-republica', 'colonialidade-ver'],
    items: [{
      author: 'Nira Yuval-Davis',
      year: '1997',
      title: {
        pt: 'Gênero e Nação',
        en: 'Gender and Nation'
      },
      line: {
        pt: 'A mulher como fronteira simbólica da nação.',
        en: 'Woman as the symbolic boundary of the nation.'
      }
    }, {
      author: 'Linda Kerber',
      year: '1998',
      title: {
        pt: 'No Constitutional Right to Be Ladies',
        en: 'No Constitutional Right to Be Ladies'
      },
      line: {
        pt: 'Obrigações, cidadania e o corpo feminino diante da lei.',
        en: 'Obligations, citizenship and the female body before the law.'
      }
    }]
  }];

  /* ---------- ESSAYS — pointers into marginália ---------- */
  var ESSAYS = [{
    href: 'marginalia/justica-nao-nasceu-cega.html',
    date: '2026 · 03',
    title: {
      pt: 'a justiça não nasceu cega',
      en: 'justice was not born blind'
    },
    themes: ['justica-cegueira', 'alegoria-feminina']
  }, {
    href: 'marginalia/balanca.html',
    date: '2026 · 02',
    title: {
      pt: 'uma balança nunca é só uma balança',
      en: 'a scale is never just a scale'
    },
    themes: ['direito-violencia', 'soberania-visual']
  }, {
    href: 'marginalia/fachada.html',
    date: '2026 · 01',
    title: {
      pt: 'a mulher na fachada do tribunal',
      en: 'the woman on the courthouse façade'
    },
    themes: ['nacao-republica', 'alegoria-feminina']
  }];

  /* ---------- PROJECTS — research strands ---------- */
  var PROJECTS = [{
    slug: 'iconocracia',
    href: 'iconocracia/',
    title: {
      pt: 'ICONOCRACIA',
      en: 'ICONOCRACIA'
    },
    line: {
      pt: 'A tese: como o direito imagina a si mesmo.',
      en: 'The thesis: how law imagines itself.'
    }
  }, {
    slug: 'feminilidade-estado',
    title: {
      pt: 'Feminilidade de Estado',
      en: 'State Femininity'
    },
    line: {
      pt: 'A nação personificada como mulher: Justitia, Marianne, a República.',
      en: 'The nation personified as a woman: Justitia, Marianne, the Republic.'
    }
  }, {
    slug: 'condicao-juridica',
    title: {
      pt: 'Condição jurídica da mulher',
      en: 'Women\u2019s legal condition'
    },
    line: {
      pt: 'Nacionalidade, casamento e cidadania na história do direito.',
      en: 'Nationality, marriage and citizenship in legal history.'
    }
  }];
  function theme(slug) {
    return THEMES.filter(function (t) {
      return t.slug === slug;
    })[0] || null;
  }
  function objectsByTheme(slug) {
    return OBJECTS.filter(function (o) {
      return o.themes.indexOf(slug) >= 0;
    });
  }
  function readingsByTheme(slug) {
    return READINGS.filter(function (r) {
      return r.themes.indexOf(slug) >= 0;
    });
  }
  function object(slug) {
    return OBJECTS.filter(function (o) {
      return o.slug === slug;
    })[0] || null;
  }
  window.AVContent = {
    L: L,
    THEMES: THEMES,
    OBJECTS: OBJECTS,
    SYMBOLS: SYMBOLS,
    READINGS: READINGS,
    ESSAYS: ESSAYS,
    PROJECTS: PROJECTS,
    theme: theme,
    object: object,
    objectsByTheme: objectsByTheme,
    readingsByTheme: readingsByTheme
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/content.js", error: String((e && e.message) || e) }); }

// site/desktop-app.js
try { (() => {
/*IIFE*/(function () {
  /* ana vanzin desktop — window manager, menu bar, dock, boot. */
  const {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  } = window.avapp;
  const {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  } = window.avapp;
  const REG = {
    sobre: {
      title: {
        pt: 'sobre.txt',
        en: 'about.txt'
      },
      w: 440,
      Body: WSobre
    },
    tese: {
      title: {
        pt: 'tese',
        en: 'thesis'
      },
      w: 560,
      Body: WTese
    },
    publicacoes: {
      title: {
        pt: 'publicações',
        en: 'publications'
      },
      w: 520,
      Body: WPublicacoes
    },
    ius: {
      title: {
        pt: 'ius gentium',
        en: 'ius gentium'
      },
      w: 440,
      Body: WIus
    },
    curriculo: {
      title: {
        pt: 'currículo',
        en: 'curriculum'
      },
      w: 460,
      Body: WCv
    },
    contato: {
      title: {
        pt: 'contato',
        en: 'contact'
      },
      w: 420,
      Body: WContato
    },
    justitia: {
      title: {
        pt: 'justitia.png',
        en: 'justitia.png'
      },
      w: 360,
      Body: WJustitia
    },
    vo: {
      title: {
        pt: 'vó.jpg',
        en: 'grandma.jpg'
      },
      w: 360,
      Body: WVo
    }
  };
  const regTitle = (id, lang) => REG[id].title[lang] || REG[id].title.pt;
  const DESK_ICONS = [{
    id: 'sobre',
    label: {
      pt: 'sobre.txt',
      en: 'about.txt'
    },
    Icon: DocIcon
  }, {
    id: 'tese',
    label: {
      pt: 'tese',
      en: 'thesis'
    },
    Icon: FolderIcon
  }, {
    id: 'conceitos',
    label: {
      pt: 'conceitos',
      en: 'concepts'
    },
    Icon: SealIcon
  }, {
    id: 'iconocracia',
    label: {
      pt: 'iconocracia',
      en: 'iconocracia'
    },
    Icon: AtlasIcon
  }, {
    id: 'quotes',
    label: {
      pt: 'citações',
      en: 'quotes'
    },
    Icon: QuoteIcon
  }, {
    id: 'trabalhos',
    label: {
      pt: 'trabalhos',
      en: 'works'
    },
    Icon: WorksIcon
  }, {
    id: 'publicacoes',
    label: {
      pt: 'publicações',
      en: 'publications'
    },
    Icon: FolderIcon
  }, {
    id: 'ius',
    label: {
      pt: 'ius gentium',
      en: 'ius gentium'
    },
    Icon: GroupIcon
  }, {
    id: 'curriculo',
    label: {
      pt: 'currículo',
      en: 'curriculum'
    },
    Icon: DocIcon
  }, {
    id: 'justitia',
    label: {
      pt: 'justitia.png',
      en: 'justitia.png'
    },
    Icon: ImageIcon
  }, {
    id: 'vo',
    label: {
      pt: 'vó.jpg',
      en: 'grandma.jpg'
    },
    Icon: ImageIcon
  }, {
    id: 'contato',
    label: {
      pt: 'contato',
      en: 'contact'
    },
    Icon: MailIcon
  }];
  const MENUS = ['sobre', 'tese', 'conceitos', 'publicacoes', 'ius', 'contato'];
  const MENU_LABEL = {
    pt: {
      sobre: 'Sobre',
      tese: 'Tese',
      conceitos: 'Conceitos',
      publicacoes: 'Perfis',
      ius: 'Ius Gentium',
      contato: 'Contato'
    },
    en: {
      sobre: 'About',
      tese: 'Thesis',
      conceitos: 'Concepts',
      publicacoes: 'Profiles',
      ius: 'Ius Gentium',
      contato: 'Contact'
    }
  };
  const UI = {
    pt: {
      welcome: 'bem-vinda',
      tagline: 'direito & iconografia',
      enter: 'entrar →',
      dockHint: 'clique duplo · arraste pela barra',
      dockHintM: 'toque · arraste a barra',
      clk: 'pt-BR'
    },
    en: {
      welcome: 'welcome',
      tagline: 'law & iconography',
      enter: 'enter →',
      dockHint: 'double-click · drag the title bar',
      dockHintM: 'tap · drag the bar',
      clk: 'en-GB'
    }
  };
  const winW = id => Math.min(REG[id].w, (typeof window !== 'undefined' ? window.innerWidth : 1280) - 24);
  function mobForced() {
    try {
      return localStorage.getItem('av_forcemob') === '1' || /[?&]mob/.test(location.search);
    } catch (e) {
      return false;
    }
  }
  function useIsMobile() {
    const [m, setM] = React.useState(() => typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches));
    React.useEffect(() => {
      const mq = window.matchMedia('(max-width: 760px)');
      const fn = () => setM(mobForced() || mq.matches);
      mq.addEventListener('change', fn);
      return () => mq.removeEventListener('change', fn);
    }, []);
    return m;
  }

  /* ---- striped (System-7) title bar ---- */
  function ChromeBox({
    children,
    active,
    onClick,
    label
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseDown: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      "aria-label": label,
      style: {
        width: 15,
        height: 15,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4,
        lineHeight: 0
      }
    }, children);
  }
  function TitleBar({
    title,
    active,
    onClose,
    onMin,
    onDown,
    draggable = true
  }) {
    const stripes = active ? 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)' : 'none';
    const flank = {
      flex: 1,
      height: 11,
      alignSelf: 'center',
      background: stripes,
      opacity: active ? 0.9 : 0,
      minWidth: 12
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: draggable ? onDown : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        height: draggable ? 30 : 38,
        padding: '0 9px',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        cursor: draggable ? 'grab' : 'default',
        userSelect: 'none',
        touchAction: 'none'
      }
    }, /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onClose,
      label: "Fechar"
    }), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        color: active ? 'var(--ink)' : 'var(--text-faint)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onMin,
      label: "Minimizar"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 1.5,
        background: 'var(--ink)'
      }
    })));
  }
  function WindowFrame({
    win,
    active,
    onClose,
    onMin,
    onFocus,
    onDragStart,
    lang,
    isMobile
  }) {
    const reg = REG[win.id];
    const Body = reg.Body;
    const frame = isMobile ? {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '100%',
      zIndex: 9500 + win.z,
      background: 'var(--paper)',
      borderTop: '1px solid var(--ink)',
      boxShadow: '0 -6px 0 0 var(--ink)'
    } : {
      position: 'absolute',
      left: win.x,
      top: win.y,
      width: winW(win.id),
      zIndex: win.z,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      boxShadow: active ? '5px 5px 0 0 var(--ink)' : '3px 3px 0 0 var(--ink-50)'
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => onFocus(win.id),
      style: frame
    }, isMobile && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '7px 0 2px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 4,
        background: 'var(--ink-30, rgba(0,0,0,0.25))',
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement(TitleBar, {
      title: regTitle(win.id, lang),
      active: active || isMobile,
      onClose: () => onClose(win.id),
      onMin: () => onMin(win.id),
      onDown: e => onDragStart(e, win.id),
      draggable: !isMobile
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: win.id === 'justitia' ? 12 : 22,
        maxHeight: isMobile ? '64vh' : '58vh',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Body, {
      lang: lang
    })));
  }
  function Clock({
    lang
  }) {
    const [t, setT] = React.useState('');
    React.useEffect(() => {
      const tick = () => setT(new Date().toLocaleTimeString(UI[lang].clk, {
        hour: '2-digit',
        minute: '2-digit'
      }));
      tick();
      const i = setInterval(tick, 15000);
      return () => clearInterval(i);
    }, [lang]);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        letterSpacing: '0.12em',
        fontSize: 13,
        color: 'var(--gold)'
      }
    }, t);
  }
  function Boot({
    onEnter,
    lang
  }) {
    const u = UI[lang];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
        textAlign: 'center',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(420px, 86vw)',
        border: '1px solid var(--ink)',
        boxShadow: '5px 5px 0 0 var(--ink)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '0 9px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        display: 'inline-block',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: 'nowrap'
      }
    }, u.welcome), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '34px 28px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      style: {
        height: 150,
        imageRendering: 'pixelated'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 1,
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        height: 1,
        background: 'var(--rubric)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.22em',
        fontSize: 11,
        color: 'var(--gold)'
      }
    }, u.tagline), /*#__PURE__*/React.createElement("button", {
      onClick: onEnter,
      style: {
        marginTop: 12,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        fontSize: 13,
        padding: '11px 26px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, u.enter))));
  }
  function Desktop() {
    const [booted, setBooted] = React.useState(() => {
      try {
        return localStorage.getItem('av_booted') === '1';
      } catch (e) {
        return false;
      }
    });
    const [wins, setWins] = React.useState(() => {
      const mob = typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches);
      return mob ? [] : [{
        id: 'tese',
        x: 250,
        y: 92,
        z: 2,
        min: false
      }, {
        id: 'justitia',
        x: 760,
        y: 150,
        z: 1,
        min: false
      }];
    });
    const [zTop, setZTop] = React.useState(3);
    const [sel, setSel] = React.useState(null);
    const drag = React.useRef(null);
    const isMobile = useIsMobile();
    const [lang, setLang] = React.useState(() => {
      try {
        const s = localStorage.getItem('av_lang');
        return s === 'pt' || s === 'en' ? s : 'pt';
      } catch (e) {
        return 'pt';
      }
    });
    const setLangP = l => {
      setLang(l);
      try {
        localStorage.setItem('av_lang', l);
      } catch (e) {}
    };
    React.useEffect(() => {
      document.documentElement.lang = lang;
    }, [lang]);
    const enter = () => {
      setBooted(true);
      try {
        localStorage.setItem('av_booted', '1');
      } catch (e) {}
    };
    const focus = id => setWins(ws => {
      const z = zTop;
      setZTop(p => p + 1);
      return ws.map(w => w.id === id ? {
        ...w,
        z,
        min: false
      } : w);
    });
    const open = id => {
      if (id === 'sobre') {
        window.location.href = 'readme.html';
        return;
      }
      if (id === 'conceitos') {
        window.location.href = 'conceitos.html';
        return;
      }
      if (id === 'iconocracia') {
        window.location.href = 'iconocracia/';
        return;
      }
      if (id === 'quotes') {
        window.location.href = 'quotes/';
        return;
      }
      if (id === 'trabalhos') {
        window.location.href = 'trabalhos.html';
        return;
      }
      setSel(id);
      setWins(ws => {
        const z = zTop;
        setZTop(p => p + 1);
        if (ws.some(w => w.id === id)) return ws.map(w => w.id === id ? {
          ...w,
          z,
          min: false
        } : w);
        const n = ws.filter(w => !w.min).length;
        const x = Math.min(160 + n * 32, Math.max(12, window.innerWidth - winW(id) - 16));
        return [...ws, {
          id,
          x,
          y: 78 + n * 28,
          z,
          min: false
        }];
      });
    };
    const close = id => setWins(ws => ws.filter(w => w.id !== id));
    const minimize = id => setWins(ws => ws.map(w => w.id === id ? {
      ...w,
      min: true
    } : w));
    const dragStart = (e, id) => {
      focus(id);
      const w = wins.find(x => x.id === id);
      drag.current = {
        id,
        dx: e.clientX - w.x,
        dy: e.clientY - w.y
      };
    };
    React.useEffect(() => {
      const move = e => {
        if (!drag.current) return;
        const {
          id,
          dx,
          dy
        } = drag.current;
        setWins(ws => ws.map(w => w.id === id ? {
          ...w,
          x: Math.max(0, Math.min(e.clientX - dx, window.innerWidth - 60)),
          y: Math.max(34, Math.min(e.clientY - dy, window.innerHeight - 60))
        } : w));
      };
      const up = () => {
        drag.current = null;
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      return () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
    }, []);
    const visible = wins.filter(w => !w.min);
    const topId = visible.reduce((a, w) => !a || w.z > a.z ? w : a, null)?.id;
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => setSel(null),
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--paper)',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: '4%',
        bottom: 40,
        height: '80%',
        width: 'auto',
        imageRendering: 'pixelated',
        opacity: 0.15,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 34,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 16px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SealIcon, {
      size: 20
    }), !isMobile && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'var(--rule-hairline)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? 13 : 16,
        overflowX: isMobile ? 'auto' : 'hidden',
        flex: isMobile ? 1 : '0 1 auto',
        minWidth: 0
      }
    }, MENUS.map(id => /*#__PURE__*/React.createElement("button", {
      key: id,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => open(id),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 13.5,
        color: 'var(--ink)',
        padding: '4px 2px',
        whiteSpace: 'nowrap',
        borderBottom: topId === id ? '1.5px solid var(--rubric)' : '1.5px solid transparent'
      }
    }, MENU_LABEL[lang][id]))), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        border: '1px solid var(--ink)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, ['pt', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
      key: l,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => setLangP(l),
      style: {
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: '0.12em',
        padding: '2px 9px',
        lineHeight: 1.6,
        background: lang === l ? 'var(--ink)' : 'var(--paper)',
        color: lang === l ? 'var(--paper)' : 'var(--text-faint)'
      }
    }, l.toUpperCase()))), !isMobile && /*#__PURE__*/React.createElement(Clock, {
      lang: lang
    }))), /*#__PURE__*/React.createElement("div", {
      style: isMobile ? {
        position: 'absolute',
        top: 42,
        left: 0,
        right: 0,
        bottom: 42,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(86px, 1fr))',
        gap: 16,
        padding: '20px 14px 28px',
        zIndex: 1,
        alignContent: 'start'
      } : {
        position: 'absolute',
        top: 50,
        left: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        zIndex: 1
      }
    }, DESK_ICONS.map(({
      id,
      label,
      Icon
    }) => {
      const active = sel === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onPointerDown: e => {
          e.stopPropagation();
          setSel(id);
        },
        onDoubleClick: () => open(id),
        onClick: e => {
          if (isMobile || e.detail === 0) open(id);
        },
        style: {
          background: 'none',
          border: 0,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          width: isMobile ? 'auto' : 84,
          padding: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: isMobile ? {
          width: '100%',
          height: 76,
          background: 'var(--paper)',
          border: '1px solid var(--ink)',
          borderRadius: 3,
          boxShadow: active ? '3px 3px 0 0 var(--rubric)' : '2px 2px 0 0 var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: -3,
          transition: 'box-shadow .1s ease'
        } : {
          padding: 3,
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: 1
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        size: isMobile ? 46 : 44
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          lineHeight: 1.2,
          textAlign: 'center',
          background: active ? 'var(--rubric)' : 'transparent',
          color: active ? 'var(--paper)' : 'var(--ink)',
          padding: '1px 5px'
        }
      }, label[lang]));
    })), isMobile && visible.length > 0 && /*#__PURE__*/React.createElement("div", {
      onPointerDown: e => {
        e.stopPropagation();
        minimize(topId);
      },
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 9400,
        background: 'rgba(28,25,20,0.34)'
      }
    }), visible.map(w => /*#__PURE__*/React.createElement(WindowFrame, {
      key: w.id,
      win: w,
      active: topId === w.id,
      onClose: close,
      onMin: minimize,
      onFocus: focus,
      onDragStart: dragStart,
      lang: lang,
      isMobile: isMobile
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 36,
        background: 'var(--ink)',
        color: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 12px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.26em',
        fontSize: 11,
        color: 'var(--gold-2)',
        whiteSpace: 'nowrap'
      }
    }, "anavanzin.com"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'rgba(242,234,217,0.25)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden'
      }
    }, wins.map(w => {
      const on = !w.min && topId === w.id;
      return /*#__PURE__*/React.createElement("button", {
        key: w.id,
        onPointerDown: e => e.stopPropagation(),
        onClick: () => w.min ? focus(w.id) : topId === w.id ? minimize(w.id) : focus(w.id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: on ? 'var(--paper)' : 'transparent',
          color: on ? 'var(--ink)' : 'var(--paper)',
          border: '1px solid ' + (on ? 'var(--paper)' : 'rgba(242,234,217,0.35)'),
          borderRadius: 0,
          padding: '3px 10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 12.5,
          whiteSpace: 'nowrap',
          opacity: w.min ? 0.6 : 1
        }
      }, regTitle(w.id, lang));
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 11,
        color: 'rgba(242,234,217,0.5)',
        whiteSpace: 'nowrap'
      }
    }, UI[lang][isMobile ? 'dockHintM' : 'dockHint'])), !booted && /*#__PURE__*/React.createElement(Boot, {
      onEnter: enter,
      lang: lang
    }));
  }
  (window.avapp = window.avapp || {}).Desktop = Desktop;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/desktop-app.js", error: String((e && e.message) || e) }); }

// site/editorial.js
try { (() => {
/* ana vanzin — editorial route shell.
   Bilingual (PT primary / EN secondary) via localStorage 'av_lang', shared
   across all routes and the desktop homepage. Generic + declarative:
   - any element with data-pt / data-en   -> textContent swapped on lang change
   - any element with data-pt-html / data-en-html -> innerHTML swapped
   - .langtog buttons[data-lang] toggle + persist
   - .avnav a[data-match] (space-separated filenames) gets .cur for current page
   No asset paths here, so the file loads correctly from root or a subdir. */
(function () {
  function getLang() {
    try {
      var s = localStorage.getItem('av_lang');
      return s === 'en' ? 'en' : 'pt';
    } catch (e) {
      return 'pt';
    }
  }
  function setLang(l) {
    try {
      localStorage.setItem('av_lang', l);
    } catch (e) {}
  }
  var lang = getLang();
  function paintText() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-pt]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-pt-html]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang + '-html');
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.langtog button[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
    // let pages react (re-render data-driven content)
    window.dispatchEvent(new CustomEvent('av:lang', {
      detail: {
        lang: lang
      }
    }));
  }
  function markActive() {
    var route = document.body && document.body.getAttribute('data-route');
    if (!route) return;
    document.querySelectorAll('.avnav a[data-route]').forEach(function (a) {
      if (a.getAttribute('data-route') === route) a.classList.add('cur');
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.langtog button[data-lang]');
    if (!b) return;
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    setLang(lang);
    paintText();
  });

  // expose current lang for pages that build content imperatively
  window.AV = {
    get lang() {
      return lang;
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      paintText();
      markActive();
    });
  } else {
    paintText();
    markActive();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/editorial.js", error: String((e && e.message) || e) }); }

// site/icons.js
try { (() => {
/*IIFE*/(function () {
  /* Retro desktop icons for the ana vanzin OS — crisp, pixel-leaning, brand palette.
     Exposed on window for sibling babel scripts. */

  const _crisp = {
    shapeRendering: 'crispEdges'
  };
  function FolderIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "11",
      width: "22",
      height: "8",
      fill: "var(--gold)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "26",
      fill: "var(--gold-2)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "22",
      x2: "44",
      y2: "22",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }));
  }
  function DocIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 4 H32 L39 11 V44 H11 Z",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 4 V11 H39 Z",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "20",
      x2: "34",
      y2: "20",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "26",
      x2: "34",
      y2: "26",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "31",
      x2: "34",
      y2: "31",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "36",
      x2: "28",
      y2: "36",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function MailIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "12",
      width: "38",
      height: "26",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 13 L24 28 L43 13",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 37 L19 24 M43 37 L29 24",
      fill: "none",
      stroke: "var(--ink-50)",
      strokeWidth: "1.2"
    }));
  }
  function GroupIcon({
    size = 46
  }) {
    /* Ius Gentium — a stacked-rings device echoing the seal */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "18",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "13",
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "22",
      r: "5",
      fill: "var(--rubric)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "22",
      r: "5",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 34 q6 -8 13 -8 q7 0 13 8",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }));
  }
  function ImageIcon({
    size = 46,
    src = 'assets/pixel-justitia.png'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: 'var(--paper)',
        border: '1.6px solid var(--ink)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        height: '112%',
        width: 'auto',
        imageRendering: 'pixelated',
        marginBottom: '-4%'
      }
    }));
  }
  function SealIcon({
    size = 46,
    src = 'assets/sun-seal.svg'
  }) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      width: size,
      height: size,
      style: {
        display: 'block'
      }
    });
  }
  function QuoteIcon({
    size = 46
  }) {
    /* Citações — open quotation marks over a citation rule */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "32",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "14",
      x2: "42",
      y2: "14",
      stroke: "var(--ink)",
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      y1: "35",
      x2: "35",
      y2: "35",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function AtlasIcon({
    size = 46
  }) {
    /* ICONOCRACIA atlas — a Warburg mounting board with specimen tiles */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "6",
      width: "38",
      height: "36",
      fill: "var(--ink)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--gold-2)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper-deep)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "none",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }));
  }
  function WorksIcon({
    size = 46
  }) {
    /* Trabalhos — a dossier of stacked sheets with a rubric clip */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "26",
      height: "31",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "7",
      width: "26",
      height: "31",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "4",
      width: "8",
      height: "5",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "17",
      x2: "34",
      y2: "17",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "22",
      x2: "34",
      y2: "22",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "27",
      x2: "30",
      y2: "27",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "32",
      x2: "34",
      y2: "32",
      stroke: "var(--gold)",
      strokeWidth: "1.6"
    }));
  }
  function CloseBox({
    active
  }) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'inline-block',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4
      }
    });
  }
  Object.assign(window.avapp = window.avapp || {}, {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/icons.js", error: String((e && e.message) || e) }); }

// site/theme-filter.js
try { (() => {
/* ana vanzin — reusable theme filter.
   A row of pill buttons built from AVContent.THEMES (+ "all").
   Filters any list of elements carrying data-themes="slug slug".
   Bilingual: re-labels on av:lang. Square-corner-free pills follow
   the editorial grammar (see .tfilter in editorial.css).

   window.AVThemeFilter.mount(containerEl, { base, onChange })
   window.AVThemeFilter.apply(listEl, slug)   // 'all' shows everything */
(function () {
  var L = function (o) {
    return window.AVContent.L(o);
  };
  function mount(container, opts) {
    opts = opts || {};
    var active = 'all';
    function render() {
      var en = window.AV && window.AV.lang === 'en';
      var btns = [];
      btns.push(btn('all', '', en ? 'all' : 'tudo'));
      window.AVContent.THEMES.forEach(function (t) {
        btns.push(btn(t.slug, t.n, L(t.name)));
      });
      container.innerHTML = btns.join('');
      container.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', b.dataset.slug === active ? 'true' : 'false');
        b.addEventListener('click', function () {
          active = b.dataset.slug;
          container.querySelectorAll('button').forEach(function (x) {
            x.setAttribute('aria-pressed', x.dataset.slug === active ? 'true' : 'false');
          });
          if (opts.onChange) opts.onChange(active);
        });
      });
    }
    function btn(slug, n, label) {
      return '<button type="button" data-slug="' + slug + '">' + (n ? '<span class="n">' + n + '</span>' : '') + label + '</button>';
    }
    render();
    window.addEventListener('av:lang', render);
    return {
      get active() {
        return active;
      }
    };
  }
  function apply(listEl, slug) {
    if (!listEl) return;
    Array.prototype.forEach.call(listEl.children, function (el) {
      var t = el.getAttribute('data-themes');
      var show = slug === 'all' || t && t.split(/\s+/).indexOf(slug) >= 0;
      el.classList.toggle('is-hidden', !show);
      if (el.classList.contains('rr-shelf')) return; // shelves use .is-hidden (display:none via CSS)
      el.style.display = show ? '' : 'none';
    });
  }
  window.AVThemeFilter = {
    mount: mount,
    apply: apply
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/theme-filter.js", error: String((e && e.message) || e) }); }

// site/window-contents.js
try { (() => {
/*IIFE*/(function () {
  /* Window contents for the ana vanzin desktop. Compose brand components.
     Bilingual: each component takes { lang } ('pt' | 'en'). */
  const _DS = window.AnaVanzinDesignSystem_b45a86;
  const {
    Eyebrow,
    RubricLink,
    PublicationEntry,
    FootnoteRef,
    Footnotes
  } = _DS;
  const L = (lang, pt, en) => lang === 'en' ? en : pt;
  const win_h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 1.1,
    margin: 0
  };
  const win_lead = {
    fontSize: 16,
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '60ch'
  };
  const win_p = {
    fontSize: 15,
    lineHeight: 1.62,
    margin: 0,
    color: 'var(--text-muted)',
    maxWidth: '60ch'
  };
  const stack = g => ({
    display: 'flex',
    flexDirection: 'column',
    gap: g
  });
  function WSobre({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Sobre', 'About')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, "ana vanzin"), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'Advogada e historiadora do direito. Doutoranda no PPGD/UFSC, com pesquisa em história e iconografia jurídica.', 'Lawyer and legal historian. PhD candidate at PPGD/UFSC, researching legal history and iconography.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A tese ", /*#__PURE__*/React.createElement("em", null, "Iconocracia"), " estuda as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 entre o incun\xE1bulo e o constitucionalismo moderno."), /*#__PURE__*/React.createElement(React.Fragment, null, "The thesis ", /*#__PURE__*/React.createElement("em", null, "Iconocracy"), " studies the female allegories of law \u2014 Justitia, the Republic-as-woman \u2014 between the incunabulum and modern constitutionalism."))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14,
        ...stack(6)
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Atuação', 'Focus')), /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        margin: 0
      }
    }, L(lang, 'Direito público · história constitucional · patrimônio cultural', 'Public law · constitutional history · cultural heritage'))));
  }
  function WTese({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/banner.png",
      alt: L(lang, 'Alegoria Feminina na História da Cultura Jurídica — Projeto de Doutorado, PPGD/UFSC', 'Female Allegory in the History of Legal Culture — PhD Project, PPGD/UFSC'),
      style: {
        display: 'block',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Tese · Iconocracia', 'Thesis · Iconocracy')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'A venda como sátira', 'The blindfold as satire')), /*#__PURE__*/React.createElement("div", {
      style: stack(12)
    }, /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A primeira Justitia vendada n\xE3o nasceu como virtude \u2014 nasceu como s\xE1tira, na xilogravura de 1494 do ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "The first blindfolded Justitia was not born as a virtue \u2014 it was born as satire, in the 1494 woodcut of the ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."))), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Investiga-se como a venda, o gume e a balança foram lidos, satirizados e normalizados na cultura jurídica europeia.', 'It investigates how the blindfold, the blade and the scales were read, satirised and normalised in European legal culture.')), /*#__PURE__*/React.createElement(Footnotes, {
      notes: ["Brant, Sebastian. Das Narrenschiff. Basel, 1494, fol. 22v."],
      style: {
        marginTop: 8
      }
    })));
  }
  function WPublicacoes({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(8)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Comunicações & traduções', 'Talks & translations')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: "Images of the Nation in Modern Legal Iconography",
      meta: L(lang, 'Comunicação · Germania, Britannia, Marianne e o uso simbólico do feminino.', 'Talk · Germania, Britannia, Marianne and the symbolic use of the feminine.')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'História do Direito das Mulheres', 'The History of Women’s Legal Rights'),
      meta: L(lang, 'XIX Encontro de História do Direito · UFSC', '19th Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Direito, fascismos e neofascismos entre Itália e Brasil', 'Law, Fascism and Neo-Fascism between Italy and Brazil'),
      meta: L(lang, 'XXI Encontro de História do Direito · UFSC', '21st Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Monumentos do Direito Internacional (trad.)', 'Monuments of International Law (transl.)'),
      meta: L(lang, 'Tradução de Luigi Lacchè · Rev. Bras. de História e Ciências Sociais.', 'Translation of Luigi Lacchè · Braz. J. of History & Social Sciences.')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WIus({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ius Gentium"), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'Grupo de pesquisa', 'Research group')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'História da cultura jurídica, PPGD/UFSC. Linha: iconografia e iconologia do direito.', 'Legal-culture history, PPGD/UFSC. Strand: iconography and iconology of law.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Encontros quinzenais, abertos a graduação e pós-graduação.', 'Fortnightly meetings, open to undergraduate and graduate students.')), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "#",
      external: true
    }, L(lang, 'Diretório CNPq', 'CNPq Directory'))));
  }
  function WContato({
    lang
  }) {
    const [sent, setSent] = React.useState(false);
    const input = {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      background: 'var(--paper)',
      border: '1px solid var(--ink-50)',
      borderRadius: 0,
      padding: '8px 10px',
      outlineColor: 'var(--rubric)',
      width: '100%',
      boxSizing: 'border-box'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Contato', 'Contact')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "mailto:anavvanzin@outlook.com"
    }, "anavvanzin@outlook.com")), sent ? /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14
      }
    }, L(lang, 'Mensagem registrada. Resposta em até cinco dias úteis.', 'Message received. Reply within five business days.')) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        ...stack(12),
        maxWidth: 340
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Nome', 'Name')), /*#__PURE__*/React.createElement("input", {
      required: true,
      style: input
    })), /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Mensagem', 'Message')), /*#__PURE__*/React.createElement("textarea", {
      required: true,
      rows: "3",
      style: {
        ...input,
        resize: 'vertical'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 13,
        padding: '9px 20px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, L(lang, 'Enviar', 'Send')))));
  }
  function WCv({
    lang
  }) {
    const rows = L(lang, [['2022–24', 'Mestrado em Direito', 'PPGD/UFSC · Direito dos Grupos Vulneráveis'], ['2023–24', 'Especialização em Direito Público', 'FURB / ESMESC'], ['2017–22', 'Bacharelado em Direito', 'UFSC'], ['2018', 'Iniciação Científica (PIBIC)', 'CNPq/UFSC · Direito Internacional']], [['2022–24', 'Master in Law', 'PPGD/UFSC · Vulnerable Groups'], ['2023–24', 'Specialist in Public Law', 'FURB / ESMESC'], ['2017–22', 'Bachelor of Laws', 'UFSC'], ['2018', 'Research fellowship (PIBIC)', 'CNPq/UFSC · International Law']]);
    return /*#__PURE__*/React.createElement("div", {
      style: stack(14)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Currículo', 'Curriculum')), /*#__PURE__*/React.createElement("div", null, rows.map(([y, t, m], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr',
        gap: 18,
        padding: '12px 0',
        borderTop: '1px solid var(--rule-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 18,
        color: 'var(--text-faint)'
      }
    }, y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.15
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, m))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WJustitia({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink)',
        padding: 12,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia-sky.png",
      alt: "Justitia, pixel art",
      style: {
        maxWidth: '100%',
        maxHeight: 420,
        imageRendering: 'pixelated',
        border: '1px solid var(--gold-2)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 10,
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-faint)',
        letterSpacing: '0.04em'
      }
    }, /*#__PURE__*/React.createElement("span", null, "justitia.png"), /*#__PURE__*/React.createElement("span", null, "1086 \xD7 1448 \xB7 16-bit")));
  }
  function WVo({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        padding: '12px 12px 0'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/avo.png",
      alt: L(lang, 'Ana, ainda menina, com a avó e um troféu', 'Ana as a child, with her grandmother and a trophy'),
      style: {
        display: 'block',
        width: '100%',
        border: '1px solid var(--ink-30)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '13px 4px 16px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16
      }
    }, L(lang, 'com a minha avó', 'with my grandmother')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-faint)',
        marginTop: 3,
        letterSpacing: '0.04em'
      }
    }, L(lang, 'família · onde tudo começou', 'family · where it all began')))));
  }
  Object.assign(window.avapp = window.avapp || {}, {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/window-contents.js", error: String((e && e.message) || e) }); }

// site_lite/desktop-app.js
try { (() => {
/*IIFE*/(function () {
  /* ana vanzin desktop — window manager, menu bar, dock, boot. */
  const {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  } = window.avapp;
  const {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  } = window.avapp;
  const REG = {
    sobre: {
      title: {
        pt: 'sobre.txt',
        en: 'about.txt'
      },
      w: 440,
      Body: WSobre
    },
    tese: {
      title: {
        pt: 'tese',
        en: 'thesis'
      },
      w: 560,
      Body: WTese
    },
    publicacoes: {
      title: {
        pt: 'publicações',
        en: 'publications'
      },
      w: 520,
      Body: WPublicacoes
    },
    ius: {
      title: {
        pt: 'ius gentium',
        en: 'ius gentium'
      },
      w: 440,
      Body: WIus
    },
    curriculo: {
      title: {
        pt: 'currículo',
        en: 'curriculum'
      },
      w: 460,
      Body: WCv
    },
    contato: {
      title: {
        pt: 'contato',
        en: 'contact'
      },
      w: 420,
      Body: WContato
    },
    justitia: {
      title: {
        pt: 'justitia.png',
        en: 'justitia.png'
      },
      w: 360,
      Body: WJustitia
    },
    vo: {
      title: {
        pt: 'vó.jpg',
        en: 'grandma.jpg'
      },
      w: 360,
      Body: WVo
    }
  };
  const regTitle = (id, lang) => REG[id].title[lang] || REG[id].title.pt;
  const DESK_ICONS = [{
    id: 'sobre',
    label: {
      pt: 'sobre.txt',
      en: 'about.txt'
    },
    Icon: DocIcon
  }, {
    id: 'tese',
    label: {
      pt: 'tese',
      en: 'thesis'
    },
    Icon: FolderIcon
  }, {
    id: 'conceitos',
    label: {
      pt: 'conceitos',
      en: 'concepts'
    },
    Icon: SealIcon
  }, {
    id: 'iconocracia',
    label: {
      pt: 'iconocracia',
      en: 'iconocracia'
    },
    Icon: AtlasIcon
  }, {
    id: 'quotes',
    label: {
      pt: 'citações',
      en: 'quotes'
    },
    Icon: QuoteIcon
  }, {
    id: 'trabalhos',
    label: {
      pt: 'trabalhos',
      en: 'works'
    },
    Icon: WorksIcon
  }, {
    id: 'publicacoes',
    label: {
      pt: 'publicações',
      en: 'publications'
    },
    Icon: FolderIcon
  }, {
    id: 'ius',
    label: {
      pt: 'ius gentium',
      en: 'ius gentium'
    },
    Icon: GroupIcon
  }, {
    id: 'curriculo',
    label: {
      pt: 'currículo',
      en: 'curriculum'
    },
    Icon: DocIcon
  }, {
    id: 'justitia',
    label: {
      pt: 'justitia.png',
      en: 'justitia.png'
    },
    Icon: ImageIcon
  }, {
    id: 'vo',
    label: {
      pt: 'vó.jpg',
      en: 'grandma.jpg'
    },
    Icon: ImageIcon
  }, {
    id: 'contato',
    label: {
      pt: 'contato',
      en: 'contact'
    },
    Icon: MailIcon
  }];
  const MENUS = ['sobre', 'tese', 'conceitos', 'publicacoes', 'ius', 'contato'];
  const MENU_LABEL = {
    pt: {
      sobre: 'Sobre',
      tese: 'Tese',
      conceitos: 'Conceitos',
      publicacoes: 'Perfis',
      ius: 'Ius Gentium',
      contato: 'Contato'
    },
    en: {
      sobre: 'About',
      tese: 'Thesis',
      conceitos: 'Concepts',
      publicacoes: 'Profiles',
      ius: 'Ius Gentium',
      contato: 'Contact'
    }
  };
  const UI = {
    pt: {
      welcome: 'bem-vinda',
      tagline: 'direito & iconografia',
      enter: 'entrar →',
      dockHint: 'clique duplo · arraste pela barra',
      dockHintM: 'toque · arraste a barra',
      clk: 'pt-BR'
    },
    en: {
      welcome: 'welcome',
      tagline: 'law & iconography',
      enter: 'enter →',
      dockHint: 'double-click · drag the title bar',
      dockHintM: 'tap · drag the bar',
      clk: 'en-GB'
    }
  };
  const winW = id => Math.min(REG[id].w, (typeof window !== 'undefined' ? window.innerWidth : 1280) - 24);
  function mobForced() {
    try {
      return localStorage.getItem('av_forcemob') === '1' || /[?&]mob/.test(location.search);
    } catch (e) {
      return false;
    }
  }
  function useIsMobile() {
    const [m, setM] = React.useState(() => typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches));
    React.useEffect(() => {
      const mq = window.matchMedia('(max-width: 760px)');
      const fn = () => setM(mobForced() || mq.matches);
      mq.addEventListener('change', fn);
      return () => mq.removeEventListener('change', fn);
    }, []);
    return m;
  }

  /* ---- striped (System-7) title bar ---- */
  function ChromeBox({
    children,
    active,
    onClick,
    label
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseDown: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      "aria-label": label,
      style: {
        width: 15,
        height: 15,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4,
        lineHeight: 0
      }
    }, children);
  }
  function TitleBar({
    title,
    active,
    onClose,
    onMin,
    onDown,
    draggable = true
  }) {
    const stripes = active ? 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)' : 'none';
    const flank = {
      flex: 1,
      height: 11,
      alignSelf: 'center',
      background: stripes,
      opacity: active ? 0.9 : 0,
      minWidth: 12
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: draggable ? onDown : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        height: draggable ? 30 : 38,
        padding: '0 9px',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        cursor: draggable ? 'grab' : 'default',
        userSelect: 'none',
        touchAction: 'none'
      }
    }, /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onClose,
      label: "Fechar"
    }), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        color: active ? 'var(--ink)' : 'var(--text-faint)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: flank
    }), /*#__PURE__*/React.createElement(ChromeBox, {
      active: active,
      onClick: onMin,
      label: "Minimizar"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 1.5,
        background: 'var(--ink)'
      }
    })));
  }
  function WindowFrame({
    win,
    active,
    onClose,
    onMin,
    onFocus,
    onDragStart,
    lang,
    isMobile
  }) {
    const reg = REG[win.id];
    const Body = reg.Body;
    const frame = isMobile ? {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '100%',
      zIndex: 9500 + win.z,
      background: 'var(--paper)',
      borderTop: '1px solid var(--ink)',
      boxShadow: '0 -6px 0 0 var(--ink)'
    } : {
      position: 'absolute',
      left: win.x,
      top: win.y,
      width: winW(win.id),
      zIndex: win.z,
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      boxShadow: active ? '5px 5px 0 0 var(--ink)' : '3px 3px 0 0 var(--ink-50)'
    };
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => onFocus(win.id),
      style: frame
    }, isMobile && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '7px 0 2px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 4,
        background: 'var(--ink-30, rgba(0,0,0,0.25))',
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement(TitleBar, {
      title: regTitle(win.id, lang),
      active: active || isMobile,
      onClose: () => onClose(win.id),
      onMin: () => onMin(win.id),
      onDown: e => onDragStart(e, win.id),
      draggable: !isMobile
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: win.id === 'justitia' ? 12 : 22,
        maxHeight: isMobile ? '64vh' : '58vh',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Body, {
      lang: lang
    })));
  }
  function Clock({
    lang
  }) {
    const [t, setT] = React.useState('');
    React.useEffect(() => {
      const tick = () => setT(new Date().toLocaleTimeString(UI[lang].clk, {
        hour: '2-digit',
        minute: '2-digit'
      }));
      tick();
      const i = setInterval(tick, 15000);
      return () => clearInterval(i);
    }, [lang]);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        letterSpacing: '0.12em',
        fontSize: 13,
        color: 'var(--gold)'
      }
    }, t);
  }
  function Boot({
    onEnter,
    lang
  }) {
    const u = UI[lang];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22,
        textAlign: 'center',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'min(420px, 86vw)',
        border: '1px solid var(--ink)',
        boxShadow: '5px 5px 0 0 var(--ink)',
        background: 'var(--paper)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '0 9px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        display: 'inline-block',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: 'nowrap'
      }
    }, u.welcome), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 11,
        background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '34px 28px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      style: {
        height: 150,
        imageRendering: 'pixelated'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 1,
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        height: 1,
        background: 'var(--rubric)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.22em',
        fontSize: 11,
        color: 'var(--gold)'
      }
    }, u.tagline), /*#__PURE__*/React.createElement("button", {
      onClick: onEnter,
      style: {
        marginTop: 12,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        fontSize: 13,
        padding: '11px 26px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, u.enter))));
  }
  function Desktop() {
    const [booted, setBooted] = React.useState(() => {
      try {
        return localStorage.getItem('av_booted') === '1';
      } catch (e) {
        return false;
      }
    });
    const [wins, setWins] = React.useState(() => {
      const mob = typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches);
      return mob ? [] : [{
        id: 'tese',
        x: 250,
        y: 92,
        z: 2,
        min: false
      }, {
        id: 'justitia',
        x: 760,
        y: 150,
        z: 1,
        min: false
      }];
    });
    const [zTop, setZTop] = React.useState(3);
    const [sel, setSel] = React.useState(null);
    const drag = React.useRef(null);
    const isMobile = useIsMobile();
    const [lang, setLang] = React.useState(() => {
      try {
        const s = localStorage.getItem('av_lang');
        return s === 'pt' || s === 'en' ? s : 'pt';
      } catch (e) {
        return 'pt';
      }
    });
    const setLangP = l => {
      setLang(l);
      try {
        localStorage.setItem('av_lang', l);
      } catch (e) {}
    };
    React.useEffect(() => {
      document.documentElement.lang = lang;
    }, [lang]);
    const enter = () => {
      setBooted(true);
      try {
        localStorage.setItem('av_booted', '1');
      } catch (e) {}
    };
    const focus = id => setWins(ws => {
      const z = zTop;
      setZTop(p => p + 1);
      return ws.map(w => w.id === id ? {
        ...w,
        z,
        min: false
      } : w);
    });
    const open = id => {
      if (id === 'sobre') {
        window.location.href = 'readme.html';
        return;
      }
      if (id === 'conceitos') {
        window.location.href = 'conceitos.html';
        return;
      }
      if (id === 'iconocracia') {
        window.location.href = 'iconocracia/';
        return;
      }
      if (id === 'quotes') {
        window.location.href = 'quotes/';
        return;
      }
      if (id === 'trabalhos') {
        window.location.href = 'trabalhos.html';
        return;
      }
      setSel(id);
      setWins(ws => {
        const z = zTop;
        setZTop(p => p + 1);
        if (ws.some(w => w.id === id)) return ws.map(w => w.id === id ? {
          ...w,
          z,
          min: false
        } : w);
        const n = ws.filter(w => !w.min).length;
        const x = Math.min(160 + n * 32, Math.max(12, window.innerWidth - winW(id) - 16));
        return [...ws, {
          id,
          x,
          y: 78 + n * 28,
          z,
          min: false
        }];
      });
    };
    const close = id => setWins(ws => ws.filter(w => w.id !== id));
    const minimize = id => setWins(ws => ws.map(w => w.id === id ? {
      ...w,
      min: true
    } : w));
    const dragStart = (e, id) => {
      focus(id);
      const w = wins.find(x => x.id === id);
      drag.current = {
        id,
        dx: e.clientX - w.x,
        dy: e.clientY - w.y
      };
    };
    React.useEffect(() => {
      const move = e => {
        if (!drag.current) return;
        const {
          id,
          dx,
          dy
        } = drag.current;
        setWins(ws => ws.map(w => w.id === id ? {
          ...w,
          x: Math.max(0, Math.min(e.clientX - dx, window.innerWidth - 60)),
          y: Math.max(34, Math.min(e.clientY - dy, window.innerHeight - 60))
        } : w));
      };
      const up = () => {
        drag.current = null;
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      return () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
    }, []);
    const visible = wins.filter(w => !w.min);
    const topId = visible.reduce((a, w) => !a || w.z > a.z ? w : a, null)?.id;
    return /*#__PURE__*/React.createElement("div", {
      onPointerDown: () => setSel(null),
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--paper)',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia.png",
      alt: "",
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: '4%',
        bottom: 40,
        height: '80%',
        width: 'auto',
        imageRendering: 'pixelated',
        opacity: 0.15,
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 34,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--ink)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 16px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SealIcon, {
      size: 20
    }), !isMobile && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap'
      }
    }, "ana vanzin")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'var(--rule-hairline)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? 13 : 16,
        overflowX: isMobile ? 'auto' : 'hidden',
        flex: isMobile ? 1 : '0 1 auto',
        minWidth: 0
      }
    }, MENUS.map(id => /*#__PURE__*/React.createElement("button", {
      key: id,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => open(id),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 13.5,
        color: 'var(--ink)',
        padding: '4px 2px',
        whiteSpace: 'nowrap',
        borderBottom: topId === id ? '1.5px solid var(--rubric)' : '1.5px solid transparent'
      }
    }, MENU_LABEL[lang][id]))), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        border: '1px solid var(--ink)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, ['pt', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
      key: l,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => setLangP(l),
      style: {
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: '0.12em',
        padding: '2px 9px',
        lineHeight: 1.6,
        background: lang === l ? 'var(--ink)' : 'var(--paper)',
        color: lang === l ? 'var(--paper)' : 'var(--text-faint)'
      }
    }, l.toUpperCase()))), !isMobile && /*#__PURE__*/React.createElement(Clock, {
      lang: lang
    }))), /*#__PURE__*/React.createElement("div", {
      style: isMobile ? {
        position: 'absolute',
        top: 42,
        left: 0,
        right: 0,
        bottom: 42,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(86px, 1fr))',
        gap: 16,
        padding: '20px 14px 28px',
        zIndex: 1,
        alignContent: 'start'
      } : {
        position: 'absolute',
        top: 50,
        left: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        zIndex: 1
      }
    }, DESK_ICONS.map(({
      id,
      label,
      Icon
    }) => {
      const active = sel === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onPointerDown: e => {
          e.stopPropagation();
          setSel(id);
        },
        onDoubleClick: () => open(id),
        onClick: e => {
          if (isMobile || e.detail === 0) open(id);
        },
        style: {
          background: 'none',
          border: 0,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          width: isMobile ? 'auto' : 84,
          padding: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: isMobile ? {
          width: '100%',
          height: 76,
          background: 'var(--paper)',
          border: '1px solid var(--ink)',
          borderRadius: 3,
          boxShadow: active ? '3px 3px 0 0 var(--rubric)' : '2px 2px 0 0 var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: -3,
          transition: 'box-shadow .1s ease'
        } : {
          padding: 3,
          outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
          outlineOffset: 1
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        size: isMobile ? 46 : 44
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          lineHeight: 1.2,
          textAlign: 'center',
          background: active ? 'var(--rubric)' : 'transparent',
          color: active ? 'var(--paper)' : 'var(--ink)',
          padding: '1px 5px'
        }
      }, label[lang]));
    })), isMobile && visible.length > 0 && /*#__PURE__*/React.createElement("div", {
      onPointerDown: e => {
        e.stopPropagation();
        minimize(topId);
      },
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 9400,
        background: 'rgba(28,25,20,0.34)'
      }
    }), visible.map(w => /*#__PURE__*/React.createElement(WindowFrame, {
      key: w.id,
      win: w,
      active: topId === w.id,
      onClose: close,
      onMin: minimize,
      onFocus: focus,
      onDragStart: dragStart,
      lang: lang,
      isMobile: isMobile
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 36,
        background: 'var(--ink)',
        color: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 12px',
        zIndex: 9000
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.26em',
        fontSize: 11,
        color: 'var(--gold-2)',
        whiteSpace: 'nowrap'
      }
    }, "anavanzin.com"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: 'rgba(242,234,217,0.25)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        overflow: 'hidden'
      }
    }, wins.map(w => {
      const on = !w.min && topId === w.id;
      return /*#__PURE__*/React.createElement("button", {
        key: w.id,
        onPointerDown: e => e.stopPropagation(),
        onClick: () => w.min ? focus(w.id) : topId === w.id ? minimize(w.id) : focus(w.id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: on ? 'var(--paper)' : 'transparent',
          color: on ? 'var(--ink)' : 'var(--paper)',
          border: '1px solid ' + (on ? 'var(--paper)' : 'rgba(242,234,217,0.35)'),
          borderRadius: 0,
          padding: '3px 10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: 12.5,
          whiteSpace: 'nowrap',
          opacity: w.min ? 0.6 : 1
        }
      }, regTitle(w.id, lang));
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 11,
        color: 'rgba(242,234,217,0.5)',
        whiteSpace: 'nowrap'
      }
    }, UI[lang][isMobile ? 'dockHintM' : 'dockHint'])), !booted && /*#__PURE__*/React.createElement(Boot, {
      onEnter: enter,
      lang: lang
    }));
  }
  (window.avapp = window.avapp || {}).Desktop = Desktop;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site_lite/desktop-app.js", error: String((e && e.message) || e) }); }

// site_lite/icons.js
try { (() => {
/*IIFE*/(function () {
  /* Retro desktop icons for the ana vanzin OS — crisp, pixel-leaning, brand palette.
     Exposed on window for sibling babel scripts. */

  const _crisp = {
    shapeRendering: 'crispEdges'
  };
  function FolderIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "11",
      width: "22",
      height: "8",
      fill: "var(--gold)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "26",
      fill: "var(--gold-2)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "16",
      width: "40",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      y1: "22",
      x2: "44",
      y2: "22",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }));
  }
  function DocIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 4 H32 L39 11 V44 H11 Z",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 4 V11 H39 Z",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "20",
      x2: "34",
      y2: "20",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "26",
      x2: "34",
      y2: "26",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "31",
      x2: "34",
      y2: "31",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "36",
      x2: "28",
      y2: "36",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function MailIcon({
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "12",
      width: "38",
      height: "26",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 13 L24 28 L43 13",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 37 L19 24 M43 37 L29 24",
      fill: "none",
      stroke: "var(--ink-50)",
      strokeWidth: "1.2"
    }));
  }
  function GroupIcon({
    size = 46
  }) {
    /* Ius Gentium — a stacked-rings device echoing the seal */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "18",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "24",
      r: "13",
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "22",
      r: "5",
      fill: "var(--rubric)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "22",
      r: "5",
      fill: "var(--ink)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 34 q6 -8 13 -8 q7 0 13 8",
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }));
  }
  function ImageIcon({
    size = 46,
    src = 'assets/pixel-justitia.png'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        background: 'var(--paper)',
        border: '1.6px solid var(--ink)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        height: '112%',
        width: 'auto',
        imageRendering: 'pixelated',
        marginBottom: '-4%'
      }
    }));
  }
  function SealIcon({
    size = 46,
    src = 'assets/sun-seal.svg'
  }) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      width: size,
      height: size,
      style: {
        display: 'block'
      }
    });
  }
  function QuoteIcon({
    size = 46
  }) {
    /* Citações — open quotation marks over a citation rule */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "32",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "8",
      width: "36",
      height: "6",
      fill: "var(--gold)"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "14",
      x2: "42",
      y2: "14",
      stroke: "var(--ink)",
      strokeWidth: "1.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 20 h6 v7 h-3 l-3 4 z",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      y1: "35",
      x2: "35",
      y2: "35",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }));
  }
  function AtlasIcon({
    size = 46
  }) {
    /* ICONOCRACIA atlas — a Warburg mounting board with specimen tiles */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "6",
      width: "38",
      height: "36",
      fill: "var(--ink)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "var(--gold-2)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper-deep)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "27",
      width: "12",
      height: "11",
      fill: "var(--paper)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "10",
      width: "12",
      height: "11",
      fill: "none",
      stroke: "var(--rubric)",
      strokeWidth: "1.6"
    }));
  }
  function WorksIcon({
    size = 46
  }) {
    /* Trabalhos — a dossier of stacked sheets with a rubric clip */
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      style: _crisp,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "10",
      width: "26",
      height: "31",
      fill: "var(--paper-deep)",
      stroke: "var(--ink)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "7",
      width: "26",
      height: "31",
      fill: "var(--paper)",
      stroke: "var(--ink)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22",
      y: "4",
      width: "8",
      height: "5",
      fill: "var(--rubric)",
      stroke: "var(--ink)",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "17",
      x2: "34",
      y2: "17",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "22",
      x2: "34",
      y2: "22",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "27",
      x2: "30",
      y2: "27",
      stroke: "var(--ink-50)",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "32",
      x2: "34",
      y2: "32",
      stroke: "var(--gold)",
      strokeWidth: "1.6"
    }));
  }
  function CloseBox({
    active
  }) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 13,
        height: 13,
        border: '1.5px solid var(--ink)',
        background: 'var(--paper)',
        display: 'inline-block',
        boxSizing: 'border-box',
        opacity: active ? 1 : 0.4
      }
    });
  }
  Object.assign(window.avapp = window.avapp || {}, {
    FolderIcon,
    DocIcon,
    MailIcon,
    GroupIcon,
    ImageIcon,
    SealIcon,
    QuoteIcon,
    AtlasIcon,
    WorksIcon,
    CloseBox
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site_lite/icons.js", error: String((e && e.message) || e) }); }

// site_lite/window-contents.js
try { (() => {
/*IIFE*/(function () {
  /* Window contents for the ana vanzin desktop. Compose brand components.
     Bilingual: each component takes { lang } ('pt' | 'en'). */
  const _DS = window.AnaVanzinDesignSystem_b45a86;
  const {
    Eyebrow,
    RubricLink,
    PublicationEntry,
    FootnoteRef,
    Footnotes
  } = _DS;
  const L = (lang, pt, en) => lang === 'en' ? en : pt;
  const win_h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 1.1,
    margin: 0
  };
  const win_lead = {
    fontSize: 16,
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '60ch'
  };
  const win_p = {
    fontSize: 15,
    lineHeight: 1.62,
    margin: 0,
    color: 'var(--text-muted)',
    maxWidth: '60ch'
  };
  const stack = g => ({
    display: 'flex',
    flexDirection: 'column',
    gap: g
  });
  function WSobre({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Sobre', 'About')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, "ana vanzin"), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'Advogada e historiadora do direito. Doutoranda no PPGD/UFSC, com pesquisa em história e iconografia jurídica.', 'Lawyer and legal historian. PhD candidate at PPGD/UFSC, researching legal history and iconography.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A tese ", /*#__PURE__*/React.createElement("em", null, "Iconocracia"), " estuda as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 entre o incun\xE1bulo e o constitucionalismo moderno."), /*#__PURE__*/React.createElement(React.Fragment, null, "The thesis ", /*#__PURE__*/React.createElement("em", null, "Iconocracy"), " studies the female allegories of law \u2014 Justitia, the Republic-as-woman \u2014 between the incunabulum and modern constitutionalism."))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14,
        ...stack(6)
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Atuação', 'Focus')), /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        margin: 0
      }
    }, L(lang, 'Direito público · história constitucional · patrimônio cultural', 'Public law · constitutional history · cultural heritage'))));
  }
  function WTese({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/banner.png",
      alt: L(lang, 'Alegoria Feminina na História da Cultura Jurídica — Projeto de Doutorado, PPGD/UFSC', 'Female Allegory in the History of Legal Culture — PhD Project, PPGD/UFSC'),
      style: {
        display: 'block',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Tese · Iconocracia', 'Thesis · Iconocracy')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'A venda como sátira', 'The blindfold as satire')), /*#__PURE__*/React.createElement("div", {
      style: stack(12)
    }, /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A primeira Justitia vendada n\xE3o nasceu como virtude \u2014 nasceu como s\xE1tira, na xilogravura de 1494 do ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "The first blindfolded Justitia was not born as a virtue \u2014 it was born as satire, in the 1494 woodcut of the ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."))), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Investiga-se como a venda, o gume e a balança foram lidos, satirizados e normalizados na cultura jurídica europeia.', 'It investigates how the blindfold, the blade and the scales were read, satirised and normalised in European legal culture.')), /*#__PURE__*/React.createElement(Footnotes, {
      notes: ["Brant, Sebastian. Das Narrenschiff. Basel, 1494, fol. 22v."],
      style: {
        marginTop: 8
      }
    })));
  }
  function WPublicacoes({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(8)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Comunicações & traduções', 'Talks & translations')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: "Images of the Nation in Modern Legal Iconography",
      meta: L(lang, 'Comunicação · Germania, Britannia, Marianne e o uso simbólico do feminino.', 'Talk · Germania, Britannia, Marianne and the symbolic use of the feminine.')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'História do Direito das Mulheres', 'The History of Women’s Legal Rights'),
      meta: L(lang, 'XIX Encontro de História do Direito · UFSC', '19th Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Direito, fascismos e neofascismos entre Itália e Brasil', 'Law, Fascism and Neo-Fascism between Italy and Brazil'),
      meta: L(lang, 'XXI Encontro de História do Direito · UFSC', '21st Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Monumentos do Direito Internacional (trad.)', 'Monuments of International Law (transl.)'),
      meta: L(lang, 'Tradução de Luigi Lacchè · Rev. Bras. de História e Ciências Sociais.', 'Translation of Luigi Lacchè · Braz. J. of History & Social Sciences.')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WIus({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ius Gentium"), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'Grupo de pesquisa', 'Research group')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'História da cultura jurídica, PPGD/UFSC. Linha: iconografia e iconologia do direito.', 'Legal-culture history, PPGD/UFSC. Strand: iconography and iconology of law.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Encontros quinzenais, abertos a graduação e pós-graduação.', 'Fortnightly meetings, open to undergraduate and graduate students.')), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "#",
      external: true
    }, L(lang, 'Diretório CNPq', 'CNPq Directory'))));
  }
  function WContato({
    lang
  }) {
    const [sent, setSent] = React.useState(false);
    const input = {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      background: 'var(--paper)',
      border: '1px solid var(--ink-50)',
      borderRadius: 0,
      padding: '8px 10px',
      outlineColor: 'var(--rubric)',
      width: '100%',
      boxSizing: 'border-box'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Contato', 'Contact')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "mailto:anavvanzin@outlook.com"
    }, "anavvanzin@outlook.com")), sent ? /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14
      }
    }, L(lang, 'Mensagem registrada. Resposta em até cinco dias úteis.', 'Message received. Reply within five business days.')) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        ...stack(12),
        maxWidth: 340
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Nome', 'Name')), /*#__PURE__*/React.createElement("input", {
      required: true,
      style: input
    })), /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Mensagem', 'Message')), /*#__PURE__*/React.createElement("textarea", {
      required: true,
      rows: "3",
      style: {
        ...input,
        resize: 'vertical'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 13,
        padding: '9px 20px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, L(lang, 'Enviar', 'Send')))));
  }
  function WCv({
    lang
  }) {
    const rows = L(lang, [['2022–24', 'Mestrado em Direito', 'PPGD/UFSC · Direito dos Grupos Vulneráveis'], ['2023–24', 'Especialização em Direito Público', 'FURB / ESMESC'], ['2017–22', 'Bacharelado em Direito', 'UFSC'], ['2018', 'Iniciação Científica (PIBIC)', 'CNPq/UFSC · Direito Internacional']], [['2022–24', 'Master in Law', 'PPGD/UFSC · Vulnerable Groups'], ['2023–24', 'Specialist in Public Law', 'FURB / ESMESC'], ['2017–22', 'Bachelor of Laws', 'UFSC'], ['2018', 'Research fellowship (PIBIC)', 'CNPq/UFSC · International Law']]);
    return /*#__PURE__*/React.createElement("div", {
      style: stack(14)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Currículo', 'Curriculum')), /*#__PURE__*/React.createElement("div", null, rows.map(([y, t, m], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr',
        gap: 18,
        padding: '12px 0',
        borderTop: '1px solid var(--rule-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 18,
        color: 'var(--text-faint)'
      }
    }, y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.15
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, m))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WJustitia({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink)',
        padding: 12,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia-sky.png",
      alt: "Justitia, pixel art",
      style: {
        maxWidth: '100%',
        maxHeight: 420,
        imageRendering: 'pixelated',
        border: '1px solid var(--gold-2)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 10,
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-faint)',
        letterSpacing: '0.04em'
      }
    }, /*#__PURE__*/React.createElement("span", null, "justitia.png"), /*#__PURE__*/React.createElement("span", null, "1086 \xD7 1448 \xB7 16-bit")));
  }
  function WVo({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        padding: '12px 12px 0'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/avo.png",
      alt: L(lang, 'Ana, ainda menina, com a avó e um troféu', 'Ana as a child, with her grandmother and a trophy'),
      style: {
        display: 'block',
        width: '100%',
        border: '1px solid var(--ink-30)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '13px 4px 16px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16
      }
    }, L(lang, 'com a minha avó', 'with my grandmother')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-faint)',
        marginTop: 3,
        letterSpacing: '0.04em'
      }
    }, L(lang, 'família · onde tudo começou', 'family · where it all began')))));
  }
  Object.assign(window.avapp = window.avapp || {}, {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site_lite/window-contents.js", error: String((e && e.message) || e) }); }

// ui_kits/desktop/Desktop.jsx
try { (() => {
/* ana vanzin desktop — window manager, menu bar, dock, boot. */
const {
  FolderIcon,
  DocIcon,
  MailIcon,
  GroupIcon,
  ImageIcon,
  SealIcon,
  QuoteIcon,
  AtlasIcon,
  WorksIcon,
  CloseBox
} = window;
const {
  WSobre,
  WTese,
  WPublicacoes,
  WIus,
  WContato,
  WJustitia,
  WCv,
  WVo
} = window;
const REG = {
  sobre: {
    title: {
      pt: 'sobre.txt',
      en: 'about.txt'
    },
    w: 440,
    Body: WSobre
  },
  tese: {
    title: {
      pt: 'tese',
      en: 'thesis'
    },
    w: 560,
    Body: WTese
  },
  publicacoes: {
    title: {
      pt: 'publicações',
      en: 'publications'
    },
    w: 520,
    Body: WPublicacoes
  },
  ius: {
    title: {
      pt: 'ius gentium',
      en: 'ius gentium'
    },
    w: 440,
    Body: WIus
  },
  curriculo: {
    title: {
      pt: 'currículo',
      en: 'curriculum'
    },
    w: 460,
    Body: WCv
  },
  contato: {
    title: {
      pt: 'contato',
      en: 'contact'
    },
    w: 420,
    Body: WContato
  },
  justitia: {
    title: {
      pt: 'justitia.png',
      en: 'justitia.png'
    },
    w: 360,
    Body: WJustitia
  },
  vo: {
    title: {
      pt: 'vó.jpg',
      en: 'grandma.jpg'
    },
    w: 360,
    Body: WVo
  }
};
const regTitle = (id, lang) => REG[id].title[lang] || REG[id].title.pt;
const DESK_ICONS = [{
  id: 'sobre',
  label: {
    pt: 'sobre.txt',
    en: 'about.txt'
  },
  Icon: DocIcon
}, {
  id: 'tese',
  label: {
    pt: 'tese',
    en: 'thesis'
  },
  Icon: FolderIcon
}, {
  id: 'conceitos',
  label: {
    pt: 'conceitos',
    en: 'concepts'
  },
  Icon: SealIcon
}, {
  id: 'iconocracia',
  label: {
    pt: 'iconocracia',
    en: 'iconocracia'
  },
  Icon: AtlasIcon
}, {
  id: 'quotes',
  label: {
    pt: 'citações',
    en: 'quotes'
  },
  Icon: QuoteIcon
}, {
  id: 'trabalhos',
  label: {
    pt: 'trabalhos',
    en: 'works'
  },
  Icon: WorksIcon
}, {
  id: 'publicacoes',
  label: {
    pt: 'publicações',
    en: 'publications'
  },
  Icon: FolderIcon
}, {
  id: 'ius',
  label: {
    pt: 'ius gentium',
    en: 'ius gentium'
  },
  Icon: GroupIcon
}, {
  id: 'curriculo',
  label: {
    pt: 'currículo',
    en: 'curriculum'
  },
  Icon: DocIcon
}, {
  id: 'justitia',
  label: {
    pt: 'justitia.png',
    en: 'justitia.png'
  },
  Icon: ImageIcon
}, {
  id: 'vo',
  label: {
    pt: 'vó.jpg',
    en: 'grandma.jpg'
  },
  Icon: ImageIcon
}, {
  id: 'contato',
  label: {
    pt: 'contato',
    en: 'contact'
  },
  Icon: MailIcon
}];
const MENUS = ['sobre', 'tese', 'conceitos', 'publicacoes', 'ius', 'contato'];
const MENU_LABEL = {
  pt: {
    sobre: 'Sobre',
    tese: 'Tese',
    conceitos: 'Conceitos',
    publicacoes: 'Perfis',
    ius: 'Ius Gentium',
    contato: 'Contato'
  },
  en: {
    sobre: 'About',
    tese: 'Thesis',
    conceitos: 'Concepts',
    publicacoes: 'Profiles',
    ius: 'Ius Gentium',
    contato: 'Contact'
  }
};
const UI = {
  pt: {
    welcome: 'bem-vinda',
    tagline: 'direito & iconografia',
    enter: 'entrar →',
    dockHint: 'clique duplo · arraste pela barra',
    dockHintM: 'toque · arraste a barra',
    clk: 'pt-BR'
  },
  en: {
    welcome: 'welcome',
    tagline: 'law & iconography',
    enter: 'enter →',
    dockHint: 'double-click · drag the title bar',
    dockHintM: 'tap · drag the bar',
    clk: 'en-GB'
  }
};
const winW = id => Math.min(REG[id].w, (typeof window !== 'undefined' ? window.innerWidth : 1280) - 24);
function mobForced() {
  try {
    return localStorage.getItem('av_forcemob') === '1' || /[?&]mob/.test(location.search);
  } catch (e) {
    return false;
  }
}
function useIsMobile() {
  const [m, setM] = React.useState(() => typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches));
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const fn = () => setM(mobForced() || mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return m;
}

/* ---- striped (System-7) title bar ---- */
function ChromeBox({
  children,
  active,
  onClick,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseDown: e => e.stopPropagation(),
    onPointerDown: e => e.stopPropagation(),
    "aria-label": label,
    style: {
      width: 15,
      height: 15,
      border: '1.5px solid var(--ink)',
      background: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      cursor: 'pointer',
      boxSizing: 'border-box',
      opacity: active ? 1 : 0.4,
      lineHeight: 0
    }
  }, children);
}
function TitleBar({
  title,
  active,
  onClose,
  onMin,
  onDown,
  draggable = true
}) {
  const stripes = active ? 'var(--chrome-stripe, repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px))' : 'none';
  const flank = {
    flex: 1,
    height: 11,
    alignSelf: 'center',
    background: stripes,
    opacity: active ? 0.9 : 0,
    minWidth: 12
  };
  return /*#__PURE__*/React.createElement("div", {
    onPointerDown: draggable ? onDown : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: draggable ? 30 : 38,
      padding: '0 9px',
      background: 'var(--chrome-bg, var(--paper))',
      borderBottom: 'var(--win-border, 1px solid var(--ink))',
      cursor: draggable ? 'grab' : 'default',
      userSelect: 'none',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement(ChromeBox, {
    active: active,
    onClick: onClose,
    label: "Fechar"
  }), /*#__PURE__*/React.createElement("div", {
    style: flank
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      color: active ? 'var(--ink)' : 'var(--text-faint)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: flank
  }), /*#__PURE__*/React.createElement(ChromeBox, {
    active: active,
    onClick: onMin,
    label: "Minimizar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 1.5,
      background: 'var(--ink)'
    }
  })));
}
function WindowFrame({
  win,
  active,
  onClose,
  onMin,
  onFocus,
  onDragStart,
  lang,
  isMobile
}) {
  const reg = REG[win.id];
  const Body = reg.Body;
  const frame = isMobile ? {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: '100%',
    zIndex: 9500 + win.z,
    background: 'var(--paper)',
    borderTop: '1px solid var(--ink)',
    boxShadow: '0 -6px 0 0 var(--ink)'
  } : {
    position: 'absolute',
    left: win.x,
    top: win.y,
    width: winW(win.id),
    zIndex: win.z,
    background: 'var(--win-bg, var(--paper))',
    border: 'var(--win-border, 1px solid var(--ink))',
    borderRadius: 'var(--win-radius, 0px)',
    boxShadow: active ? 'var(--win-shadow, 5px 5px 0 0 var(--ink))' : 'var(--win-shadow-soft, 3px 3px 0 0 var(--ink-50))'
  };
  return /*#__PURE__*/React.createElement("div", {
    onPointerDown: () => onFocus(win.id),
    style: frame
  }, isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '7px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 4,
      background: 'var(--ink-30, rgba(0,0,0,0.25))',
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement(TitleBar, {
    title: regTitle(win.id, lang),
    active: active || isMobile,
    onClose: () => onClose(win.id),
    onMin: () => onMin(win.id),
    onDown: e => onDragStart(e, win.id),
    draggable: !isMobile
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: win.id === 'justitia' ? 12 : 22,
      maxHeight: isMobile ? '64vh' : '58vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Body, {
    lang: lang
  })));
}
function Clock({
  lang
}) {
  const [t, setT] = React.useState('');
  React.useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString(UI[lang].clk, {
      hour: '2-digit',
      minute: '2-digit'
    }));
    tick();
    const i = setInterval(tick, 15000);
    return () => clearInterval(i);
  }, [lang]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '0.12em',
      fontSize: 13,
      color: 'var(--gold)'
    }
  }, t);
}
function Boot({
  onEnter,
  lang
}) {
  const u = UI[lang];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'var(--paper)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      textAlign: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(420px, 86vw)',
      border: '1px solid var(--ink)',
      boxShadow: '5px 5px 0 0 var(--ink)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      borderBottom: '1px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '0 9px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      border: '1.5px solid var(--ink)',
      display: 'inline-block',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 11,
      background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, u.welcome), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 11,
      background: 'repeating-linear-gradient(to bottom, var(--ink) 0 1px, transparent 1px 3px)',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 28px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pixel-justitia.png",
    alt: "",
    style: {
      height: 150,
      imageRendering: 'pixelated'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1,
      margin: 0,
      whiteSpace: 'nowrap'
    }
  }, "ana vanzin"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 1,
      background: 'var(--rubric)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      fontSize: 11,
      color: 'var(--gold)'
    }
  }, u.tagline), /*#__PURE__*/React.createElement("button", {
    onClick: onEnter,
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: 13,
      padding: '11px 26px',
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer'
    }
  }, u.enter))));
}
function Desktop() {
  const [booted, setBooted] = React.useState(() => {
    try {
      return localStorage.getItem('av_booted') === '1';
    } catch (e) {
      return false;
    }
  });
  const [wins, setWins] = React.useState(() => {
    const mob = typeof window !== 'undefined' && (mobForced() || window.matchMedia('(max-width: 760px)').matches);
    return mob ? [] : [{
      id: 'tese',
      x: 250,
      y: 92,
      z: 2,
      min: false
    }, {
      id: 'justitia',
      x: 760,
      y: 150,
      z: 1,
      min: false
    }];
  });
  const [zTop, setZTop] = React.useState(3);
  const [sel, setSel] = React.useState(null);
  const drag = React.useRef(null);
  const isMobile = useIsMobile();
  const [lang, setLang] = React.useState(() => {
    try {
      const s = localStorage.getItem('av_lang');
      return s === 'pt' || s === 'en' ? s : 'pt';
    } catch (e) {
      return 'pt';
    }
  });
  const setLangP = l => {
    setLang(l);
    try {
      localStorage.setItem('av_lang', l);
    } catch (e) {}
  };
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const enter = () => {
    setBooted(true);
    try {
      localStorage.setItem('av_booted', '1');
    } catch (e) {}
  };
  const focus = id => setWins(ws => {
    const z = zTop;
    setZTop(p => p + 1);
    return ws.map(w => w.id === id ? {
      ...w,
      z,
      min: false
    } : w);
  });
  const open = id => {
    if (id === 'sobre') {
      window.location.href = 'readme.html';
      return;
    }
    if (id === 'conceitos') {
      window.location.href = 'conceitos.html';
      return;
    }
    if (id === 'iconocracia') {
      window.location.href = 'iconocracia/';
      return;
    }
    if (id === 'quotes') {
      window.location.href = 'quotes/';
      return;
    }
    if (id === 'trabalhos') {
      window.location.href = 'trabalhos.html';
      return;
    }
    setSel(id);
    setWins(ws => {
      const z = zTop;
      setZTop(p => p + 1);
      if (ws.some(w => w.id === id)) return ws.map(w => w.id === id ? {
        ...w,
        z,
        min: false
      } : w);
      const n = ws.filter(w => !w.min).length;
      const x = Math.min(160 + n * 32, Math.max(12, window.innerWidth - winW(id) - 16));
      return [...ws, {
        id,
        x,
        y: 78 + n * 28,
        z,
        min: false
      }];
    });
  };
  const close = id => setWins(ws => ws.filter(w => w.id !== id));
  const minimize = id => setWins(ws => ws.map(w => w.id === id ? {
    ...w,
    min: true
  } : w));
  const dragStart = (e, id) => {
    focus(id);
    const w = wins.find(x => x.id === id);
    drag.current = {
      id,
      dx: e.clientX - w.x,
      dy: e.clientY - w.y
    };
  };
  React.useEffect(() => {
    const move = e => {
      if (!drag.current) return;
      const {
        id,
        dx,
        dy
      } = drag.current;
      setWins(ws => ws.map(w => w.id === id ? {
        ...w,
        x: Math.max(0, Math.min(e.clientX - dx, window.innerWidth - 60)),
        y: Math.max(34, Math.min(e.clientY - dy, window.innerHeight - 60))
      } : w));
    };
    const up = () => {
      drag.current = null;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, []);
  const visible = wins.filter(w => !w.min);
  const topId = visible.reduce((a, w) => !a || w.z > a.z ? w : a, null)?.id;
  return /*#__PURE__*/React.createElement("div", {
    className: "av-desk",
    onPointerDown: () => setSel(null),
    style: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--paper)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "av-wall",
    src: "../../assets/pixel-justitia.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '4%',
      bottom: 40,
      height: '80%',
      width: 'auto',
      imageRendering: 'pixelated',
      opacity: 0.15,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 34,
      background: 'var(--paper)',
      borderBottom: '1px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px',
      zIndex: 9000
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SealIcon, {
    size: 20
  }), !isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap'
    }
  }, "ana vanzin")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--rule-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? 13 : 16,
      overflowX: isMobile ? 'auto' : 'hidden',
      flex: isMobile ? 1 : '0 1 auto',
      minWidth: 0
    }
  }, MENUS.map(id => /*#__PURE__*/React.createElement("button", {
    key: id,
    onPointerDown: e => e.stopPropagation(),
    onClick: () => open(id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--ink)',
      padding: '4px 2px',
      whiteSpace: 'nowrap',
      borderBottom: topId === id ? '1.5px solid var(--rubric)' : '1.5px solid transparent'
    }
  }, MENU_LABEL[lang][id]))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--ink)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, ['pt', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onPointerDown: e => e.stopPropagation(),
    onClick: () => setLangP(l),
    style: {
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      padding: '2px 9px',
      lineHeight: 1.6,
      background: lang === l ? 'var(--ink)' : 'var(--paper)',
      color: lang === l ? 'var(--paper)' : 'var(--text-faint)'
    }
  }, l.toUpperCase()))), !isMobile && /*#__PURE__*/React.createElement(Clock, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    style: isMobile ? {
      position: 'absolute',
      top: 42,
      left: 0,
      right: 0,
      bottom: 42,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(86px, 1fr))',
      gap: 16,
      padding: '20px 14px 28px',
      zIndex: 1,
      alignContent: 'start'
    } : {
      position: 'absolute',
      top: 50,
      left: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      zIndex: 1
    }
  }, DESK_ICONS.map(({
    id,
    label,
    Icon
  }) => {
    const active = sel === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onPointerDown: e => {
        e.stopPropagation();
        setSel(id);
      },
      onDoubleClick: () => open(id),
      onClick: e => {
        if (isMobile || e.detail === 0) open(id);
      },
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        width: isMobile ? 'auto' : 84,
        padding: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: isMobile ? {
        width: '100%',
        height: 76,
        background: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 3,
        boxShadow: active ? '3px 3px 0 0 var(--rubric)' : '2px 2px 0 0 var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
        outlineOffset: -3,
        transition: 'box-shadow .1s ease'
      } : {
        padding: 3,
        outline: active ? '1.5px solid var(--rubric)' : '1.5px solid transparent',
        outlineOffset: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: isMobile ? 46 : 44
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.2,
        textAlign: 'center',
        background: active ? 'var(--rubric)' : 'transparent',
        color: active ? 'var(--paper)' : 'var(--ink)',
        padding: '1px 5px'
      }
    }, label[lang]));
  })), isMobile && visible.length > 0 && /*#__PURE__*/React.createElement("div", {
    onPointerDown: e => {
      e.stopPropagation();
      minimize(topId);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 9400,
      background: 'rgba(28,25,20,0.34)'
    }
  }), visible.map(w => /*#__PURE__*/React.createElement(WindowFrame, {
    key: w.id,
    win: w,
    active: topId === w.id,
    onClose: close,
    onMin: minimize,
    onFocus: focus,
    onDragStart: dragStart,
    lang: lang,
    isMobile: isMobile
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 36,
      background: 'var(--ink)',
      color: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      zIndex: 9000
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.26em',
      fontSize: 11,
      color: 'var(--gold-2)',
      whiteSpace: 'nowrap'
    }
  }, "anavanzin.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'rgba(242,234,217,0.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      overflow: 'hidden'
    }
  }, wins.map(w => {
    const on = !w.min && topId === w.id;
    return /*#__PURE__*/React.createElement("button", {
      key: w.id,
      onPointerDown: e => e.stopPropagation(),
      onClick: () => w.min ? focus(w.id) : topId === w.id ? minimize(w.id) : focus(w.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: on ? 'var(--paper)' : 'transparent',
        color: on ? 'var(--ink)' : 'var(--paper)',
        border: '1px solid ' + (on ? 'var(--paper)' : 'rgba(242,234,217,0.35)'),
        borderRadius: 0,
        padding: '3px 10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        whiteSpace: 'nowrap',
        opacity: w.min ? 0.6 : 1
      }
    }, regTitle(w.id, lang));
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'rgba(242,234,217,0.5)',
      whiteSpace: 'nowrap'
    }
  }, UI[lang][isMobile ? 'dockHintM' : 'dockHint'])), !booted && /*#__PURE__*/React.createElement(Boot, {
    onEnter: enter,
    lang: lang
  }));
}
window.Desktop = Desktop;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/Desktop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop/WindowContents.jsx
try { (() => {
/* Window contents for the ana vanzin desktop. Compose brand components.
   Bilingual: each component takes { lang } ('pt' | 'en'). */
const _DS = window.AnaVanzinDesignSystem_b45a86;
const {
  Eyebrow,
  RubricLink,
  PublicationEntry,
  FootnoteRef,
  Footnotes
} = _DS;
const L = (lang, pt, en) => lang === 'en' ? en : pt;
const win_h2 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: 26,
  lineHeight: 1.1,
  margin: 0
};
const win_lead = {
  fontSize: 16,
  lineHeight: 1.6,
  margin: 0,
  maxWidth: '60ch'
};
const win_p = {
  fontSize: 15,
  lineHeight: 1.62,
  margin: 0,
  color: 'var(--text-muted)',
  maxWidth: '60ch'
};
const stack = g => ({
  display: 'flex',
  flexDirection: 'column',
  gap: g
});
function WSobre({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(16)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Sobre', 'About')), /*#__PURE__*/React.createElement("h2", {
    style: win_h2
  }, "ana vanzin"), /*#__PURE__*/React.createElement("p", {
    style: win_lead
  }, L(lang, 'Advogada e historiadora do direito. Doutoranda no PPGD/UFSC, com pesquisa em história e iconografia jurídica.', 'Lawyer and legal historian. PhD candidate at PPGD/UFSC, researching legal history and iconography.')), /*#__PURE__*/React.createElement("p", {
    style: win_p
  }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A tese ", /*#__PURE__*/React.createElement("em", null, "Iconocracia"), " estuda as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 entre o incun\xE1bulo e o constitucionalismo moderno."), /*#__PURE__*/React.createElement(React.Fragment, null, "The thesis ", /*#__PURE__*/React.createElement("em", null, "Iconocracy"), " studies the female allegories of law \u2014 Justitia, the Republic-as-woman \u2014 between the incunabulum and modern constitutionalism."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule-hairline)',
      paddingTop: 14,
      ...stack(6)
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 11
    }
  }, L(lang, 'Atuação', 'Focus')), /*#__PURE__*/React.createElement("p", {
    style: {
      ...win_p,
      margin: 0
    }
  }, L(lang, 'Direito público · história constitucional · patrimônio cultural', 'Public law · constitutional history · cultural heritage'))));
}
function WTese({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(16)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--ink)',
      boxShadow: '3px 3px 0 0 var(--ink)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/banner.png",
    alt: L(lang, 'Alegoria Feminina na História da Cultura Jurídica — Projeto de Doutorado, PPGD/UFSC', 'Female Allegory in the History of Legal Culture — PhD Project, PPGD/UFSC'),
    style: {
      display: 'block',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Tese · Iconocracia', 'Thesis · Iconocracy')), /*#__PURE__*/React.createElement("h2", {
    style: win_h2
  }, L(lang, 'A venda como sátira', 'The blindfold as satire')), /*#__PURE__*/React.createElement("div", {
    style: stack(12)
  }, /*#__PURE__*/React.createElement("p", {
    style: win_lead
  }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A primeira Justitia vendada n\xE3o nasceu como virtude \u2014 nasceu como s\xE1tira, na xilogravura de 1494 do ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
    n: 1
  }), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "The first blindfolded Justitia was not born as a virtue \u2014 it was born as satire, in the 1494 woodcut of the ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
    n: 1
  }), "."))), /*#__PURE__*/React.createElement("p", {
    style: win_p
  }, L(lang, 'Investiga-se como a venda, o gume e a balança foram lidos, satirizados e normalizados na cultura jurídica europeia.', 'It investigates how the blindfold, the blade and the scales were read, satirised and normalised in European legal culture.')), /*#__PURE__*/React.createElement(Footnotes, {
    notes: ["Brant, Sebastian. Das Narrenschiff. Basel, 1494, fol. 22v."],
    style: {
      marginTop: 8
    }
  })));
}
function WPublicacoes({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(8)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Comunicações & traduções', 'Talks & translations')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2024",
    title: "Images of the Nation in Modern Legal Iconography",
    meta: L(lang, 'Comunicação · Germania, Britannia, Marianne e o uso simbólico do feminino.', 'Talk · Germania, Britannia, Marianne and the symbolic use of the feminine.')
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2024",
    title: L(lang, 'História do Direito das Mulheres', 'The History of Women’s Legal Rights'),
    meta: L(lang, 'XIX Encontro de História do Direito · UFSC', '19th Meeting on Legal History · UFSC')
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2024",
    title: L(lang, 'Direito, fascismos e neofascismos entre Itália e Brasil', 'Law, Fascism and Neo-Fascism between Italy and Brazil'),
    meta: L(lang, 'XXI Encontro de História do Direito · UFSC', '21st Meeting on Legal History · UFSC')
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2024",
    title: L(lang, 'Monumentos do Direito Internacional (trad.)', 'Monuments of International Law (transl.)'),
    meta: L(lang, 'Tradução de Luigi Lacchè · Rev. Bras. de História e Ciências Sociais.', 'Translation of Luigi Lacchè · Braz. J. of History & Social Sciences.')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(RubricLink, {
    href: "http://lattes.cnpq.br/9079096818962275",
    external: true
  }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
}
function WIus({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(16)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ius Gentium"), /*#__PURE__*/React.createElement("h2", {
    style: win_h2
  }, L(lang, 'Grupo de pesquisa', 'Research group')), /*#__PURE__*/React.createElement("p", {
    style: win_lead
  }, L(lang, 'História da cultura jurídica, PPGD/UFSC. Linha: iconografia e iconologia do direito.', 'Legal-culture history, PPGD/UFSC. Strand: iconography and iconology of law.')), /*#__PURE__*/React.createElement("p", {
    style: win_p
  }, L(lang, 'Encontros quinzenais, abertos a graduação e pós-graduação.', 'Fortnightly meetings, open to undergraduate and graduate students.')), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(RubricLink, {
    href: "#",
    external: true
  }, L(lang, 'Diretório CNPq', 'CNPq Directory'))));
}
function WContato({
  lang
}) {
  const [sent, setSent] = React.useState(false);
  const input = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--ink)',
    background: 'var(--paper)',
    border: '1px solid var(--ink-50)',
    borderRadius: 0,
    padding: '8px 10px',
    outlineColor: 'var(--rubric)',
    width: '100%',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: stack(16)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Contato', 'Contact')), /*#__PURE__*/React.createElement("p", {
    style: win_lead
  }, /*#__PURE__*/React.createElement(RubricLink, {
    href: "mailto:anavvanzin@outlook.com"
  }, "anavvanzin@outlook.com")), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...win_p,
      borderTop: '1px solid var(--rule-hairline)',
      paddingTop: 14
    }
  }, L(lang, 'Mensagem registrada. Resposta em até cinco dias úteis.', 'Message received. Reply within five business days.')) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      ...stack(12),
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: stack(6)
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 11
    }
  }, L(lang, 'Nome', 'Name')), /*#__PURE__*/React.createElement("input", {
    required: true,
    style: input
  })), /*#__PURE__*/React.createElement("label", {
    style: stack(6)
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 11
    }
  }, L(lang, 'Mensagem', 'Message')), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "3",
    style: {
      ...input,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 13,
      padding: '9px 20px',
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)',
      borderRadius: 0,
      cursor: 'pointer'
    }
  }, L(lang, 'Enviar', 'Send')))));
}
function WCv({
  lang
}) {
  const rows = L(lang, [['2022–24', 'Mestrado em Direito', 'PPGD/UFSC · Direito dos Grupos Vulneráveis'], ['2023–24', 'Especialização em Direito Público', 'FURB / ESMESC'], ['2017–22', 'Bacharelado em Direito', 'UFSC'], ['2018', 'Iniciação Científica (PIBIC)', 'CNPq/UFSC · Direito Internacional']], [['2022–24', 'Master in Law', 'PPGD/UFSC · Vulnerable Groups'], ['2023–24', 'Specialist in Public Law', 'FURB / ESMESC'], ['2017–22', 'Bachelor of Laws', 'UFSC'], ['2018', 'Research fellowship (PIBIC)', 'CNPq/UFSC · International Law']]);
  return /*#__PURE__*/React.createElement("div", {
    style: stack(14)
  }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Currículo', 'Curriculum')), /*#__PURE__*/React.createElement("div", null, rows.map(([y, t, m], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: 18,
      padding: '12px 0',
      borderTop: '1px solid var(--rule-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--text-faint)'
    }
  }, y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.15
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(RubricLink, {
    href: "http://lattes.cnpq.br/9079096818962275",
    external: true
  }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
}
function WJustitia({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(0)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      padding: 12,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pixel-justitia-sky.png",
    alt: "Justitia, pixel art",
    style: {
      maxWidth: '100%',
      maxHeight: 420,
      imageRendering: 'pixelated',
      border: '1px solid var(--gold-2)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--rule-hairline)',
      paddingTop: 10,
      marginTop: 10,
      fontSize: 12,
      color: 'var(--text-faint)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "justitia.png"), /*#__PURE__*/React.createElement("span", null, "1086 \xD7 1448 \xB7 16-bit")));
}
function WVo({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: stack(0)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      boxShadow: '3px 3px 0 0 var(--ink)',
      padding: '12px 12px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/avo.png",
    alt: L(lang, 'Ana, ainda menina, com a avó e um troféu', 'Ana as a child, with her grandmother and a trophy'),
    style: {
      display: 'block',
      width: '100%',
      border: '1px solid var(--ink-30)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 4px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16
    }
  }, L(lang, 'com a minha avó', 'with my grandmother')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-faint)',
      marginTop: 3,
      letterSpacing: '0.04em'
    }
  }, L(lang, 'família · onde tudo começou', 'family · where it all began')))));
}
Object.assign(window, {
  WSobre,
  WTese,
  WPublicacoes,
  WIus,
  WContato,
  WJustitia,
  WCv,
  WVo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/WindowContents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop/icons.jsx
try { (() => {
/* Retro desktop icons for the ana vanzin OS — crisp, pixel-leaning, brand palette.
   Exposed on window for sibling babel scripts. */

const _crisp = {
  shapeRendering: 'crispEdges'
};
function FolderIcon({
  size = 46
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "22",
    height: "8",
    fill: "var(--gold)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "16",
    width: "40",
    height: "26",
    fill: "var(--gold-2)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "16",
    width: "40",
    height: "6",
    fill: "var(--gold)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "44",
    y2: "22",
    stroke: "var(--ink)",
    strokeWidth: "1.2"
  }));
}
function DocIcon({
  size = 46
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4 H32 L39 11 V44 H11 Z",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 4 V11 H39 Z",
    fill: "var(--paper-deep)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "20",
    x2: "34",
    y2: "20",
    stroke: "var(--rubric)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "26",
    x2: "34",
    y2: "26",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "31",
    x2: "34",
    y2: "31",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "36",
    x2: "28",
    y2: "36",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }));
}
function MailIcon({
  size = 46
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "12",
    width: "38",
    height: "26",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 13 L24 28 L43 13",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 37 L19 24 M43 37 L29 24",
    fill: "none",
    stroke: "var(--ink-50)",
    strokeWidth: "1.2"
  }));
}
function GroupIcon({
  size = 46
}) {
  /* Ius Gentium — a stacked-rings device echoing the seal */
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "18",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "13",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "22",
    r: "5",
    fill: "var(--rubric)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29",
    cy: "22",
    r: "5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 34 q6 -8 13 -8 q7 0 13 8",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.4"
  }));
}
function ImageIcon({
  size = 46,
  src = '../../assets/pixel-justitia.png'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: 'var(--paper)',
      border: '1.6px solid var(--ink)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      height: '112%',
      width: 'auto',
      imageRendering: 'pixelated',
      marginBottom: '-4%'
    }
  }));
}
function SealIcon({
  size = 46,
  src = '../../assets/sun-seal.svg'
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    width: size,
    height: size,
    style: {
      display: 'block'
    }
  });
}
function QuoteIcon({
  size = 46
}) {
  /* Citações — open quotation marks over a citation rule */
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "8",
    width: "36",
    height: "32",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "8",
    width: "36",
    height: "6",
    fill: "var(--gold)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "14",
    x2: "42",
    y2: "14",
    stroke: "var(--ink)",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 20 h6 v7 h-3 l-3 4 z",
    fill: "var(--rubric)",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 20 h6 v7 h-3 l-3 4 z",
    fill: "var(--rubric)",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "35",
    x2: "35",
    y2: "35",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }));
}
function AtlasIcon({
  size = 46
}) {
  /* ICONOCRACIA atlas — a Warburg mounting board with specimen tiles */
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "6",
    width: "38",
    height: "36",
    fill: "var(--ink)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "10",
    width: "12",
    height: "11",
    fill: "var(--paper)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "27",
    y: "10",
    width: "12",
    height: "11",
    fill: "var(--gold-2)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "27",
    width: "12",
    height: "11",
    fill: "var(--paper-deep)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "27",
    y: "27",
    width: "12",
    height: "11",
    fill: "var(--paper)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "27",
    y: "10",
    width: "12",
    height: "11",
    fill: "none",
    stroke: "var(--rubric)",
    strokeWidth: "1.6"
  }));
}
function WorksIcon({
  size = 46
}) {
  /* Trabalhos — a dossier of stacked sheets with a rubric clip */
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    style: _crisp,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "10",
    width: "26",
    height: "31",
    fill: "var(--paper-deep)",
    stroke: "var(--ink)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "7",
    width: "26",
    height: "31",
    fill: "var(--paper)",
    stroke: "var(--ink)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "4",
    width: "8",
    height: "5",
    fill: "var(--rubric)",
    stroke: "var(--ink)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "17",
    x2: "34",
    y2: "17",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "22",
    x2: "34",
    y2: "22",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "27",
    x2: "30",
    y2: "27",
    stroke: "var(--ink-50)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "32",
    x2: "34",
    y2: "32",
    stroke: "var(--gold)",
    strokeWidth: "1.6"
  }));
}
function CloseBox({
  active
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 13,
      height: 13,
      border: '1.5px solid var(--ink)',
      background: 'var(--paper)',
      display: 'inline-block',
      boxSizing: 'border-box',
      opacity: active ? 1 : 0.4
    }
  });
}
Object.assign(window, {
  FolderIcon,
  DocIcon,
  MailIcon,
  GroupIcon,
  ImageIcon,
  SealIcon,
  QuoteIcon,
  AtlasIcon,
  WorksIcon,
  CloseBox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScreensContent.jsx
try { (() => {
const DSC = window.AnaVanzinDesignSystem_b45a86;
const {
  SectionRule,
  PublicationEntry,
  Eyebrow,
  RubricLink,
  Button
} = DSC;
function PagePublicacoes() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Publica\xE7\xF5es",
    title: "Publica\xE7\xF5es",
    lang: "Publications"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2025",
    title: "A venda de Justitia: s\xE1tira e virtude no Narrenschiff",
    href: "#",
    meta: "Revista Sequ\xEAncia, n. 96, p. 1\u201328."
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2024",
    title: "A Rep\xFAblica como mulher: alegoria e constitui\xE7\xE3o",
    href: "#",
    meta: "Revista Direito e Pr\xE1xis, v. 15, n. 2."
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    year: "2023",
    title: "Iconografia jur\xEDdica: um programa de pesquisa",
    meta: "Cap\xEDtulo em obra coletiva, Ed. UFSC.",
    note: "no prelo"
  })), /*#__PURE__*/React.createElement(RubricLink, {
    href: "#",
    external: true
  }, "Curr\xEDculo Lattes"));
}
function PageIusGentium() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Ius Gentium",
    title: "Grupo de pesquisa",
    lang: "Research group"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55
    }
  }, "Ius Gentium \u2014 grupo de pesquisa em hist\xF3ria da cultura jur\xEDdica, PPGD/UFSC."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)'
    }
  }, "Linha de pesquisa: iconografia e iconologia do direito. Encontros quinzenais, abertos a estudantes de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o."), /*#__PURE__*/React.createElement(RubricLink, {
    href: "#",
    external: true
  }, "Diret\xF3rio CNPq"));
}
function PageAdvocacia() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Advocacia",
    title: "Pr\xE1tica jur\xEDdica",
    lang: "Legal practice"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55
    }
  }, "Consultoria e pareceres em direito p\xFAblico, com \xEAnfase em hist\xF3ria constitucional e fundamenta\xE7\xE3o hist\xF3rica de teses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      borderTop: '1px solid var(--rule-hairline)',
      paddingTop: 'var(--space-4)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 12
    }
  }, "Atua\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "Pareceres hist\xF3ricos-jur\xEDdicos \xB7 consultoria em patrim\xF4nio cultural \xB7 direito administrativo")));
}
function PageContato({
  onSend,
  sent
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Contato",
    title: "Contato",
    lang: "Contact"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement(RubricLink, {
    href: "mailto:ana@anavanzin.com"
  }, "ana@anavanzin.com")), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      color: 'var(--text-muted)',
      borderTop: '1px solid var(--rule-hairline)',
      paddingTop: 'var(--space-4)'
    }
  }, "Mensagem registrada. Resposta em at\xE9 cinco dias \xFAteis.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSend();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: '48ch'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 11
    }
  }, "Nome"), /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyleAv
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "ink",
    style: {
      fontSize: 11
    }
  }, "Mensagem"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "4",
    style: {
      ...inputStyleAv,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    type: "submit"
  }, "Enviar"))));
}
const inputStyleAv = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--ink)',
  background: 'transparent',
  border: '1px solid var(--ink-50)',
  borderRadius: 0,
  padding: '10px 12px',
  outlineColor: 'var(--rubric)'
};
Object.assign(window, {
  PagePublicacoes,
  PageIusGentium,
  PageAdvocacia,
  PageContato
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScreensContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScreensHome.jsx
try { (() => {
const DS = window.AnaVanzinDesignSystem_b45a86;
const {
  BlindfoldHero,
  SectionRule,
  Eyebrow,
  RubricLink,
  Button,
  FootnoteRef,
  Footnotes
} = DS;
function PageHome({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BlindfoldHero, {
    subtitle: "advogada \xB7 historiadora do direito",
    lede: "Doutoranda no PPGD/UFSC. A tese Iconocracia estuda as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 na hist\xF3ria e na iconografia jur\xEDdica."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('tese')
  }, "A tese"), /*#__PURE__*/React.createElement(RubricLink, {
    href: "#publicacoes",
    onClick: e => {
      e.preventDefault();
      go('publicacoes');
    }
  }, "Publica\xE7\xF5es")));
}
function PageTese() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Tese",
    title: "Iconocracia",
    lang: "Doctoral thesis"
  }), /*#__PURE__*/React.createElement("div", {
    className: "av-aside-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 120px',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55
    }
  }, "A primeira Justitia vendada n\xE3o nasceu como virtude \u2014 nasceu como s\xE1tira, na xilogravura de 1494 do ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), " em que um bobo cobre os olhos da Justi\xE7a", /*#__PURE__*/React.createElement(FootnoteRef, {
    n: 1
  }), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "A tese investiga como as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 foram constru\xEDdas, satirizadas e normalizadas entre o incun\xE1bulo e o constitucionalismo moderno."), /*#__PURE__*/React.createElement(Footnotes, {
    notes: ["Brant, Sebastian. Das Narrenschiff. Basel, 1494, fol. 22v."],
    style: {
      marginTop: 'var(--space-4)'
    }
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--rule-hairline)',
      paddingLeft: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/justitia-mark.svg",
    alt: "",
    width: "72"
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "muted",
    style: {
      fontSize: 11
    }
  }, "Programa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "PPGD/UFSC"))));
}
Object.assign(window, {
  PageHome,
  PageTese
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScreensHome.jsx", error: String((e && e.message) || e) }); }

// uploads/app.js
try { (() => {
/* ============================================
   ICONOCRATIC ATLAS — Application Logic
   ============================================ */

(function () {
  "use strict";

  // ─── DATA ─────────────────────────────────────
  var panelData = [{
    number: "Painel I",
    title: "Mães Fundacionais",
    desc: "Constelação dedicada ao regime fundacional-sacrificial, onde a alegoria feminina é convocada como mãe da nação: parindo, amamentando ou sangrando pela pátria. Marianne sobre as barricadas, a República brasileira oferecendo o seio ao povo — imagens que fundem maternidade e soberania, naturalizando o sacrifício feminino como ato fundador.",
    indicators: "FEI alto (2–3), MVI alto (2–3). Corporalidade e vulnerabilidade maternal são os traços dominantes.",
    chapters: "Capítulo 2 (Regime Fundacional), Capítulo 5 (Maternidade e Sangue)"
  }, {
    number: "Painel II",
    title: "Justiça como Templo",
    desc: "A alegoria feminina é desencarnada e transformada em arquitetura: Justitia nos frontões de tribunais, nos tímpanos de palácios de justiça, nos vitrais de assembleias. O corpo feminino torna-se suporte material do edifício jurídico, perdendo carnalidade em favor de gravidade institucional.",
    indicators: "FEI baixo (0–1), CII alto (2–3), SMI alto (2–3). Classicismo e materialidade simbólica dominam.",
    chapters: "Capítulo 3 (Regime Normativo-Jurídico), Capítulo 6 (Suporte Forense)"
  }, {
    number: "Painel III",
    title: "Corpos em Armas",
    desc: "Quando a alegoria feminina empunha armas: Britannia com seu tridente e escudo, Columbia com sua espada, Germania com seu gládio. O corpo feminino é militarizado para legitimar a expansão imperial e a defesa nacional — uma feminização paradoxal da violência estatal.",
    indicators: "AMCP alto (2–3), WI alto (2–3). Armamento e branquitude convergem no ideal marcial.",
    chapters: "Capítulo 4 (Regime Militar-Imperial), Capítulo 7 (Crise Bélica)"
  }, {
    number: "Painel IV",
    title: "República Branca",
    desc: "A racialização como dispositivo visual do regime iconocrático. O ideal clássico greco-romano opera como vetor de branquitude: pele de mármore, feições europeias, drapeado neoclássico. Em países mestiços como o Brasil, a alegoria republicana é sistematicamente embranquecida.",
    indicators: "CII alto (2–3), WI alto (2–3), RI=1. O clássico é o racial.",
    chapters: "Capítulo 4 (Racialização), Capítulo 8 (Ideal Clássico como Vetor Racial)"
  }, {
    number: "Painel V",
    title: "Ubiquidade Íntima",
    desc: "A alegoria feminina nos objetos do cotidiano: moedas que passam de mão em mão, selos que selam correspondências, cédulas que circulam nos bolsos. A ubiquidade íntima do regime normativo — a imagem alegórica penetra o espaço privado sem ser percebida como dispositivo de poder.",
    indicators: "Todos os suportes = moeda/selo. Regime normativo em circulação material íntima.",
    chapters: "Capítulo 3 (Circulação Íntima), Capítulo 6 (Suporte Numismático)"
  }, {
    number: "Painel VI",
    title: "Damas de Ferro",
    desc: "A fronteira entre alegoria e biografia: quando mulheres reais são alegoricizadas (Marianne como Brigitte Bardot, Britannia como Boadiceia) ou quando alegorias ganham biografias (a Justitia que 'vê' ou 'não vê'). O índice Alegoria-Biografia marca essa dissolução de fronteiras.",
    indicators: "AI alto (2–3). A fusão entre corpo real e corpo simbólico é o traço definidor.",
    chapters: "Capítulo 9 (Fronteira Alegoria-Biografia), Capítulo 10 (Personificação Política)"
  }, {
    number: "Painel VII",
    title: "Justiça Contestada",
    desc: "Quando a alegoria é destruída, vandalizada, parodiada ou subvertida: estátuas de Justitia derrubadas, Marianne pichada, Columbia reimaginada como indígena. A contestação pública do regime iconocrático revela sua fragilidade e os limites do poder simbólico.",
    indicators: "Índices 'quebrados': baixo SMI, baixo CII, contestação material dos atributos tradicionais.",
    chapters: "Capítulo 11 (Contestação Visual), Capítulo 12 (Destruição Iconoclasta)"
  }, {
    number: "Painel VIII",
    title: "Transatlântico",
    desc: "As travessias: como as alegorias migram entre continentes, transformando-se na passagem. A Marianne francesa que se torna a República brasileira, a Britannia que inspira Columbia, as Justitias que se multiplicam nos tribunais do mundo. O Nachleben warburguiano — a sobrevivência das formas — em escala atlântica.",
    indicators: "Misto: todos os países, todos os regimes. A ênfase está na migração e transformação.",
    chapters: "Capítulo 13 (Nachleben Atlântico), Capítulo 14 (Síntese Comparativa)"
  }];
  var indicatorData = [{
    code: "FEI",
    name: "Feminine Embodiment Index",
    scale: "0–3",
    definition: "Mede o grau de corporalidade feminina na imagem: de abstração completa (0) a sensualização explícita (3). Captura como o corpo feminino é mobilizado — ou ocultado — pelo regime iconocrático.",
    levels: ["0 = Sem corpo visível", "1 = Corpo coberto/abstrato", "2 = Corpo parcialmente revelado", "3 = Corpo sensualizado"],
    panels: "Painéis I, V, VI"
  }, {
    code: "CII",
    name: "Classical Ideal Index",
    scale: "0–3",
    definition: "Avalia a aderência ao ideal clássico greco-romano: drapeado, postura contrapposto, atributos mitológicos, feições europeizadas. O classicismo como gramática visual do poder ocidental.",
    levels: ["0 = Nenhum elemento clássico", "1 = Referência leve", "2 = Predominantemente clássico", "3 = Integralmente clássico"],
    panels: "Painéis II, IV, VIII"
  }, {
    code: "PRI",
    name: "Posture & Realm Index",
    scale: "serena / militante / sacrificial",
    definition: "Classifica a postura corporal e o domínio simbólico da alegoria: serena (regime normativo), militante (regime militar), sacrificial (regime fundacional).",
    levels: ["Serena = Postura estática, contemplativa", "Militante = Postura ativa, combativa", "Sacrificial = Postura de entrega, sofrimento"],
    panels: "Painéis I, III, VII"
  }, {
    code: "SMI",
    name: "Symbolic Material Index",
    scale: "0–3",
    definition: "Quantifica a presença e densidade de atributos simbólicos tradicionais: balança, espada, coroa de louros, barrete frígio, toga, livro da lei.",
    levels: ["0 = Sem atributos", "1 = Um atributo", "2 = Dois ou três atributos", "3 = Saturação simbólica (4+)"],
    panels: "Painéis II, V, VII"
  }, {
    code: "SMS",
    name: "Symbolic Meaning Score",
    scale: "serena / militante / sacrificial",
    definition: "Avalia a carga semântica dos atributos simbólicos presentes: se remetem à ordem jurídica (serena), à força militar (militante) ou ao sacrifício fundacional (sacrificial).",
    levels: ["Serena = Balança, livro, toga", "Militante = Espada, escudo, tridente", "Sacrificial = Sangue, seio, correntes"],
    panels: "Painéis I, II, III"
  }, {
    code: "AMCP",
    name: "Armament & Crisis Profile",
    scale: "0–3",
    definition: "Mede o grau de militarização da imagem: presença de armas, armaduras, cenários bélicos, linguagem visual de crise e defesa nacional.",
    levels: ["0 = Sem elementos bélicos", "1 = Referência indireta", "2 = Armas visíveis", "3 = Cenário de guerra"],
    panels: "Painéis III, VII"
  }, {
    code: "MVI",
    name: "Maternal-Vulnerability Index",
    scale: "0–3",
    definition: "Captura a presença de maternidade, vulnerabilidade corporal e sacrifício na representação alegórica. O seio exposto, a criança ao colo, o sangue derramado.",
    levels: ["0 = Sem vulnerabilidade", "1 = Leve sugestão maternal", "2 = Maternidade explícita", "3 = Sacrifício/sofrimento maternal"],
    panels: "Painéis I, VI"
  }, {
    code: "WI",
    name: "Whiteness Index",
    scale: "0–3",
    definition: "Avalia o grau de branquitude da representação: cor da pele, feições, tipo de cabelo, conformidade com o ideal estético europeu ocidental.",
    levels: ["0 = Não-branca", "1 = Ambígua/mestiça", "2 = Predominantemente branca", "3 = Branquitude idealizada"],
    panels: "Painéis III, IV, VIII"
  }, {
    code: "RI",
    name: "Racial Idealisation",
    scale: "0 / 1",
    definition: "Variável binária: a imagem apresenta idealização racial explícita? RI=1 quando a alegoria é deliberadamente embranquecida em contexto nacional multirracial.",
    levels: ["0 = Sem idealização racial", "1 = Idealização racial presente"],
    panels: "Painel IV"
  }, {
    code: "AI",
    name: "Allegory-Biography Index",
    scale: "0–3",
    definition: "Mede a dissolução da fronteira entre alegoria e pessoa real: de separação completa (0) a fusão total (3), quando uma mulher real se torna indistinguível da alegoria nacional.",
    levels: ["0 = Alegoria pura", "1 = Referência biográfica leve", "2 = Mescla evidente", "3 = Fusão total alegoria-pessoa"],
    panels: "Painéis VI, VIII"
  }];

  // ─── NAVIGATION ───────────────────────────────

  var nav = document.querySelector(".nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var allNavLinks = document.querySelectorAll(".nav__link");

  // Sticky nav shadow
  function handleScroll() {
    if (window.scrollY > 10) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }
    updateActiveLink();
  }
  window.addEventListener("scroll", handleScroll, {
    passive: true
  });

  // Mobile menu toggle
  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close mobile menu on link click
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Active nav link based on scroll
  function updateActiveLink() {
    var sections = document.querySelectorAll("section[id]");
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        allNavLinks.forEach(function (link) {
          link.classList.remove("nav__link--active");
          if (link.getAttribute("data-section") === id) {
            link.classList.add("nav__link--active");
          }
        });
      }
    });
  }

  // ─── THEME TOGGLE ─────────────────────────────

  var themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", function () {
    var html = document.documentElement;
    var current = html.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
  });

  // ─── PANEL MODALS ─────────────────────────────

  var panelCards = document.querySelectorAll(".panel-card");
  var modalBackdrop = document.getElementById("panelModal");
  var modalNumber = document.getElementById("modalNumber");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalIndicators = document.getElementById("modalIndicators");
  var modalChapters = document.getElementById("modalChapters");
  var warburgGrid = document.getElementById("warburgGrid");
  var modalCloseBtn = modalBackdrop.querySelector(".modal__close");

  // Pre-fill warburg grid with 12 slots
  var imagePlaceholderSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="warburg-grid__slot-inner"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';
  function buildWarburgSlots() {
    warburgGrid.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      var slot = document.createElement("div");
      slot.className = "warburg-grid__slot";
      slot.innerHTML = imagePlaceholderSVG;
      warburgGrid.appendChild(slot);
    }
  }
  function openPanel(index) {
    var data = panelData[index];
    if (!data) return;
    modalNumber.textContent = data.number;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalIndicators.textContent = data.indicators;
    modalChapters.textContent = data.chapters;
    buildWarburgSlots();
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalCloseBtn.focus();
  }
  function closePanel() {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  panelCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var index = parseInt(card.getAttribute("data-panel"), 10);
      openPanel(index);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var index = parseInt(card.getAttribute("data-panel"), 10);
        openPanel(index);
      }
    });
  });
  modalCloseBtn.addEventListener("click", closePanel);
  modalBackdrop.addEventListener("click", function (e) {
    if (e.target === modalBackdrop) {
      closePanel();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
      closePanel();
    }
  });

  // ─── INDICATOR CARDS ──────────────────────────

  var indicatorsGrid = document.getElementById("indicatorsGrid");
  function buildIndicatorCards() {
    indicatorData.forEach(function (ind) {
      var card = document.createElement("div");
      card.className = "indicator-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-expanded", "false");
      var levelsHTML = ind.levels.map(function (l) {
        var parts = l.split(" = ");
        return '<span class="indicator-card__level"><strong>' + parts[0] + '</strong> = ' + (parts[1] || '') + '</span>';
      }).join("");
      card.innerHTML = '<div class="indicator-card__header">' + '<span class="indicator-card__code">' + ind.code + '</span>' + '<span class="indicator-card__name">' + ind.name + '</span>' + '<span class="indicator-card__scale">' + ind.scale + '</span>' + '<svg class="indicator-card__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' + '</div>' + '<div class="indicator-card__body">' + '<p class="indicator-card__definition">' + ind.definition + '</p>' + '<div class="indicator-card__levels">' + levelsHTML + '</div>' + '<p class="indicator-card__panels">Painéis relacionados: <span>' + ind.panels + '</span></p>' + '</div>';
      card.addEventListener("click", function () {
        toggleIndicator(card);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleIndicator(card);
        }
      });
      indicatorsGrid.appendChild(card);
    });
  }
  function toggleIndicator(card) {
    var isExpanded = card.classList.contains("is-expanded");
    // Close all others
    document.querySelectorAll(".indicator-card.is-expanded").forEach(function (c) {
      c.classList.remove("is-expanded");
      c.setAttribute("aria-expanded", "false");
    });
    if (!isExpanded) {
      card.classList.add("is-expanded");
      card.setAttribute("aria-expanded", "true");
    }
  }
  buildIndicatorCards();

  // ─── SCROLL REVEAL FALLBACK ───────────────────
  // For browsers without scroll-driven animations support
  if (!CSS.supports("animation-timeline", "scroll()")) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll(".fade-in").forEach(function (el) {
      el.style.opacity = "0";
      observer.observe(el);
    });
  }

  // ─── INITIAL SCROLL CHECK ─────────────────────
  handleScroll();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/app.js", error: String((e && e.message) || e) }); }

// window-contents.js
try { (() => {
/*IIFE*/(function () {
  /* Window contents for the ana vanzin desktop. Compose brand components.
     Bilingual: each component takes { lang } ('pt' | 'en'). */
  const _DS = window.AnaVanzinDesignSystem_b45a86;
  const {
    Eyebrow,
    RubricLink,
    PublicationEntry,
    FootnoteRef,
    Footnotes
  } = _DS;
  const L = (lang, pt, en) => lang === 'en' ? en : pt;
  const win_h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 1.1,
    margin: 0
  };
  const win_lead = {
    fontSize: 16,
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '60ch'
  };
  const win_p = {
    fontSize: 15,
    lineHeight: 1.62,
    margin: 0,
    color: 'var(--text-muted)',
    maxWidth: '60ch'
  };
  const stack = g => ({
    display: 'flex',
    flexDirection: 'column',
    gap: g
  });
  function WSobre({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Sobre', 'About')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, "ana vanzin"), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'Advogada e historiadora do direito. Doutoranda no PPGD/UFSC, com pesquisa em história e iconografia jurídica.', 'Lawyer and legal historian. PhD candidate at PPGD/UFSC, researching legal history and iconography.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A tese ", /*#__PURE__*/React.createElement("em", null, "Iconocracia"), " estuda as alegorias femininas do direito \u2014 Justitia, a Rep\xFAblica-como-mulher \u2014 entre o incun\xE1bulo e o constitucionalismo moderno."), /*#__PURE__*/React.createElement(React.Fragment, null, "The thesis ", /*#__PURE__*/React.createElement("em", null, "Iconocracy"), " studies the female allegories of law \u2014 Justitia, the Republic-as-woman \u2014 between the incunabulum and modern constitutionalism."))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14,
        ...stack(6)
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Atuação', 'Focus')), /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        margin: 0
      }
    }, L(lang, 'Direito público · história constitucional · patrimônio cultural', 'Public law · constitutional history · cultural heritage'))));
  }
  function WTese({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/banner.png",
      alt: L(lang, 'Alegoria Feminina na História da Cultura Jurídica — Projeto de Doutorado, PPGD/UFSC', 'Female Allegory in the History of Legal Culture — PhD Project, PPGD/UFSC'),
      style: {
        display: 'block',
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Tese · Iconocracia', 'Thesis · Iconocracy')), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'A venda como sátira', 'The blindfold as satire')), /*#__PURE__*/React.createElement("div", {
      style: stack(12)
    }, /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, /*#__PURE__*/React.createElement(React.Fragment, null, "A primeira Justitia vendada n\xE3o nasceu como virtude \u2014 nasceu como s\xE1tira, na xilogravura de 1494 do ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "The first blindfolded Justitia was not born as a virtue \u2014 it was born as satire, in the 1494 woodcut of the ", /*#__PURE__*/React.createElement("em", null, "Narrenschiff"), /*#__PURE__*/React.createElement(FootnoteRef, {
      n: 1
    }), "."))), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Investiga-se como a venda, o gume e a balança foram lidos, satirizados e normalizados na cultura jurídica europeia.', 'It investigates how the blindfold, the blade and the scales were read, satirised and normalised in European legal culture.')), /*#__PURE__*/React.createElement(Footnotes, {
      notes: ["Brant, Sebastian. Das Narrenschiff. Basel, 1494, fol. 22v."],
      style: {
        marginTop: 8
      }
    })));
  }
  function WPublicacoes({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(8)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Comunicações & traduções', 'Talks & translations')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: "Images of the Nation in Modern Legal Iconography",
      meta: L(lang, 'Comunicação · Germania, Britannia, Marianne e o uso simbólico do feminino.', 'Talk · Germania, Britannia, Marianne and the symbolic use of the feminine.')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'História do Direito das Mulheres', 'The History of Women’s Legal Rights'),
      meta: L(lang, 'XIX Encontro de História do Direito · UFSC', '19th Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Direito, fascismos e neofascismos entre Itália e Brasil', 'Law, Fascism and Neo-Fascism between Italy and Brazil'),
      meta: L(lang, 'XXI Encontro de História do Direito · UFSC', '21st Meeting on Legal History · UFSC')
    }), /*#__PURE__*/React.createElement(PublicationEntry, {
      year: "2024",
      title: L(lang, 'Monumentos do Direito Internacional (trad.)', 'Monuments of International Law (transl.)'),
      meta: L(lang, 'Tradução de Luigi Lacchè · Rev. Bras. de História e Ciências Sociais.', 'Translation of Luigi Lacchè · Braz. J. of History & Social Sciences.')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WIus({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ius Gentium"), /*#__PURE__*/React.createElement("h2", {
      style: win_h2
    }, L(lang, 'Grupo de pesquisa', 'Research group')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, L(lang, 'História da cultura jurídica, PPGD/UFSC. Linha: iconografia e iconologia do direito.', 'Legal-culture history, PPGD/UFSC. Strand: iconography and iconology of law.')), /*#__PURE__*/React.createElement("p", {
      style: win_p
    }, L(lang, 'Encontros quinzenais, abertos a graduação e pós-graduação.', 'Fortnightly meetings, open to undergraduate and graduate students.')), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "#",
      external: true
    }, L(lang, 'Diretório CNPq', 'CNPq Directory'))));
  }
  function WContato({
    lang
  }) {
    const [sent, setSent] = React.useState(false);
    const input = {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      background: 'var(--paper)',
      border: '1px solid var(--ink-50)',
      borderRadius: 0,
      padding: '8px 10px',
      outlineColor: 'var(--rubric)',
      width: '100%',
      boxSizing: 'border-box'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: stack(16)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Contato', 'Contact')), /*#__PURE__*/React.createElement("p", {
      style: win_lead
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "mailto:anavvanzin@outlook.com"
    }, "anavvanzin@outlook.com")), sent ? /*#__PURE__*/React.createElement("p", {
      style: {
        ...win_p,
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 14
      }
    }, L(lang, 'Mensagem registrada. Resposta em até cinco dias úteis.', 'Message received. Reply within five business days.')) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        ...stack(12),
        maxWidth: 340
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Nome', 'Name')), /*#__PURE__*/React.createElement("input", {
      required: true,
      style: input
    })), /*#__PURE__*/React.createElement("label", {
      style: stack(6)
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      color: "ink",
      style: {
        fontSize: 11
      }
    }, L(lang, 'Mensagem', 'Message')), /*#__PURE__*/React.createElement("textarea", {
      required: true,
      rows: "3",
      style: {
        ...input,
        resize: 'vertical'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 13,
        padding: '9px 20px',
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '1px solid var(--ink)',
        borderRadius: 0,
        cursor: 'pointer'
      }
    }, L(lang, 'Enviar', 'Send')))));
  }
  function WCv({
    lang
  }) {
    const rows = L(lang, [['2022–24', 'Mestrado em Direito', 'PPGD/UFSC · Direito dos Grupos Vulneráveis'], ['2023–24', 'Especialização em Direito Público', 'FURB / ESMESC'], ['2017–22', 'Bacharelado em Direito', 'UFSC'], ['2018', 'Iniciação Científica (PIBIC)', 'CNPq/UFSC · Direito Internacional']], [['2022–24', 'Master in Law', 'PPGD/UFSC · Vulnerable Groups'], ['2023–24', 'Specialist in Public Law', 'FURB / ESMESC'], ['2017–22', 'Bachelor of Laws', 'UFSC'], ['2018', 'Research fellowship (PIBIC)', 'CNPq/UFSC · International Law']]);
    return /*#__PURE__*/React.createElement("div", {
      style: stack(14)
    }, /*#__PURE__*/React.createElement(Eyebrow, null, L(lang, 'Currículo', 'Curriculum')), /*#__PURE__*/React.createElement("div", null, rows.map(([y, t, m], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr',
        gap: 18,
        padding: '12px 0',
        borderTop: '1px solid var(--rule-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 18,
        color: 'var(--text-faint)'
      }
    }, y), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.15
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, m))))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(RubricLink, {
      href: "http://lattes.cnpq.br/9079096818962275",
      external: true
    }, L(lang, 'Currículo Lattes', 'Lattes CV'))));
  }
  function WJustitia({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink)',
        padding: 12,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/pixel-justitia-sky.png",
      alt: "Justitia, pixel art",
      style: {
        maxWidth: '100%',
        maxHeight: 420,
        imageRendering: 'pixelated',
        border: '1px solid var(--gold-2)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--rule-hairline)',
        paddingTop: 10,
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-faint)',
        letterSpacing: '0.04em'
      }
    }, /*#__PURE__*/React.createElement("span", null, "justitia.png"), /*#__PURE__*/React.createElement("span", null, "1086 \xD7 1448 \xB7 16-bit")));
  }
  function WVo({
    lang
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: stack(0)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--paper)',
        border: '1px solid var(--ink)',
        boxShadow: '3px 3px 0 0 var(--ink)',
        padding: '12px 12px 0'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/avo.png",
      alt: L(lang, 'Ana, ainda menina, com a avó e um troféu', 'Ana as a child, with her grandmother and a trophy'),
      style: {
        display: 'block',
        width: '100%',
        border: '1px solid var(--ink-30)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '13px 4px 16px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16
      }
    }, L(lang, 'com a minha avó', 'with my grandmother')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-faint)',
        marginTop: 3,
        letterSpacing: '0.04em'
      }
    }, L(lang, 'família · onde tudo começou', 'family · where it all began')))));
  }
  Object.assign(window.avapp = window.avapp || {}, {
    WSobre,
    WTese,
    WPublicacoes,
    WIus,
    WContato,
    WJustitia,
    WCv,
    WVo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "window-contents.js", error: String((e && e.message) || e) }); }

__ds_ns.FootnoteRef = __ds_scope.FootnoteRef;

__ds_ns.Footnotes = __ds_scope.Footnotes;

__ds_ns.PublicationEntry = __ds_scope.PublicationEntry;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.RubricLink = __ds_scope.RubricLink;

__ds_ns.DesktopIcon = __ds_scope.DesktopIcon;

__ds_ns.Dock = __ds_scope.Dock;

__ds_ns.Window = __ds_scope.Window;

__ds_ns.BlindfoldHero = __ds_scope.BlindfoldHero;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
