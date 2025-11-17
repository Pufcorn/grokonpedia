const messages = document.getElementById('messages');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Réponses simples
const simples = {
  "allo": "Salut toi!",
  "salut": "Salut toi!",
  "ça va?": "Bin ça va, pis toi?",
  "prout": "Osti de drôle! 💨",
  "pet": "Ah crisse! 💨",
  "bonjour": "Salut! Belle journée!",
  "bonsoir": "Salut! Bonne soirée!"
};

// Réponses exactes du Question.md
const questionsReponses = {
  "aujourd’hui nous sommes?": "Aujourd’hui! La réponse est dans la question.",
  "tu es prêts?": "Non mais oui!",
  "que cherches-tu?": "Moi?",
  "je suis ici pour t’aider, tu désire?": "Non, je ne suis pas une banque...",
  "pourquoi les nuages ne portent-ils pas de chaussures?": "Parce qu’ils flottent, pas qu’ils marchent. ☁️👟",
  "les fourmis font-elles du yoga?": "Oui, mais seulement quand personne ne regarde. 🐜🧘",
  "peut-on téléphoner à un arbre?": "Oui, mais il risque de répondre “pas de signal”. 🌳📞",
  "pourquoi le soleil ne se couche jamais triste?": "Parce qu’il sait qu’il va se lever demain. 🌞",
  "est-ce que les poissons aiment le disco?": "Seulement quand la lumière fait des vagues. 🐟💃",
  "peut-on mettre un chapeau sur une montagne?": "Oui, mais elle risque de se vexer. 🏔️🎩",
  "pourquoi les étoiles ne tombent-elles jamais dans ta soupe?": "Parce qu’elles savent qu’elles n’ont pas de cuillère. ✨🥄",
  "les grenouilles lisent-elles des romans?": "Oui, mais seulement les histoires qui sautent de page en page. 🐸📖",
  "peut-on apprendre à un nuage à chanter?": "Oui, mais il faut un chef d’orchestre en parapluie. ☁️🎶☂️",
  "pourquoi les pierres ne jouent-elles jamais au football?": "Parce qu’elles se blesseraient aux pieds. 🪨⚽",
  "les poissons utilisent-ils des lunettes de soleil?": "Seulement quand ils font du snorkeling sous-marin. 🐟🕶️",
  "peut-on mettre du ketchup sur la neige?": "Oui, mais les bonhommes de neige risquent de rougir. ❄️🍅⛄",
  "pourquoi les horloges n’aiment pas les montgolfières?": "Parce qu’elles perdent la notion du temps en altitude. ⏰🎈",
  "les cactus dansent-ils quand personne ne regarde?": "Oui, mais ils piquent un peu leurs voisins. 🌵💃",
  "peut-on faire des omelettes avec des nuages?": "Oui, mais il faut un bon vent pour battre les blancs. ☁️🍳💨",
  "pourquoi les bibliothèques ne volent-elles jamais?": "Parce qu’elles ont trop de livres lourds à porter. 📚🕊️"
};

// 1000+ réponses niaiseuses aléatoires
const niaiseuses = [];
for (let i = 1; i <= 1000; i++) {
  niaiseuses.push(`Réponse drôle numéro ${i} 😎`);
}

// Affichage du message
function appendMessage(text, sender="Grokon") {
  const msg = document.createElement('div');
  msg.className = 'msg';
  msg.textContent = sender + ": " + text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Réponse
function respond() {
  const msg = input.value.trim().toLowerCase();
  if (!msg) return;
  appendMessage(input.value, "Toi");

  if (simples[msg]) {
    appendMessage(simples[msg]);
  } else if (questionsReponses[msg]) {
    appendMessage(questionsReponses[msg]);
  } else {
    // Sinon réponse niaiseuse aléatoire
    const aleatoire = niaiseuses[Math.floor(Math.random() * niaiseuses.length)];
    appendMessage(aleatoire);
  }

  input.value = "";
}

// Événements
sendBtn.addEventListener('click', respond);
input.addEventListener('keydown', e => { if (e.key === 'Enter') respond(); });
