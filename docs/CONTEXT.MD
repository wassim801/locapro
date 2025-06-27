# Contexte du projet – Chillevry

Dans un environnement urbain en constante évolution, les habitudes de consommation changent rapidement, notamment avec la montée en puissance des applications mobiles et des services de livraison à la demande. Aujourd'hui, les utilisateurs souhaitent pouvoir commander des produits essentiels à tout moment, y compris en dehors des heures classiques d'ouverture. Pourtant, peu de services répondent aux besoins spécifiques des consommateurs actifs la nuit.

Le projet Chillevry est né de ce constat. Il s'agit d'une application mobile de livraison nocturne, conçue pour fournir des produits d'urgence ou de confort (snacks, boissons, médicaments, accessoires électroniques, etc.) durant la tranche horaire de 22h à 6h du matin. Cette plage horaire représente un véritable défi logistique et technique, notamment en termes de disponibilité des livreurs, d'expérience utilisateur et de discrétion des notifications.

## Architecture du Projet

Le projet propose une solution complète, composée de plusieurs composants :

### 1. Application Mobile (Flutter)
- Interface utilisateur en mode sombre adaptée à l'utilisation nocturne
- Géolocalisation en temps réel
- Système de notifications silencieuses
- Gestion du panier et des commandes
- Paiement sécurisé via Stripe/PayPal
- Suivi en temps réel des livraisons

### 2. Backend API (Node.js/Express)
- Architecture REST sécurisée
- Authentification via Firebase
- Base de données MySQL avec Sequelize ORM
- Gestion des sessions et des tokens
- API temps réel avec Socket.IO
- Système de notifications push
- Logging et monitoring

### 3. Dashboard Administrateur (React.js)
- Gestion des utilisateurs et des rôles
- Suivi des commandes en temps réel
- Gestion des restaurants et des produits
- Analyses et rapports
- Interface de support client

## Spécifications Techniques

### Sécurité
- Authentification JWT
- Chiffrement des données sensibles
- Validation des entrées
- Protection contre les attaques CSRF/XSS
- Rate limiting

### Performance
- Optimisation des requêtes base de données
- Mise en cache avec Redis
- Compression des réponses
- Lazy loading des images
- Pagination des résultats

### Base de Données
- Tables principales :
  * users (clients, livreurs, admins)
  * restaurants
  * products
  * orders
  * deliveries
  * ratings

### API Endpoints
- /api/auth : Authentification
- /api/users : Gestion des utilisateurs
- /api/restaurants : Gestion des restaurants
- /api/products : Gestion des produits
- /api/orders : Gestion des commandes
- /api/deliveries : Gestion des livraisons

## Fonctionnalités Clés

### Pour les Clients
- Recherche de produits par catégorie
- Commande et paiement sécurisé
- Suivi de livraison en temps réel
- Historique des commandes
- Système de notation

### Pour les Livreurs
- Gestion des disponibilités
- Navigation et optimisation des trajets
- Système de notification des nouvelles commandes
- Rapport de livraison

### Pour les Administrateurs
- Tableau de bord analytique
- Gestion des utilisateurs et des permissions
- Monitoring des commandes et livraisons
- Gestion des contentieux

## Tests et Qualité
- Tests unitaires avec Jest
- Tests d'intégration
- Tests end-to-end avec Cypress
- Analyse de code avec ESLint
- CI/CD avec GitHub Actions

## Déploiement
- Conteneurisation avec Docker
- Déploiement sur AWS
- Configuration nginx
- Monitoring avec PM2
- Backups automatisés

L'architecture de Chillevry est conçue pour être modulaire, évolutive et adaptée à un usage nocturne. Le projet met en œuvre les meilleures pratiques de développement pour assurer la qualité, la maintenabilité et la performance du système.