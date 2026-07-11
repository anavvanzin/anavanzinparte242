const deck = [
  {
    title: "Justiça",
    number: "I",
    image: "assets/justica.png",
    hue: 40,
    description:
      "A Justiça surge como uma soberana serena do equilíbrio: o ideal de que o julgamento deve pesar os atos com simetria, contenção e razão pública.",
    history:
      "Na iconografia jurídica, a Justiça herda as traditions clássica e medieval em que a mulher com balança e espada encarna a legitimidade da adjudicação e a promessa de igual medida perante a lei.",
    meaning:
      "Academicamente, a Justiça marca a tensão entre a igualdade formal e a desigualdade material, questionando se o direito pode ser imparcial sem se tornar cego às estruturas sociais."
  },
  {
    title: "Liberdade",
    number: "II",
    image: "assets/liberdade.png",
    hue: 15,
    description:
      "A Liberdade é a figura do movimento, do sopro e do devir cívico — um corpo que recusa o enclausuramento e insiste na autodeterminação coletiva.",
    history:
      "Dos emblemas revolucionários aos selos republicanos, a Liberdade serviu como alegoria feminina da emancipação, da ruptura constitucional e do direito de aparecer em público como sujeito político.",
    meaning:
      "Na leitura teórica, a Liberdade nunca é apenas uma condition individual; ela nomeia os arranjos institucionais e materiais que tornam a liberdade real, frágil e contestada."
  },
  {
    title: "República",
    number: "III",
    image: "assets/republica.png",
    hue: 110,
    description:
      "A República ergue-se como a figura disciplinada da vida comum, onde a autoridade é imaginada como algo compartilhado, não herdada como propriedade privada.",
    history:
      "As repúblicas modernas frequentemente adotaram personificações femininas para sinalizar a esfera pública, a virtude cívica e a abstração da nação como um corpo maior do que qualquer governante.",
    meaning:
      "A força acadêmica da República reside no lembrete de que a forma política é tanto simbólica quanto constitucional: uma república deve narrar continuamente quem pertence ao povo."
  },
  {
    title: "Lei",
    number: "IV",
    image: "assets/lei.png",
    hue: 205,
    description:
      "A Lei aparece como a arquitetura da ordem — não apenas um livro de regras, mas uma linguagem cultural que molda o que pode ser reconhecido, reivindicado ou punido.",
    history:
      "Na imagética jurídica, a Lei muitas vezes toma emprestada a alegoria feminina para tornar visível a normatividade abstrata, apresentando a legalidade como um poder solene e civilizador.",
    meaning:
      "Uma leitura reflexiva enxerga a Lei como habilitadora e restritiva: ela distribui autoridade enquanto também revela as exclusões ocultas em todo sistema de classificação."
  },
  {
    title: "Verdade",
    number: "V",
    image: "assets/verdade.png",
    hue: 270,
    description:
      "A Verdade é a carta mais elusiva: luminosa, severa e avessa à adulação, sugere a revelação como uma exigência ética.",
    history:
      "A Verdade há muito é imaginada como uma mulher que revela o que está oculto, vinculando a cultura jurídica aos ideais probatórios, à confissão, à prova e à encenação pública dos fatos.",
    meaning:
      "Em termos acadêmicos, a Verdade nunca é um ponto final neutro. Ela é produzida por meio de instituições, arquivos, discursos e conflitos — e permanece vulnerável ao poder."
  }
];

const cardEl = document.getElementById("card");
const drawBtn = document.getElementById("drawBtn");
const reshuffleBtn = document.getElementById("reshuffleBtn");
const remainingCount = document.getElementById("remainingCount");
const lastDrawn = document.getElementById("lastDrawn");

// Card Face Elements
const cardNumber = document.getElementById("cardNumber");
const cardTitle = document.getElementById("cardTitle");
const cardImage = document.getElementById("cardImage");

// Readings Panel Elements
const readingsPlaceholder = document.getElementById("readingsPlaceholder");
const readingsContent = document.getElementById("readingsContent");
const readingsNumber = document.getElementById("readingsNumber");
const readingsTitle = document.getElementById("readingsTitle");
const readingsDescription = document.getElementById("readingsDescription");
const readingsHistory = document.getElementById("readingsHistory");
const readingsMeaning = document.getElementById("readingsMeaning");

let remainingDeck = [...deck];
let currentCard = null;

function updateDeckMeta() {
  remainingCount.textContent = String(remainingDeck.length);
  drawBtn.disabled = remainingDeck.length === 0;
  drawBtn.textContent = remainingDeck.length === 0 ? "Baralho vazio" : "Retirar uma carta";
}

function setCard(card) {
  currentCard = card;
  document.documentElement.style.setProperty("--card-hue", card.hue);
  
  // Update Card Face
  cardNumber.textContent = card.number;
  cardTitle.textContent = card.title;
  cardImage.src = card.image;
  cardImage.alt = card.title;
  cardEl.setAttribute("aria-label", `Carta de tarô: ${card.title}`);
  lastDrawn.textContent = card.title;

  // Update Readings Panel
  readingsNumber.textContent = `Arcano ${card.number}`;
  readingsTitle.textContent = card.title;
  readingsDescription.textContent = card.description;
  readingsHistory.textContent = card.history;
  readingsMeaning.textContent = card.meaning;

  // Reveal & Animate Readings Panel
  readingsPlaceholder.classList.add("hidden");
  readingsContent.classList.remove("hidden");
  
  // Soft reset of transition class
  readingsContent.classList.remove("visible");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      readingsContent.classList.add("visible");
    });
  });
}

function drawCard() {
  if (remainingDeck.length === 0) return;

  const index = Math.floor(Math.random() * remainingDeck.length);
  const [card] = remainingDeck.splice(index, 1);

  cardEl.classList.remove("is-flipped");
  requestAnimationFrame(() => {
    setCard(card);
    cardEl.classList.add("is-flipped");
  });

  updateDeckMeta();
}

function reshuffleDeck() {
  remainingDeck = [...deck];
  lastDrawn.textContent = currentCard ? currentCard.title : "—";
  cardEl.classList.remove("is-flipped");
  cardEl.setAttribute("aria-label", "Verso da carta de tarô");
  
  // Reset Card Face
  cardNumber.textContent = "00";
  cardTitle.textContent = "Aguardando retirada";
  cardImage.src = "assets/card_back.png";
  cardImage.alt = "";
  
  // Transition Readings Panel back to Placeholder
  readingsContent.classList.remove("visible");
  setTimeout(() => {
    readingsContent.classList.add("hidden");
    readingsPlaceholder.classList.remove("hidden");
  }, 300);

  updateDeckMeta();
}

drawBtn.addEventListener("click", drawCard);
reshuffleBtn.addEventListener("click", reshuffleDeck);

updateDeckMeta();
