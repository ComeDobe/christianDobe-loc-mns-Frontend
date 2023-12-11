# Étape de build
FROM node:18.17.1 AS build
WORKDIR /app
# Copiez d'abord les fichiers de dépendances pour tirer parti de la mise en cache des couches Docker
COPY package*.json ./
RUN npm install --legacy-peer-deps
# Copiez le reste des fichiers sources du projet Angular
COPY . .
ENV NODE_OPTIONS="--max_old_space_size=4096"
# Construisez l'application pour la production
RUN npm run build
# Étape de serve avec Nginx
FROM nginx:stable
# Assurez-vous que le chemin /app/dist/testprojet correspond au répertoire de distribution défini dans angular.json
COPY --from=build /app/dist/testprojet /usr/share/nginx/html
# Copiez la configuration personnalisée de Nginx si nécessaire
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
