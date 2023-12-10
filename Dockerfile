FROM node:18.10-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
# Définir la limite de mémoire avant la construction
ENV NODE_OPTIONS="--max-old-space-size=8192"
COPY . .
RUN npm run build && ls -la /app && ls -la /app/dist

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/testprojet /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
