# AS Assembly Solutions SA - Site Web Officiel

> Site web moderne pour AS Assembly Solutions SA, entreprise spécialisée dans la fabrication de sous-ensembles, ensembles et machines complètes basée à Etoy, Suisse.

![Astro](https://img.shields.io/badge/Astro-5.16.0-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

---

## 📋 À propos du projet

Ce projet consiste en une refonte complète du site web de **AS Assembly Solutions SA**. L'objectif est de créer une présence web moderne, performante et professionnelle qui reflète l'excellence et le savoir-faire de l'entreprise dans le domaine de la fabrication industrielle.

### À propos de l'entreprise

**AS Assembly Solutions SA** est une société active dans la fabrication complète de sous-ensembles, ensembles et machines complètes depuis 2008. L'entreprise est située dans la zone industrielle d'Etoy, entre Genève et Lausanne, au cœur d'une riche culture industrielle et mécanique.

### Valeurs clés

- **PROXIMITÉ** - Positionnement stratégique pour des partenariats réussis en Suisse romande
- **FLEXIBILITÉ** - Spécialisation dans la fabrication complète, de sous-ensembles aux machines complètes
- **RÉACTIVITÉ** - Réseau étendu, infrastructure de premier plan et expertise reconnue

---

## ✨ Fonctionnalités techniques

- 🚀 **Astro.js** - Génération de sites statiques ultra-rapides
- ⚛️ **React** - Composants interactifs pour une expérience utilisateur dynamique
- 🎨 **Tailwind CSS 4** - Design système moderne et responsive
- 📱 **Mobile-First** - Optimisé pour tous les appareils
- ♿ **Accessibilité** - Respect des standards WCAG
- 🎯 **SEO Optimisé** - Balises meta et HTML sémantique
- 🎭 **Animations fluides** - Interactions modernes et engageantes
- ⚡ **Performance maximale** - Scores Lighthouse excellents
- 🌍 **Multilingue** - Support FR/EN/DE

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou pnpm

### Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd assembly-solutions

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

### Scripts disponibles

| Commande              | Description                                          |
| :-------------------- | :--------------------------------------------------- |
| `npm install`         | Installe toutes les dépendances                      |
| `npm run dev`         | Lance le serveur de développement                    |
| `npm run build`       | Compile le site pour la production                   |
| `npm run preview`     | Prévisualise le build de production                  |
| `npm run astro check` | Vérifie les erreurs TypeScript et Astro             |

---

## 📁 Structure du projet

```
assembly-solutions/
├── public/                  # Fichiers statiques (favicon, images, etc.)
├── src/
│   ├── assets/             # Images et ressources média
│   ├── components/         # Composants réutilisables
│   │   ├── home/          # Composants spécifiques à la page d'accueil
│   │   ├── react/         # Composants React interactifs
│   │   └── ui/            # Composants UI de base
│   ├── config/            # Configuration du site (SEO, navigation, etc.)
│   ├── layouts/           # Templates de mise en page
│   ├── pages/             # Pages du site (routage automatique)
│   ├── styles/            # Styles globaux et variables CSS
│   └── utils/             # Fonctions utilitaires et constantes
├── astro.config.mjs       # Configuration Astro
├── tailwind.config.js     # Configuration Tailwind (si applicable)
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances et scripts
```

---

## 🎨 Architecture des pages

### Pages principales

| Page              | Route            | Description                                    |
| :---------------- | :--------------- | :--------------------------------------------- |
| Accueil           | `/`              | Page d'accueil avec hero, atouts et CTA       |
| Solutions         | `/solutions`     | Présentation des solutions offertes            |
| Services          | `/services`      | Détails des services de fabrication            |
| À propos          | `/about`         | Histoire et valeurs de l'entreprise            |
| Contact           | `/contact`       | Formulaire de contact et informations          |

### Composants clés

- **Header** - Navigation principale responsive avec menu mobile
- **Footer** - Informations de contact et liens légaux
- **Hero** - Section d'en-tête avec CTA
- **Features** - Présentation des atouts (Proximité, Flexibilité, Réactivité)
- **Services** - Mise en avant des services
- **Testimonials** - Témoignages clients
- **CTA** - Appels à l'action stratégiques

---

## ⚙️ Configuration

### Configuration du site

Modifier le fichier `src/config/site.ts` :

```typescript
export const SITE = {
  title: 'Votre nom',
  description: '',
  url: '',
  author: '',
} as const;

export const CONTACT = {
  email: '',
  phone: '',
  address: '',
} as const;
```

### Personnalisation du design

- **Couleurs** : Modifier `src/styles/global.css`
- **Police** : Mettre à jour les imports dans le layout de base
- **Breakpoints** : Utiliser les classes Tailwind standard

---

## 🌍 Internationalisation

Le site cible principalement un public suisse romand mais peut être étendu pour supporter :

- 🇫🇷 Français (langue principale)
- 🇬🇧 Anglais
- 🇩🇪 Allemand

Structure recommandée pour l'i18n :
```
src/
├── i18n/
│   ├── fr.json
│   ├── en.json
│   └── de.json

```

---

## 📝 Contenu à préparer

### Textes et copies

- [ ] Présentation détaillée de l'entreprise
- [ ] Descriptions des services (fabrication, assemblage, tests)
- [ ] Liste des industries servies
- [ ] Témoignages clients
- [ ] Certifications et labels qualité
- [ ] Historique et chiffres clés

### Média

- [ ] Logo AS Assembly Solutions (SVG haute qualité)
- [ ] Photos de l'atelier et des installations
- [ ] Photos des équipes
- [ ] Photos de réalisations/produits
- [ ] Schémas et infographies techniques
- [ ] Vidéo de présentation (optionnel)

### Informations légales

- [ ] Mentions légales
- [ ] Politique de confidentialité
- [ ] Conditions d'utilisation
- [ ] Politique de cookies (si applicable)

---



## 📚 Documentation technique

### Technologies utilisées

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Standards de code

- ESLint pour le linting JavaScript/TypeScript
- Prettier pour le formatage automatique
- Convention de nommage : camelCase pour les variables, PascalCase pour les composants



## 📄 Licence

Ce projet est propriété de **AS Assembly Solutions SA**. Tous droits réservés.



## 📧 Contact projet

Pour toute question concernant le développement de ce site :

- **Email** : info@montavon.dev


---
**Développé pour AS Assembly Solutions SA**

*Dernière mise à jour : Décembre 2025*

