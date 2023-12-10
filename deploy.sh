#!/bin/bash
# Mettre à jour le code source
git pull
# Construire l'image Docker
docker build --no-cache -t image-testprojet .
# Arreter le conteneur existant
docker stop conteneur-testprojet
# Supprimer le conteneur existant
docker rm conteneur-testprojet
# Lancer un nouveau conteneur
docker run -d --name=conteneur-testprojet -p 4200:80 image-testprojet
