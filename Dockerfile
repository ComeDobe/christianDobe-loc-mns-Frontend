# Étape 1, basée sur Node.js pour construire et compiler l'application Angular
FROM node:18.10-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .

# Augmenter la limite de mémoire pour la commande de construction
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build

# Étape 2, basée sur Nginx pour avoir uniquement le contenu compilé pour servir avec Nginx
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/testprojet /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
