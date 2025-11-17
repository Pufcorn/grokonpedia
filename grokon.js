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
  "bonsoir": "Salut! Bonne soirée!"
};

// 1000+ réponses niaiseuses
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

  // Répond à tout mot simple présent dans la phrase
  for (const key in simples) {
    if (msg.indexOf(key) !== -1) { // <<== ici c’est le contains réel
      appendMessage(simples[key]);
      input.value = "";
      return;
    }
  }

  // Sinon réponse aléatoire
  const aleatoire = niaiseuses[Math.floor(Math.random() * niaiseuses.length)];
  appendMessage(aleatoire);
  input.value = "";
}

// Événements
sendBtn.addEventListener('click', respond);
input.addEventListener('keydown', e => { if (e.key === 'Enter') respond(); });
