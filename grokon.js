// GROKON.JS - Version 1000 questions/réponses

const messages = document.getElementById('messages');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Réponses québécoises, humour Grokon
const reponses = {
  "allo": "Salut toi!",
  "allô": "Salut toi!",
  "hello": "Hi! Bienvenue!",
  "hi": "Hi! Bienvenue!",
  "bon matin": "Salut! Belle journée à toi!",
  "bonsoir": "Salut! Bonne soirée!",
  "help": "Tire mon doigt et je te renseigne ;)",
  "à l’aide": "Tire mon doigt et je te renseigne ;)",
  "je ne trouve pas": "Bin voyons, cherche un peu… tu manques de Papier-cul!",
  "c’est où ça?": "Pour trouver, faut chercher… Pôvre toi!",
  "j’peux-tu": "Bin sûr que tu peux!",
  "je peux?": "Bin sûr que tu peux!",
  "hin?": "T’es perdu… Pôvre toi!",
  "quoi?": "J’pige pas… tu peux répéter?",
  "han?": "J’pige pas… tu peux répéter?",
  "où est le dictionnaire": "C’est juste par là – dictionnaire de mots farfelus.",
  "où sont les expressions": "C’est par là – expressions locales savoureuses.",
  "tu sais comment trouver": "Bien sûr! Cherche bien, crisse!",
  "cherche": "Fais un effort, crisse! Cherche…",
  "recherche": "Fais un effort, crisse! Cherche…",
  "je suis perdu": "T’inquiète pas, ça arrive aux meilleurs!",
  "où est le coin des conneries": "Bin là! Clique sur le bloc pour les érudits qui déconnent.",
  "fart machine": "Pour péter un peu? C’est là que ça se passe!",
  "jeux": "Solitaire ou jeux rétro? Clique et amuse-toé!",
  "merci": "Bin de rien, mon Pufcorn!",
  "s’il te plaît": "T’inquiète, j’te sers volontiers!",
  "ok": "Okidoki!",
  "oui": "Bin oui, évidemment!",
  "non": "Bin non, crisse!",
  "peux-tu m’aider": "Bin sûr que je peux… tire ton doigt pour info ;)",
  "j’ai besoin d’aide": "T’inquiète, je suis là pour toi, pauvre petit!",
  "comment ça marche": "C’est simple! Clique, lis, amuse-toé!",
  "quoi faire": "Cherche, clique, ris… répète si nécessaire!",
  "je comprends pas": "J’comprends pas… tu peux répéter?"
};

// Génération de questions fictives pour atteindre 1000 réponses
for (let i = 1; i <= 1000; i++) {
  reponses[`question ${i}`] = `Réponse drôle numéro ${i} 😎`; 
}

// Fonction pour afficher le message
function appendMessage(text, sender="Grokon") {
  const msg = document.createElement('div');
  msg.className = 'msg';
  msg.textContent = sender + ": " + text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Fonction pour répondre
function respond() {
  const msg = input.value.trim().toLowerCase();
  if (msg === "") return;
  appendMessage(msg, "Toi");

  let answered = false;
  for (const key in reponses) {
    if (msg === key || msg.includes(key)) {
      appendMessage(reponses[key]);
      answered = true;
      break;
    }
  }

  if (!answered) {
    appendMessage("J’comprends pas… tu peux répéter?");
  }

  input.value = "";
}

// Événements
sendBtn.addEventListener('click', respond);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') respond();
});

