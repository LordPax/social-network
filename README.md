# Winveer
## Description
plus tard

## Images
plus tard

## Installation
### Prérequis
* Connaissance du javascript et de expressjs
* Nodejs et npm installer et à jour
* mysql installer

### Créer data.json
Ce fichier servira pour toutes les informations lier à la base de donnée par exemple
```json
{
    "port" : 8080,
    "mysql_host" : "host vers mysql",
    "mysql_user" : "nom d'utilisateur pour mysql",
    "mysql_pw" : "mot de passe pour mysql",
    "mysql_db" : "winveer",
    "secret" : "quelque chose de secret"
}
```

### Creer la base de donnée
Creer la base de donnee Winveer grâce au fichier sql ce trouvant a `bdd/winveer.sql` 

### Intallation et démarage
```bash
git clone https://github.com/LordPax/winveer.git; cd winveer
npm install
npm start
```