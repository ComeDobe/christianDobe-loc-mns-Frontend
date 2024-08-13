# Étape de build
FROM node:18.17.1 AS build
WORKDIR /app
# Copiez d'abord les fichiers de dépendances pour tirer parti de la mise en cache des couches Docker
COPY package*.json ./
# Installation des dépendances
# Utilisez --no-audit et --no-fund pour éviter des logs inutiles et accélérer le processus d'installation
RUN npm install --legacy-peer-deps --no-audit --no-fund
# Copiez le reste des fichiers sources du projet Angular
COPY . .
# Augmentation de l'espace mémoire alloué pour éviter les erreurs de mémoire dans les projets volumineux
ENV NODE_OPTIONS="--max_old_space_size=4096"
# Construisez l'application pour la production
RUN npm run build
# Étape de serve avec Nginx
FROM nginx:stable
# Copie des fichiers de build dans le dossier de serveur Nginx
# Assurez-vous que le chemin /app/dist/nom-de-votre-app correspond au répertoire de distribution défini dans angular.json
COPY --from=build /app/dist/nom-de-votre-app /usr/share/nginx/html
# Copiez la configuration personnalisée de Nginx si nécessaire
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
