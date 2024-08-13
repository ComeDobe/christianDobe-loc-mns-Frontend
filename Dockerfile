# Étape de build
FROM node:18.17.1 AS build
WORKDIR /app

# Copier les fichiers de dépendances pour la mise en cache
COPY package*.json ./

# Installation des dépendances sans logs superflus
RUN npm install --legacy-peer-deps --no-audit --no-fund

# Copier les fichiers sources du projet Angular
COPY . .

# Augmenter l'espace mémoire pour le build
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Construire l'application Angular pour la production
RUN npm run build

# Étape de serve avec Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Supprimer les fichiers par défaut de Nginx et copier les fichiers de build Angular
RUN rm -rf ./*
COPY --from=build /app/dist/testprojet .

# Copier la configuration personnalisée de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour le trafic HTTP
EXPOSE 80

# Commande pour démarrer Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]
