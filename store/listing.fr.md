# Fiche des boutiques, français

Le texte collé dans les tableaux de bord des boutiques. La description et les notes de version sont en texte brut, car le Chrome Web Store n’affiche aucune mise en forme. Elles ne citent aucun site ni aucune marque : le Chrome Web Store considère leurs listes comme du référencement abusif.

## Nom

SG Unwall

## Résumé

Masque les murs de consentement, les fenêtres de cookies et le blocage du défilement, sans cliquer sur Accepter ni Refuser.

Les boutiques lisent le résumé dans le champ `description` de `src/manifest.json`. Tant que l’extension n’est pas traduite (dossier `src/_locales/`), elles affichent le résumé anglais dans toutes les langues ; ce résumé français sera celui de la traduction.

## Description

SG Unwall masque les murs de consentement, les fenêtres de cookies et le blocage du défilement qu’ils laissent sur la page, pour que vous puissiez lire. Il ne clique jamais sur Accepter ni sur Refuser : l’outil de consentement du site reste sans réponse, et les traceurs qui attendent votre accord ne l’obtiennent jamais.

Ce qu’il retire. La fenêtre qui vous demande d’accepter, où qu’elle se trouve sur la page. Le voile sombre ou flou tendu sur la page. Le blocage du défilement qui empêche la page de bouger : SG Unwall le lève et vous ramène là où vous lisiez. Le flou ou la désactivation que certains sites imposent à l’article tant que vous n’avez pas répondu. SG Unwall masque aussi les fenêtres de lettre d’information, de notifications et d’anti-bloqueur de publicité qui s’ouvrent sans que vous l’ayez demandé.

Comment il les trouve. SG Unwall reconnaît les outils de consentement les plus répandus et masque leurs fenêtres au moment où elles sont ajoutées à la page, le plus souvent avant qu’elles n’apparaissent à l’écran. Il repère les autres murs à leur forme, à leur place sur la page et à leurs mots, en français, en anglais, en allemand, en espagnol et en italien. Il n’a besoin d’aucune liste de filtres.

Ce qu’il laisse en place. Ce que vous ouvrez vous-même : un formulaire de connexion, un menu, une visionneuse de photos. Quand vous cliquez sur le lien de réglage des cookies d’un site, sa propre fenêtre revient pour que vous y répondiez comme vous l’entendez. Les vérifications anti-robots, comme les CAPTCHA, restent en place.

Vous gardez la main. Le menu de SG Unwall liste ce qu’il a masqué sur la page et pourquoi. De là, vous pouvez masquer ce qui reste avec Zap now, rétablir la page avec Undo on this page, désactiver SG Unwall pour un site, ou laisser en place les bandeaux de cookies qui ne bloquent pas la page.

SG Unwall retire les murs de consentement ; il ne contourne pas les murs payants : les articles réservés aux abonnés le restent.

Confidentialité. SG Unwall n’a ni serveur, ni statistiques, ni compte, et n’envoie rien nulle part. Il a besoin d’accéder aux sites que vous visitez pour y trouver les murs, et du stockage pour conserver vos réglages sur votre appareil. Politique de confidentialité : https://sebastienguillon.github.io/sg-unwall/fr/confidentialite.html

SG Unwall est un logiciel libre sous licence MIT : https://github.com/sebastienguillon/sg-unwall. Son menu est en anglais pour l’instant ; son site est en français et en anglais : https://sebastienguillon.github.io/sg-unwall/fr/

SG Unwall est un projet indépendant, sans lien avec les sites ni les outils de consentement qu’il traite.

## Captures d’écran

Téléversez, dans cet ordre, les images 1280x800 de `store/screenshots/` (`pnpm screenshots fr` les recrée depuis la page de démonstration du site, un journal inventé avec un mur de consentement inventé). Le menu de SG Unwall y apparaît en anglais, comme dans l’extension.

1. `fr-1-wall-1280x800.jpg` : la page telle qu’un navigateur sans SG Unwall l’affiche.
2. `fr-2-unwall-1280x800.jpg` : la même page avec SG Unwall, et son menu qui liste ce qu’il a fait.

## Chrome Web Store : pratiques de confidentialité

Ces champs se remplissent séparément dans le Chrome Developer Dashboard, sous Privacy practices. Ils ne sont fournis ni par le ZIP de l’extension ni par la description publique. Collez chaque paragraphe dans le champ correspondant, puis cliquez sur Save Draft avant de soumettre la version. Voir [le guide des champs de confidentialité de Chrome](https://developer.chrome.com/docs/webstore/cws-dashboard-privacy).

### Objectif unique

SG Unwall a un seul objectif : retirer les murs de consentement et les autres fenêtres bloquantes qui couvrent les pages web, avec leurs voiles et le blocage du défilement qu’ils laissent, pour que la page puisse être lue, sans répondre à la fenêtre de consentement.

### Justification de storage

SG Unwall utilise le stockage pour retenir, sur l’appareil de l’utilisateur, les sites où celui-ci l’a désactivé, le fait qu’il masque ou non les bandeaux de cookies qui ne bloquent pas la page, et l’activation ou non de son journal de débogage. Rien de ce qui est stocké n’est envoyé nulle part ; SG Unwall ne fait aucune requête réseau.

### Justification de l’accès aux sites

Le script de contenu de SG Unwall s’exécute sur toutes les pages http et https, car les murs de consentement et les fenêtres bloquantes peuvent apparaître sur n’importe quel site, dès le début du chargement. Il lit la mise en page, le texte visible et les noms des éléments uniquement pour reconnaître un mur, puis masque ce mur et lève le blocage du défilement qu’il a laissé, dans la page. Il ne lit ni les saisies des formulaires, ni les cookies, ni l’historique, et n’envoie aucune donnée de page nulle part.

### Code distant

Sélectionnez « No, I am not using remote code ». Tout le code de SG Unwall est dans le paquet de l’extension : un script de contenu, une feuille de style et la fenêtre de l’extension. Il ne charge rien depuis le réseau et n’exécute aucun code des pages qu’il visite.

### Utilisation des données

Ne cochez aucun type de données : SG Unwall n’en collecte aucune. Cochez les trois engagements : aucune donnée n’est vendue ni transférée à des tiers, aucune n’est utilisée ni transférée à des fins sans rapport avec l’objectif unique de l’extension, et aucune n’est utilisée ni transférée pour évaluer la solvabilité ou accorder un prêt.

### URL de la politique de confidentialité

https://sebastienguillon.github.io/sg-unwall/privacy.html

Ce champ n’accepte qu’une adresse pour toutes les langues ; la page anglaise mène à la version française par le lien « Français » en haut de page.

## addons.mozilla.org

- Résumé et description : comme ci-dessus.
- Page d’accueil : https://sebastienguillon.github.io/sg-unwall/fr/
- Site d’assistance : https://sebastienguillon.github.io/sg-unwall/fr/aide.html
- Licence : MIT.
- Politique de confidentialité : non requise, car SG Unwall déclare dans son manifeste ne collecter aucune donnée.
- Le code n’est ni regroupé ni minifié : aucune archive des sources n’est demandée.

## Notes de version

### 2026.10.20

Première version. SG Unwall masque les murs de consentement, les fenêtres de cookies et les fenêtres de lettre d’information, de notifications et d’anti-bloqueur de publicité qui s’ouvrent d’elles-mêmes, avec les voiles derrière elles et le blocage du défilement qu’elles laissent, sans cliquer sur Accepter ni Refuser. Il rétablit le contenu qu’un mur a flouté ou désactivé, laisse en place ce que vous ouvrez vous-même, et s’efface quand vous ouvrez les réglages de cookies d’un site. Son menu liste ce qu’il a masqué et pourquoi, et permet de masquer ce qui reste, d’annuler ses changements sur une page ou de le désactiver pour un site.
