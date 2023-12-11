# Étape de build
FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build

# Étape de serve
FROM nginx:stable
COPY --from=build /app/dist/testprojet /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


