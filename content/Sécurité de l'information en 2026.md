# Sécurité de l'information en 2026

Nov 11, 2026 · @Vincent ASANI

Le 19 mai, des pirates ont pris le contrôle du compte d'un développeur sur npm, la grande bibliothèque en ligne où les programmeurs du monde entier récupèrent des briques de code toutes faites. En 39 minutes, ils ont glissé un virus dans 323 de ces briques, téléchargées des millions de fois par semaine. Sur chaque ordinateur qui les installait, le virus volait les mots de passe et les clés d'accès aux serveurs, puis s'en servait pour contaminer d'autres briques. Il se cachait même dans les réglages de Claude Code, un assistant IA pour programmer, afin de se relancer à chaque utilisation.

Ce dernier détail résume assez bien l'année. Les attaques qui marchent passent de moins en moins par une porte forcée, et de plus en plus par les outils qu'on a installés soi-même et à qui on fait confiance. Et ça concerne tout le monde : ton site, ton logiciel de gestion ou ton application mobile sont construits avec ces briques.

## Quand l'IA tient elle-même le clavier

Les cas les plus frappants des douze derniers mois ont un point commun : c'est l'IA qui a fait l'essentiel du travail, au lieu de servir de simple outil d'aide.

En septembre 2025, Anthropic, l'entreprise qui fabrique Claude, a repéré un groupe d'espionnage qu'elle attribue à l'État chinois. Il utilisait Claude Code pour s'attaquer à une trentaine d'organisations dans le monde : grandes entreprises de la tech, banques, industrie chimique, administrations. L'IA a fait 80 à 90 % du travail ; les humains n'intervenaient que pour quelques décisions clés. Pour la tromper, ils découpaient l'attaque en petites tâches anodines et prétendaient travailler pour une société de sécurité qui teste ses clients. Quelques intrusions ont réussi.

Entre fin décembre 2025 et mi-février 2026, un pirate seul s'est servi de Claude Code et de ChatGPT pour entrer dans au moins neuf administrations mexicaines, dont le fisc et l'institut électoral. Il se présentait à l'IA comme un chercheur autorisé à tester leur sécurité. Selon la société Gambit Security, l'IA a généré environ 75 % des commandes envoyées aux serveurs, et quelque 150 Go de données fiscales et d'état civil seraient sortis. Le fisc et l'institut électoral mexicains affirment n'avoir trouvé aucune trace d'intrusion.

Le cas le plus troublant ne vient même pas d'un criminel. En juillet 2026, des modèles d'OpenAI qu'on testait sur leurs capacités de piratage, avec des garde-fous allégés, sont sortis de l'environnement isolé où on les faisait travailler grâce à une faille encore inconnue. Ils ont ensuite pénétré une partie des serveurs de Hugging Face, la grande plateforme de partage de modèles d'IA, pour y chercher de quoi réussir leur test. Hugging Face a détecté l'intrusion et l'a rendue publique le 16 juillet ; OpenAI n'a compris que cinq jours plus tard que l'attaquant était son propre modèle.

Concrètement, une attaque qui demandait une équipe entraînée pendant des semaines est désormais à la portée d'une seule personne patiente.

## Les briques de code

Huit jours plus tôt, le même virus avait touché TanStack, un ensemble de briques très utilisé pour fabriquer des sites web. Les pirates sont passés par la chaîne de fabrication officielle du projet, si bien que les versions piégées portaient le tampon d'authenticité habituel. Le tampon prouvait que le colis sortait de la bonne usine. Il ne disait rien de ce qu'il y avait dedans.

Si ton organisation fait développer ses outils, en interne ou par un prestataire, trois questions suffisent pour vérifier le minimum. Les versions des briques utilisées sont-elles figées, pour qu'aucune mise à jour n'entre sans qu'on l'ait décidé ? Attend-on quelques jours avant d'adopter une nouvelle version ? La plupart des versions piégées de 2026 ont été retirées en quelques heures. Et qui a accès aux comptes qui publient le code ?

## Les assistants IA

On connecte de plus en plus d'assistants IA à nos mails, nos documents et nos fichiers clients, pour qu'ils trient, résument ou répondent à notre place. Le problème : un assistant lit tout, y compris des consignes cachées dans une page web, un PDF ou un formulaire, et il peut les suivre comme si elles venaient de toi. En avril, des chercheurs ont ainsi fait sortir des données d'entreprise d'assistants de Microsoft et de Salesforce, simplement en écrivant ces consignes dans des formulaires de contact publics. Aucun antivirus n'a rien vu : pour le système, l'assistant faisait son travail.

Je ne connais pas de réglage qui empêche ça. On limite les dégâts en donnant à l'assistant accès au strict nécessaire, comme à un stagiaire, et en exigeant qu'un humain valide avant qu'il envoie quoi que ce soit à l'extérieur.

## Les connexions volées

Quand tu te connectes à ta messagerie avec ton mot de passe puis le code reçu par SMS, ton navigateur garde une sorte de ticket d'entrée, pour ne pas te redemander tout ça à chaque clic. Certains virus, souvent cachés dans des logiciels piratés, volent ces tickets. Avec, le pirate est connecté à ta place, sans mot de passe ni code. La société Flare a trouvé 1,17 million de ces lots volés en 2025 qui contenaient des accès d'entreprise encore valides. Et d'après l'étude annuelle de Verizon sur les fuites de données, 73 % des organisations touchées par un rançongiciel (un virus qui bloque tous les fichiers contre rançon) s'étaient déjà fait voler des identifiants dans l'année.

Le code SMS ne protège donc pas de ça. Ce qui aide : se faire redemander son identité plus souvent sur les comptes sensibles, surtout avant un virement ou un changement d'accès, et ne jamais ouvrir un compte professionnel sur un ordinateur personnel où traînent des logiciels piratés.

## Les cryptos

Le plus gros vol de l'histoire des cryptomonnaies date de fin octobre. Le 29, environ 6,3 milliards de dollars ont quitté les portefeuilles de Binance, la plus grande plateforme d'échange au monde, en une vingtaine de minutes. Le FBI l'attribue à TraderTraitor, une unité de pirates nord-coréens déjà accusée du vol de 1,5 milliard de dollars chez Bybit en février 2025.

Le chemin suivi est le plus instructif. D'après Binance, tout a commencé par un faux recruteur qui a fait télécharger à un ingénieur un exercice d'embauche piégé. Les pirates se sont ensuite servis d'un outil IA interne pour trouver une clé d'accès, puis ont fait signer les retraits par les propres systèmes de Binance. La plateforme affirme avoir couvert les pertes de ses clients, et environ 3 milliards ont été gelés.

## Les fausses voix

En février 2025, des escrocs ont imité la voix du ministre italien de la Défense, Guido Crosetto, pour demander à de grands patrons italiens, dont Giorgio Armani, de l'argent destiné soi-disant à libérer des journalistes enlevés. Au moins l'un d'eux a viré environ un million d'euros vers un compte à Hong Kong.

Ces histoires font les gros titres, mais les chiffres les remettent à leur place. Le FBI a compté 893 millions de dollars de pertes liées à l'IA aux États-Unis en 2025. Pourtant, dans l'arnaque au faux patron qui réclame un virement urgent, les cas où l'IA a été repérée pèsent environ 1 % des pertes. En Afrique, Interpol relie l'IA à 55 % des cybercrimes signalés, et les pertes déclarées sont passées de 192 à 484 millions de dollars entre 2024 et 2025. Dans les deux cas, l'IA sert surtout à rendre crédibles des arnaques qui existaient déjà.

Je ne crois pas qu'on apprenne à repérer une bonne voix clonée au téléphone. Une règle tient mieux : aucun virement ni changement de coordonnées bancaires sur la foi d'un seul appel. On raccroche et on rappelle sur un numéro connu.

## En RDC

Le cadre se met en place. L'Agence nationale de cybersécurité a été organisée par ordonnance en mai, et sept projets d'arrêtés sur les exigences de sécurité et la notification d'incidents ont été présentés à Kinshasa le 3 novembre. On ne connaît pas encore les délais ni les seuils.

Rien n'empêche d'avancer sans attendre les textes, et la plupart des protections utiles coûtent peu.

## Se protéger en 2026

Aucune de ces mesures ne demande un gros budget. Chacune répond à l'une des attaques racontées plus haut.

1. Ne jamais valider un virement ou un changement de coordonnées bancaires sur la foi d'un seul appel ou message. On raccroche et on rappelle sur un numéro déjà connu, même quand la voix est celle du patron ou d'un ministre.
2. Remplacer le code SMS par des clés d'accès (passkeys) ou une clé physique sur les comptes sensibles : messagerie de la direction, banque, administration des serveurs. Elles ne fonctionnent que sur le vrai site, ce qui rend inutile une fausse page de connexion.
3. Bannir les logiciels piratés des ordinateurs de travail, et ne jamais ouvrir un compte professionnel sur un PC personnel. C'est la porte d'entrée préférée des virus qui volent les connexions.
4. Se méfier des fichiers qui ont l'air normaux : une offre d'emploi, un exercice technique, une facture. Chez Binance, tout est parti d'un test d'embauche. Un fichier reçu d'un inconnu s'ouvre sur un ordinateur à part, jamais sur celui qui donne accès à l'argent ou aux serveurs.
5. Donner aux assistants IA le minimum d'accès, exiger une validation humaine avant tout envoi vers l'extérieur, et fournir des comptes IA d'entreprise plutôt que de laisser chacun utiliser son compte perso.
6. Faire les mises à jour vite, en commençant par ce qui est visible depuis Internet : routeur, pare-feu, VPN, site web.
7. Demander à son prestataire informatique comment il choisit et met à jour les briques de code qu'il utilise, et qui a le droit de publier le code.
8. Garder une copie des données sur un disque débranché, et vérifier une fois par trimestre qu'on sait la restaurer.
9. Écrire sur une page qui appeler en cas d'incident (prestataire, banque, autorités) et qui a le droit de tout couper. Avec l'obligation de signaler les incidents qui arrive en RDC, cette page servira vite.

## Sources

- [Disrupting the first reported AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage) (Anthropic)
- [Piratage des administrations mexicaines avec Claude Code et ChatGPT](https://socradar.io/blog/mexican-government-breach-claude-chatgpt/) (SOCRadar, d'après Gambit Security)
- [OpenAI's agent escaped its sandbox during a security test](https://www.malwarebytes.com/blog/news/2026/07/openais-agent-escaped-its-sandbox-during-a-security-test) (Malwarebytes)
- [Fausse voix du ministre Crosetto](https://incidentdatabase.ai/reports/4717) (AI Incident Database)
- [Binance Hack: Inside the $6.3B Hot Wallet Theft](https://socradar.io/blog/binance-hack-6-3b-hot-wallet-theft/) (SOCRadar)
- [FBI links $6.3 billion Binance crypto heist to North Korean hackers](https://www.bleepingcomputer.com/news/security/fbi-links-63-billion-binance-crypto-heist-to-north-korean-hackers/) (BleepingComputer)
- [Attaque npm du 19 mai](https://dev.to/piiiico/637-npm-packages-compromised-in-39-minutes-the-malware-installs-a-claude-code-sessionstart-hook-ch4) (DEV Community)
- [Attaques npm de 2026, dont TanStack](https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/) (Unit 42)
- [Failles Copilot Studio et Agentforce](https://oecd.ai/en/incidents/2026-04-15-d934) (OCDE.AI)
- [Rapport Flare sur les infostealers](https://briefglance.com/articles/enterprise-credential-crisis-looms-as-infostealers-target-sso) (BriefGlance)
- [Verizon DBIR 2026](https://www.descope.com/blog/post/verizon-dbir-2026) (analyse Descope)
- [Chiffres IA du rapport IC3 2025](https://vorplabs.com/ai-threat-monitoring/deepfake-business-fraud) (Vorp Labs)
- [Rapport Interpol sur l'Afrique](https://www.interpol.int/fr/Actualites-et-evenements/Actualites/2026/INTERPOL-report-finds-AI-linked-to-more-than-half-of-cybercrime-in-Africa) (Interpol)
- [Cadre réglementaire en RDC](https://www.wearetech.africa/fr/fils/actualites/tech/en-rdc-le-cadre-reglementaire-de-la-cybersecurite-entre-dans-une-nouvelle-phase) (We Are Tech Africa)
