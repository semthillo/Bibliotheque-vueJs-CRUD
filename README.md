## Gestion Bibliothèque Vue.js
Description
Ce projet est une application simple de gestion de livres, permettant d'ajouter, de lister, de modifier et de supprimer des livres. L'application est construite avec Vue.js et utilise Bootstrap pour le style des formulaires et des tables.

**Prérequis**

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

##  Installation

Clonez ce dépôt sur votre machine locale :
```
https://github.com/semthillo/Bibliotheque-vueJs-CRUD.git
```

**Accédez au répertoire du projet**
```
cd Bibliotheque-vueJs-CRUD
```
**Installez les dépendances du projet**

```
npm run dev
```
**Utilisation**

Pour démarrer le serveur de développement, exécutez 

```
npm run dev
```
## Structure du projet

```
gestion-bibliotheque/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Accueil.vue              # Composant pour l'accueil de l'application
│   │   ├── ajouterLivre.vue         # Composant pour ajouter un livre
│   │   ├── AjouterPret.vue          # Composant pour ajouter un prêt
│   │   ├── AjoutMembre.vue          # Composant pour ajouter un membre
│   │   ├── ListeLivre.vue           # Composant pour lister les livres
│   │   ├── ListeMembre.vue          # Composant pour lister les membres
│   │   ├── ListePret.vue            # Composant pour lister les prêts
│   │   ├── Livre.vue                # Composant pour gérer les livres
│   │   ├── Membre.vue               # Composant pour gérer les membres
│   │   ├── modifierlivre.vue        # Composant pour modifier un livre
│   │   └── Pret.vue                 # Composant pour gérer les prêts
│   ├── router/
│   │   ├── index.js                 # Fichier de configuration des routes
│   ├── App.vue                      # Composant principal de l'application
│   ├── main.js                      # Fichier d'entrée JavaScript
│   └── style.css                    # Fichier de styles CSS
│
├── public/
│   └── index.html                   # Fichier HTML principal
│
├── .gitignore                       # Fichier pour ignorer certains fichiers dans Git
├── package-lock.json                # Fichier de verrouillage des versions des dépendances
├── package.json                     # Fichier de configuration des dépendances
└── README.md                        # Fichier README avec des informations sur le projet

```
## Composants Principaux
- AjouterLivre.vue
Ce composant permet d'ajouter un nouveau livre à la liste. Il contient un formulaire avec des champs pour le titre, l'auteur, l'année, et le genre du livre.
- ListerLivre.vue
Ce composant affiche la liste des livres ajoutés dans un tableau. Chaque livre peut être modifié ou supprimé.
- ModifierLivre.vue
Ce composant est utilisé pour modifier un livre existant. Il utilise une prop pour recevoir les données du livre à modifier et émet un événement pour retourner les modifications au composant parent.
- Membre.vue
Ce composant (à définir si nécessaire) pourrait être utilisé pour gérer les membres de la bibliothèque.
## Problèmes et Dépannage
_Erreur de Résolution des Imports_

Si vous rencontrez des erreurs liées à l'importation des composants (Failed to resolve import), assurez-vous que les noms de fichiers et les chemins sont corrects. Par exemple, ListerLivre.vue doit être importé comme ceci :
```
import ListerLivre from './components/ListerLivre.vue';
```
## Authors
#### [Mbaye Abdellahi kalidou](https://github.com/Mbaye01) et [Thillo Abdoulaye Seme](https://github.com/semthillo)

