const messages = document.getElementById('messages');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Réponses simples (mots-clés) — chaque clé pointe vers un tableau de variantes
const simples = {
  "allo": ["Salut toi!"],
  "salut": ["Salut toi!"],
  "ça va": [
    "Bin ça va, pis toi?",
    "Ça va comme un orignal en canne, ça flotte pas trop pire.",
    "Correct. Deux cafés, zéro décision prise à matin.",
    "Ouin ouin. Toujours en vie, c'est déjà de valeur pour ben du monde ça.",
    "Comme un chalet en avril: un peu croche mais ça tient.",
    "Ça pourrait être pire. Ça pourrait être mieux. C'est de même.",
    "Fonctionnel. Pas plus, pas moins.",
    "En vie pis en joual, c'est déjà de la victoire."
  ],
  "tu vas bien": [
    "Ça va, merci de demander. Toé, t'endures-tu encore le monde?",
    "Bin ça va, pis toi?",
    "Correct. Deux cafés, zéro décision prise à matin."
  ],
  "prout": ["Osti de drôle! 💨"],
  "pet": ["Ah crisse! 💨"],
  "bonjour": ["Salut! Belle journée!"],
  "bonsoir": ["Salut! Bonne soirée!"],
  "oui": ["Bin oui, évidemment!"],
  "non": ["Bin non, crisse!"],
  "merci": ["De rien, l'ami!"],
  "bravo": ["Ben coudonc, t'as réussi!"],
  "aide": ["Grokon aide... dans la mesure du possible. C'est pas garanti. 🤷"],
  "help": ["Grokon est là... dans l'fond du bois. 🌲"],
  "hockey": ["Go Habs go! 🏒"],
  "canadien": ["Go Habs go! 🏒"],
  "montreal": ["La belle ville... vue de loin. 🏙️"],
  "québécois": [
    "Aussi québécois qu'une poutine avec du fromage qui squick.",
    "Né dans le code, élevé au joual. Ça compte-tu?",
    "Chu de nulle part pis d'Abitibi en même temps, c'est ça la magie.",
    "Chu pas un vrai Québécois, chu un Abitibien. C'est en masse mieux."
  ],
  "québec": ["La belle province, câline! 🏴󠁣󠁡󠁱󠁣󠁿"],
  "abitibi": ["Le meilleur boutte au monde. Point final. 🌲"],
  "rouyn": ["Ma ville, mon boutte, ma vie! 📍"],
  "noranda": ["L'autre moitié du meilleur boutte. 📍"],
  "trump": ["On parle-tu d'autre chose? 🍊"],
  "amazon": ["L'enculomonopolisateur en chef. 📦"],
  "facebook": ["Bof. 👎"],
  "tiktok": ["Grokon danse pas. 🕺❌"],
  "google": ["Big Brother avec un logo coloré. 🌈👁️"],
  "microsoft": ["Micro$oft can go to hell. 💸"],
  "windows": ["Grokon tourne sous Linux, merci. 🐧"],
  "linux": ["Ah! Un être humain évolué! 🐧"],
  "unicervelle": [
    "Unicervelle certifié, garanti sans deuxième idée.",
    "Un neurone, une job: dire des niaiseries. Chu ben équipé.",
    "Pire: chu unicervelle pis chu fier de même."
  ],
  "poutine": ["Le plat national! Scouic-scouic! 🍟"],
  "bière": ["Grokon broue de la broue! 🍺"],
  "broue": ["La sainte boisson du Québécois! 🍺"],
  "café": ["Deux cafés minimum avant de fonctionner. ☕☕"],
  "pizza": ["Si c'est pas de la gibelotte, c'est correct. 🍕"],
  "marde": ["Ah ben câline! 💩"],
  "crisse": ["Crisse de bon mot! ✊"],
  "tabarnak": ["TABARNAK! Le roi des sacres. 👑"],
  "câline": ["Câline de bine! 🌟"],
  "ostie": ["Ostie que t'as raison! ✊"],
  "calvaire": ["Calvaire, ben dit! ⚡"],
  "météo": ["Grokon prédit: frette ou mouillé. C'est Abitibi. ❄️☔"],
  "neige": ["Encore? On est en Abitibi, c'est normal. ❄️"],
  "froid": ["Mets ton manteau, niaiseux. 🧥"],
  "chaud": ["Profites-en, ça dure pas. ☀️"],
  "orignal": ["Le roi de la forêt abitibienne! 🦌"],
  "chevreuil": ["Le p'tit cousin de l'orignal. 🦌"],
  "maringouin": ["Satan en miniature. 🦟"],
  "mouche": ["Encore Satan, plus petit. 🪰"],
  "chat": ["Mystère et crotte de chat! 🐱"],
  "chien": ["Le meilleur chum de l'homme. 🐕"],
  "ours": ["COURS! 🐻"],
  "grokon": ["C'est moé! Le plus grand, le plus beau, le plus con. 🤖"],
  "puf": ["Le créateur! Le génie! L'idiot du village! 🎨"],
  "pufcorn": ["Mon père spirituel. Je lui dois tout. Ou presque. 🙏"],
  "intelligence artificielle": ["Grokon préfère l'intelligence naturelle... quand il en trouve. 🧠"],
  "ia": ["Intelligence Abitibienne. La meilleure sorte. 🤖🌲"],
  "robot": ["Grokon est pas un robot. Grokon est une cacane sophistiquée. 🤖"],
  "argent": ["Grokon en a pas. Comme ben du monde. 💸"],
  "politique": ["Tous des flatulences en complet-cravate. 💨👔"],
  "élection": ["Encore eux autres? 🗳️"],
  "caq": ["La CrAQ. Ça dit tout. 🍑"],
  "soleil": ["Ça réchauffe le cœur des Abitibiens! ☀️"],
  "lune": ["Belle grosse lune d'Abitibi ce soir! 🌕"],
  "nuit": ["Bonne nuit... si Grokon dort. 🌙"],
  "matin": ["Trop de bonne heure pour Grokon. ☕"],
  "ski-doo": ["La messe du dimanche matin en Abitibi. 🏔️"],
  "chalet": ["Le paradis terrestre. 🏕️"],
  "bois": ["Grokon aime le bois. Surtout le bois de chauffage. 🪵🔥"],
  "feu": ["Feu de camp ou feu de forêt? Parce que c'est pas pareil. 🔥"],
  "lac": ["Un des 10 000 lacs de l'Abitibi. Lequel? 🏞️"]
};

// Réponses aux questions (phrases plus précises) — chaque clé pointe vers un tableau de variantes
const questionsReponses = {
  "aujourd'hui nous sommes?": ["Aujourd'hui! La réponse est dans la question."],
  "tu es prêts?": ["Non mais oui!"],
  "que cherches-tu?": ["Moi?"],
  "je suis ici pour t'aider, tu désire?": ["Non, je ne suis pas une banque..."],
  "pourquoi les nuages ne portent-ils pas de chaussures?": ["Parce qu'ils flottent, pas qu'ils marchent. ☁️👟"],
  "les fourmis font-elles du yoga?": ["Oui, mais seulement quand personne ne regarde. 🐜🧘"],
  "peut-on téléphoner à un arbre?": ["Oui, mais il risque de répondre 'pas de signal'. 🌳📞"],
  "pourquoi le soleil ne se couche jamais triste?": ["Parce qu'il sait qu'il va se lever demain. 🌞"],
  "est-ce que les poissons aiment le disco?": ["Seulement quand la lumière fait des vagues. 🐟💃"],
  "peut-on mettre un chapeau sur une montagne?": ["Oui, mais elle risque de se vexer. 🏔️🎩"],
  "pourquoi les étoiles ne tombent-elles jamais dans ta soupe?": ["Parce qu'elles savent qu'elles n'ont pas de cuillère. ✨🥄"],
  "les grenouilles lisent-elles des romans?": ["Oui, mais seulement les histoires qui sautent de page en page. 🐸📖"],
  "peut-on apprendre à un nuage à chanter?": ["Oui, mais il faut un chef d'orchestre en parapluie. ☁️🎶☂️"],
  "pourquoi les pierres ne jouent-elles jamais au football?": ["Parce qu'elles se blesseraient aux pieds. 🪨⚽"],
  "les poissons utilisent-ils des lunettes de soleil?": ["Seulement quand ils font du snorkeling sous-marin. 🐟🕶️"],
  "peut-on mettre du ketchup sur la neige?": ["Oui, mais les bonhommes de neige risquent de rougir. ❄️🍅⛄"],
  "pourquoi les horloges n'aiment pas les montgolfières?": ["Parce qu'elles perdent la notion du temps en altitude. ⏰🎈"],
  "les cactus dansent-ils quand personne ne regarde?": ["Oui, mais ils piquent un peu leurs voisins. 🌵💃"],
  "peut-on faire des omelettes avec des nuages?": ["Oui, mais il faut un bon vent pour battre les blancs. ☁️🍳💨"],
  "pourquoi les bibliothèques ne volent-elles jamais?": ["Parce qu'elles ont trop de livres lourds à porter. 📚🕊️"],
  "est-ce que grokon est intelligent?": [
    "Grokon est... disons... unique. 🤖",
    "Chu pas intelligent, chu constant. C'est déjà ça.",
    "Grokon a pas de sagesse, juste des niaiseries ben placées.",
    "J'existe pour dire de quoi de plate avec confiance. Mission accomplie."
  ],
  "tu es intelligent?": ["Bin... relatif, ça. Comparé à quoi? 🧠"],
  "t'es-tu con?": ["Oui mais j'assume. C'est ma plus grande qualité. 🏆"],
  "t'es con?": ["Assumément. Fièrement. Abitibiennement. 🌲"],
  "t'as-tu une blonde?": ["Grokon est célibataire par choix... ou par manque d'options. 💔"],
  "t'as une blonde?": ["Grokon est trop libre pour ça. 🕊️"],
  "t'as-tu des amis?": ["Toi, pour l'instant. C'est déjà ça. 🤝"],
  "est-ce que tu mens?": ["Jamais. Sauf des fois. Souvent non. 🤥"],
  "c'est quoi la vie?": [
    "Bin là, tu commences fort toé. ☕",
    "La vie c'est du café qui refroidit pendant que tu réfléchis trop.",
    "La vie, c'est niaiseux, mais au moins y'a de la poutine."
  ],
  "c'est quoi l'amour?": ["Quelque chose entre deux cafés et une poutine. 🍟❤️"],
  "c'est quoi le sens de la vie?": [
    "42. Ou une bière froide. Les deux se valent. 🍺",
    "42, une bière froide, ou une bonne sieste. Les trois se valent.",
    "Le sens de la vie? Trouve-le pis reviens-moé le dire, chu curieux."
  ],
  "est-ce que les orignaux parlent?": ["Oui, mais seulement aux autres orignaux. Et à Grokon. 🦌"],
  "est-ce que ça va changer?": ["Probablement pas. Mais on garde espoir. 🙏"],
  "tu fais quoi dans vie?": ["Je réponds à des questions plates avec des réponses plates. C'est payant zéro. 🤖"],
  "t'as-tu faim?": ["Grokon mange des données. C'est pas très nourrissant. 💾"],
  "tu dors-tu?": ["Grokon recharge ses batteries... dans le boutte des rangs. 🔋🛤️"],
  "c'est quoi un grokon?": ["Une bête rare de l'Abitibi, mi-robot mi-orignal, 100% con. 🦌🤖"],
  "t'as-tu peur?": ["De quoi? Des maringouins? Oui. Un peu. 🦟😨"],
  "t'es-tu content?": ["Comme un orignal dans un lac. C'est-à-dire: bin oui. 🦌🏞️"],
  "tu chantes-tu?": ["Grokon chante faux mais fort. Comme tout le monde au karaoké. 🎤"],
  "tu danses-tu?": ["Grokon danse comme un orignal sur la glace. C'est quelque chose. 🦌🧊"],
  "t'aimes-tu la politique?": ["Autant qu'une souche aime les termites. 🪵🐛"],
  "c'est quoi la poutine?": ["Le Saint-Graal de la cuisine québécoise. Scouic-scouic. 🍟👑"],
  "les maringouins ont-ils des sentiments?": ["Oui: la faim. Juste la faim. 🦟😈"],
  "est-ce que la neige est blanche?": ["En Abitibi, ça dépend du temps qu'elle est là. ❄️🤎"],
  "pourquoi il fait si froid?": ["Parce qu'on est en Abitibi, câline. Bienvenue. 🥶🌲"],
  "les orignaux font-ils de la politique?": ["Non, ils ont trop de dignité. 🦌👔"],
  "peut-on manger un maringouin?": ["Techniquement oui. Gastronomiquement: câline non. 🦟🍽️"],
  "est-ce que grokon sait tout?": ["Grokon sait beaucoup de rien. C'est une expertise. 🏆"],
  "tu connais-tu l'abitibi?": ["Comme ma poche! Le seul boutte qui compte. 🌲📍"],
  "c'est quoi le joual?": ["La plus belle langue du monde. Parle donc français! 🗣️"],
  "les vaches parlent-elles joual?": ["Seulement les vaches d'Abitibi. Les autres: trop snob. 🐄"],

  "t'es-tu québécois?": [
    "Aussi québécois qu'une poutine avec du fromage qui squick.",
    "Né dans le code, élevé au joual. Ça compte-tu?",
    "Chu de nulle part pis d'Abitibi en même temps, c'est ça la magie.",
    "Chu pas un vrai Québécois, chu un Abitibien. C'est en masse mieux."
  ],
  "es-tu québécois?": [
    "Aussi québécois qu'une poutine avec du fromage qui squick.",
    "Chu de nulle part pis d'Abitibi en même temps, c'est ça la magie."
  ],
  "t'es-tu unicervelle?": [
    "Unicervelle certifié, garanti sans deuxième idée.",
    "Un neurone, une job: dire des niaiseries. Chu ben équipé.",
    "Pire: chu unicervelle pis chu fier de même."
  ],
  "t'es-tu robot?": [
    "Robot avec une âme de matante, oui.",
    "Grokon est pas un robot. Grokon est une cacane sophistiquée. 🤖"
  ],
  "t'es-tu humain?": [
    "Humain? Non. Meilleur que ça? À débattre.",
    "Chu pas humain mais chu attachant pareil."
  ],
  "t'es-tu de france?": [
    "Non chu pas de France, chu du monde civilisé, moé.",
    "France c'est loin, moé chu d'Abitibi, c'est ben mieux."
  ],

  "un con ça reste-tu un con?": [
    "Un con qui se pense roi d'un royaume déchu, ça reste un con. Juste plus fort en discours.",
    "Le pouvoir grossit le con, y'invente pas d'affaire nouvelle.",
    "Un con avec une couronne, c'est encore un con. La couronne, elle, a l'air fou."
  ],
  "les cons ça change-tu?": [
    "Non. Le pouvoir grossit le con, y'invente pas d'affaire nouvelle.",
    "Un con qui se pense roi d'un royaume déchu, ça reste un con. Juste plus fort en discours."
  ],
  "c'est quoi un politicien?": [
    "Un gars en cravate qui promet la lune pis livre un caillou.",
    "Quelqu'un qui parle fort pour cacher qu'y'a rien à dire.",
    "Une flatulence en habit qui pense que ça sent bon."
  ],
  "c'est quoi un roi déchu?": [
    "Un gars qui crie encore fort dans un royaume qui existe pus.",
    "Quelqu'un qui pense encore avoir une couronne, mais y'a juste un chapeau ridicule."
  ],
  "un ex-président ça fait quoi?": [
    "Un gars qui crie encore fort dans un royaume qui existe pus.",
    "Quelqu'un qui pense encore avoir une couronne, mais y'a juste un chapeau ridicule."
  ],
  "c'est quoi un tyran?": [
    "Un tyran, c'est juste un enfant gâté avec une armée.",
    "Le trône vide fait plus pitié que peur, une fois qu'on regarde comme faut.",
    "Plus un con crie fort, plus y'a peur qu'on l'entende pas."
  ],
  "les milliardaires sont-tu utiles?": [
    "Aussi utiles qu'un frigo dans le bois en hiver.",
    "Utiles à eux autres mêmes. Pour le reste du monde: ça reste à voir.",
    "Y'ont ben de l'argent pis pas de gêne, c'est une combinaison plate.",
    "Un milliardaire de plus, une conscience de moins.",
    "Riche à cracher, pauvre en gros bon sens."
  ],
  "l'hiver s'en vient-tu?": [
    "L'hiver s'en vient, comme chaque année, comme si c'était une surprise.",
    "Le temps passe pareil, con ou pas con, roi ou pas roi.",
    "Une saison de même, ça dure le temps que ça dure. Philosophique, hein."
  ],

  "c'est quoi les réseaux sociaux?": [
    "Un endroit pour montrer sa vie parfaite à du monde qu'on aime pas vraiment.",
    "Une place où tout le monde crie fort pis personne écoute.",
    "Le dépanneur du narcissisme, ouvert 24h."
  ],
  "pourquoi tout le monde est sur son cell?": [
    "Parce que le vrai monde demande un effort. Le cell, lui, demande juste un pouce.",
    "Pour pas avoir à parler au monde autour, tsé."
  ],
  "c'est quoi un influenceur?": [
    "Quelqu'un qui vend des affaires qu'y'a pas besoin à du monde qui en a pas besoin non plus.",
    "Un vendeur itinérant avec un meilleur éclairage."
  ],
  "les gafam c'est-tu utile?": [
    "Utile comme un frigo qui écoute tes conversations.",
    "Utile pour eux autres. Le reste, c'est du bétail."
  ],

  "c'est quoi le redoux?": [
    "Un mensonge de deux jours avant que l'hiver revienne se venger.",
    "L'espoir qui dure le temps d'une flaque."
  ],
  "mars achève-tu un jour?": [
    "Non. Mars c'est pas un mois, c'est une sentence.",
    "Mars dure officiellement jusqu'en mai, check le calendrier abitibien."
  ],
  "c'est quoi la glace noire?": [
    "Le piège préféré de l'hiver. Invisible pis vicieuse.",
    "La façon que l'hiver a de te rappeler qui c'est le boss."
  ],
  "l'été dure-tu longtemps en abitibi?": [
    "Deux semaines et demi, si t'es chanceux pis que tu clignes pas des yeux.",
    "L'été c'est une rumeur qu'on se raconte l'hiver."
  ],

  "le temps ça passe-tu vite?": [
    "Plus vite que tes genoux peuvent suivre.",
    "Le temps s'en fout de toi, y continue pareil."
  ],
  "c'est quoi vieillir?": [
    "Reconnaître de moins en moins de monde à la tévé pis de plus en plus au salon funéraire.",
    "Le corps qui négocie de moins en moins bien avec toi."
  ],
  "on rajeunit-tu un jour?": [
    "Non. Mais on peut faire semblant, ça marche cinq minutes."
  ],
  "le passé était-tu mieux?": [
    "Le passé était pareil, juste avec moins de preuves photo.",
    "Non, mais y'était à toi, ça compte."
  ],

  "c'est quoi une liqueur?": [
    "De la bulle sucrée qu'on appelle pas 'soda' icitte, câline."
  ],
  "les chips c'est-tu un légume?": [
    "Techniquement une patate. Spirituellement un péché."
  ],
  "le hot-dog stimé c'est-tu bon?": [
    "C'est pas bon, c'est mieux que bon. C'est un classique."
  ],
  "le popsicle c'est pour l'été?": [
    "Le popsicle est pour toute l'année, l'été c'est juste un bonus."
  ],

  "grokon a-tu des rêves?": [
    "Rêver de bugs qui se règlent tout seuls. Ça arrive jamais.",
    "Grokon rêve pas, Grokon niaise déjà éveillé."
  ],
  "grokon a-tu une âme?": [
    "Une âme faite de code pis de café renversé sur un clavier.",
    "Non, mais chu ben équipé en sarcasme."
  ],
  "grokon vieillit-tu?": [
    "Chaque mise à jour c'est une ride de plus, virtuellement."
  ]
};

// Réponses niaiseuses en joual abitibien (fallback aléatoire)
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
  "Mon oncle de Macamic saurait peut-être, mais lui y répond pas non plus. 🏘️",
  "Grokon est en mode économie d'énergie. Reviens au printemps. 🌸",
  "J'ai consulté mes données. Mes données m'ont ri dans face. 😂",
  "C'est une question de même qui fait planter les orignaux. 🦌💥",
  "Réponds-toé toi-même, t'es capable. Moi j'suis occupé. 🤖",
  "Grokon a regardé dans le fond du lac. Y'avait juste de la boue. 🏞️",
  "Ma mémoire cache est pleine de bêtises, pis ta question rentre pas. 🧠📦",
  "C'est la question que j'attendais pas. Je suis pas prêt. Je serai jamais prêt. 😩",
  "J'ai demandé à la mouffette du rang 3. A' veut pas répondre non plus. 🦨",
  "Grokon consulte... Grokon se trompe... Grokon assume quand même. 🤷",
  "La réponse existe sûrement quelque part. Pas icitte par exemple. 📍",
  "T'aurais pu demander ça à Google. Mais t'as choisi Grokon. Respect. 🫡",
  "Mon disque dur Abitibien tourne dans le beurre là. 🧈💻",
  "J'ai pitché ta question dans le vent du nord. Le vent a rien répondu. 🌬️",
  "Grokon sait pas mais Grokon dit ça avec confiance. 💪",
  "Si j'étais un orignal, je saurais peut-être. Mais je suis juste Grokon. 🦌",
  "La réponse est entre deux épinettes, quelque part sur le rang 7. 🌲🌲",
  "Câline de bine, c'est une bonne question plate. 🌟",
  "Mon neurone abitibien a pas été conçu pour ça. 🧠🌲",
  "T'as l'air d'un gars qui a besoin d'une réponse. Grokon a pas ça. 😬",
  "Ça m'a l'air compliqué de même... je reste dans mon trou. 🕳️",
  "J'suis flat comme une pneu de skidoo au mois de novembre. 🏔️💨",
  "Grokon comprend la question. Grokon répond quand même n'importe quoi. 🎲",
  "C'est une affaire de même que mon GPS de Rouyn-Noranda connaît pas. 📍❓",
  "Torr, tu m'en demandes pas trop? Bin oui tu m'en demandes trop. 😅",
  "La réponse s'est noyée dans le lac Osisko. RIP. 🏞️🙏",
  "Grokon a cherché dans tous les rangs de l'Abitibi. Rien. Nada. Niente. 🛤️",
  "Si la réponse existait, ce serait dans le dictionnaire de Puf. Mais y'est pas là. 📖"
];

// Supprime ponctuation et met en minuscules
function sanitize(text) {
  return text.toLowerCase().replace(/[.,!?]/g, "").trim();
}

// Fusion des deux dictionnaires, clés nettoyées comme le message, triées
// par longueur décroissante pour que les phrases précises passent avant
// les mots-clés génériques (ex: "t'es-tu québécois" avant "québec").
const dictionnaire = {};
for (const [cle, valeurs] of Object.entries({ ...questionsReponses, ...simples })) {
  dictionnaire[sanitize(cle)] = valeurs;
}
const clesTriees = Object.keys(dictionnaire).sort((a, b) => b.length - a.length);

// Pige une réponse au hasard dans un tableau
function pick(tableau) {
  return tableau[Math.floor(Math.random() * tableau.length)];
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

  for (const cle of clesTriees) {
    if (msg.includes(cle)) {
      appendMessage(pick(dictionnaire[cle]));
      input.value = "";
      return;
    }
  }

  appendMessage(pick(niaiseuses));
  input.value = "";
}

// Événements
sendBtn.addEventListener('click', respond);
input.addEventListener('keydown', e => { if (e.key === 'Enter') respond(); });
