Lancement du projet avec docker compose:
Nous avons 2 docker compose:

- CLONER LE PROJET:
===================
git clone --recursive git@github.com:ccelenaa/pcs.git


I- docker-compose.dev.yaml: 
===========================
c'est pour lancer le projet depuis le code source cloné
Execussion:
npm install --prefix api-pcs
npm install --prefix api-stripe
npm install --prefix front-pcs
docker compose -f docker-compose.dev.yaml up -d


II- docker-compose.prod.yaml: 
=============================
c'est pour lancer le projet en LOCAL avec des images final de production
Execussion:
docker compose -f docker-compose.prod.yaml up -d
