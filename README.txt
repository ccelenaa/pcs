Lancement du projet avec docker compose:
Nous avons 2 docker compose:

- CLONER LE PROJET:
===================
git clone --recursive git@github.com:ccelenaa/pcs.git


I- docker-compose.dev.yaml: 
===========================
c'est pour lancer le projet depuis le code source cloné
Execution:
npm install --prefix api-pcs
npm install --prefix api-stripe
npm install --prefix front-pcs
docker compose -f docker-compose.dev.yaml up -d


II- docker-compose.prod.yaml: 
=============================
c'est pour lancer le projet en LOCAL avec des images final de production
Execution:
docker compose -f docker-compose.prod.yaml up -d




HTTPS:
Ajouter le certificat root auto-signé dans le dossier docker/nginx/ssl/ au navigateur pour reconnaitre les certificats signés par celui-ci


DNS:
1-ajouter des enregistrement dns pour "pcs.fr" et "*.pcs.fr" dans votre dns pour pointer sur localhost
2- ou ajouter ces lignes a /etc/hosts:

127.0.0.1   pcs.fr
127.0.0.1   db.pcs.fr
127.0.0.1   api.pcs.fr
127.0.0.1   admin.pcs.fr
127.0.0.1   bailleur.pcs.fr
127.0.0.1   prestataire.pcs.fr
127.0.0.1   voyageur.pcs.fr


- Lancer le projet
docker compose up -d

- Arreter le projet
docker compose down

- lister les container
docker ps

- lister les images
docker images ()


- Connection aux container pour tester les ping:
docker exec -it front-pcs sh
docker exec -it api-stripe sh

il faut dabord instaler les outils: ping, ip

apt update && apt install iproute2 iputils-ping -y
apk update && apk add iproute2 iputils-ping

