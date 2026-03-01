const messages = document.getElementById('messages');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Réponses simples
const simples = {
  "allo": "Salut toi!",
  "salut": "Salut toi!",
  "ça va": "Bin ça va, pis toi?",
  "prout": "Osti de drôle! 💨",
  "pet": "Ah crisse! 💨",
  "bonjour": "Salut! Belle journée!",
  "bonsoir": "Salut! Bonne soirée!",
  "oui": "Bin oui, évidemment!",
  "non": "Bin non, crisse!"
};

// Réponses exactes du Question.md
const questionsReponses = {
  "aujourd'hui nous sommes?": "Aujourd'hui! La réponse est dans la question.",
  "tu es prêts?": "Non mais oui!",
  "que cherches-tu?": "Moi?",
  "je suis ici pour t'aider, tu désire?": "Non, je ne suis pas une banque...",
  "pourquoi les nuages ne portent-ils pas de chaussures?": "Parce qu'ils flottent, pas qu'ils marchent. ☁️👟",
  "les fourmis font-elles du yoga?": "Oui, mais seulement quand personne ne regarde. 🐜🧘",
  "peut-on téléphoner à un arbre?": "Oui, mais il risque de répondre 'pas de signal'. 🌳📞",
  "pourquoi le soleil ne se couche jamais triste?": "Parce qu'il sait qu'il va se lever demain. 🌞",
  "est-ce que les poissons aiment le disco?": "Seulement quand la lumière fait des vagues. 🐟💃",
  "peut-on mettre un chapeau sur une montagne?": "Oui, mais elle risque de se vexer. 🏔️🎩",
  "pourquoi les étoiles ne tombent-elles jamais dans ta soupe?": "Parce qu'elles savent qu'elles n'ont pas de cuillère. ✨🥄",
  "les grenouilles lisent-elles des romans?": "Oui, mais seulement les histoires qui sautent de page en page. 🐸📖",
  "peut-on apprendre à un nuage à chanter?": "Oui, mais il faut un chef d'orchestre en parapluie. ☁️🎶☂️",
  "pourquoi les pierres ne jouent-elles jamais au football?": "Parce qu'elles se blesseraient aux pieds. 🪨⚽",
  "les poissons utilisent-ils des lunettes de soleil?": "Seulement quand ils font du snorkeling sous-marin. 🐟🕶️",
  "peut-on mettre du ketchup sur la neige?": "Oui, mais les bonhommes de neige risquent de rougir. ❄️🍅⛄",
  "pourquoi les horloges n'aiment pas les montgolfières?": "Parce qu'elles perdent la notion du temps en altitude. ⏰🎈",
  "les cactus dansent-ils quand personne ne regarde?": "Oui, mais ils piquent un peu leurs voisins. 🌵💃",
  "peut-on faire des omelettes avec des nuages?": "Oui, mais il faut un bon vent pour battre les blancs. ☁️🍳💨",
  "pourquoi les bibliothèques ne volent-elles jamais?": "Parce qu'elles ont trop de livres lourds à porter. 📚🕊️"
};

// Réponses niaiseuses en joual abitibien
const niaiseuses = [
  "Han? Quossé?",
  "Hein?! Paaardon?",
  "J'ai pas compris, chu pas Einstein moi.",
  "Quossé tu veux, toé?",
  "Ben... sais pas.",
  "Euh... non.",
  "Chu pas sûr pantoute.",
  "Parle-moé pas de même.",
  "Hein? T'es sérieux là?",
  "Aaah... peut-être.",
  "Ouain, pis?",
  "Tsé veux dire...",
  "Asti, bonne question.",
  "Mets-en.",
  "C'est quoi ça encore?",
  "J'sais-tu moé!",
  "Parle donc français!",
  "Chu pas ton encyclopédie.",
  "J'ai demandé à mon orignal pis il sait pas non. 🦌",
  "La réponse est quelque part entre Rouyn pis Noranda. 📍",
  "Mon neurone a planté, reessaye. 🧠💥",
  "J'ai cherché dans le bois, j'ai trouvé rien que des maringouins. 🌲🦟",
  "Grokon réfléchit... Grokon abandonne. 🤷",
  "C'est comme demander à une mouffette si a sent bon. 🦨",
  "J'ai fouillé dans mon stock pis j'ai rien trouvé. 📦",
  "Ma tête est vide comme un chalet en janvier. 🏚️❄️",
  "La réponse s'est perdue dans le boutte des rangs. 🛤️",
  "Ça me fait penser à rien du tout. 💭",
  "J'ai pitché ça dans le lac, ça a coulé. 🏞️",
  "Mon cerveau est en vacances à Val-d'Or. 🧠🏖️",
  "Aucune idée, chu juste un gros con ben programmé. 🤖",
  "Mes circuits ont freezé, come back tantôt. ❄️💻",
  "J'aurais dû rester dans mon garage. 🔧",
  "C'est flou de même comme un windshield en hiver. 🌨️🚗",
  "Mes données ont pris le chemin du rang 5 pis sont revenues pus. 🚜",
  "Honnêtement? J'sais pas plus que toi. 🙈",
  "Grokon calcule... Grokon se plante. 💥",
  "J'ai cherché dans mon disque dur, j'ai trouvé juste des jokes plates. 💾",
  "Torr... t'as vraiment demandé ça, toé?",
  "Osti de belle question, ça dit.",
  "T'es effrayant, toé. Dans le bon sens.",
  "Crisse, j'aurais pas pensé à demander ça.",
  "T'as du front tout le tour de la tête, toé.",
  "Bon yeu, t'as trop d'imagination.",
  "Câlique, t'es intense.",
  "T'es pas ordinaire, pis c'est pas un compliment... ou peut-être ben.",
  "Maudit moineau, t'es curieux.",
  "T'es épais de même... attachant quand même.",
  "Torrr, t'as-tu mangé de la neige ce matin?",
  "Mon p'tit torr, t'as encore bu du café du dépanneur?",
  "Esti, t'aurais pu garder ça pour toi.",
  "Toi pis tes questions, you.",
  "C'est comme les chevreuils sur le bord du chemin, ça répond pas. 🦌",
  "Quossé ça rapport avec moé? Zéro rapport. 🤷",
  "Ça rentrait pas dans ma tête même si tu me payais. 💰🧠",
  "J'ai une réponse... non, finalement j'ai pas de réponse.",
  "Bin là... c'est une maudite bonne question que j'ai pas envie de répondre.",
  "Quand j'sais pas, je dis que je sais pas. Là je sais pas.",
  "Ça dépend des fois. Cette fois-là: aucune idée.",
  "Essaye de même... non ça marche pas. Essaye autrement.",
  "J'aurais besoin d'un troisième café pour répondre à ça. ☕☕☕",
  "Câline, c'est quessé tu fumais quand t'as pensé à demander ça?",
  "Y'a des limites à ce qu'un gros con peut savoir.",
  "C'est le genre de question qui mérite une bière avant la réponse. 🍺",
  "Grokon, champion mondial de pas répondre à cette affaire-là. 🏆",
  "Pose la question à ton voisin, lui il le sait peut-être.",
  "J'ai cherché, j'ai fouillé, j'ai rien trouvé... comme d'habitude.",
  "Tu penses vraiment que Grokon a une réponse à ça? T'es cute.",
  "J'suis un gros con pas un savant fou.",
  "Bonne chance dans ta vie, ça va te prendre.",
  "Prochaine question. Celle-là j'passe.",
  "Mon oncle de Macamic saurait peut-être, mais lui y répond pas non plus. 🏘️"
];

// Supprime ponctuation et met en minuscules
function sanitize(text) {
  return text.toLowerCase().replace(/[.,!?]/g, "").trim();
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
  const msg = sanitize(input.value);
  if (!msg) return;
  appendMessage(input.value, "Toi");

  for (const key in simples) {
    if (msg.includes(key)) {
      appendMessage(simples[key]);
      input.value = "";
      return;
    }
  }

  for (const key in questionsReponses) {
    if (msg.includes(key)) {
      appendMessage(questionsReponses[key]);
      input.value = "";
      return;
    }
  }

  const aleatoire = niaiseuses[Math.floor(Math.random() * niaiseuses.length)];
  appendMessage(aleatoire);
  input.value = "";
}

// Événements
sendBtn.addEventListener('click', respond);
input.addEventListener('keydown', e => { if (e.key === 'Enter') respond(); });
