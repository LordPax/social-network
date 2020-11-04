# Social network
## Description
plus tard 

## Installation
### Prérequis
* Connaissance du javascript et de expressjs
* Nodejs et npm installer et à jour
* mysql installer

### Intallation
```bash
git clone https://github.com/LordPax/social-network.git; cd social-network
npm install
```

### Créer data.json
Ce fichier servira pour toutes les informations lier à la base de donnée par exemple
```json
{
    "port" : 8080,
    "mysql_host" : "host vers mysql",
    "mysql_user" : "nom d'utilisateur pour mysql",
    "mysql_pw" : "mot de passe pour mysql",
    "mysql_db" : "social_network",
    "sess_secret" : "quelque chose de secret",
    "sess_name" : "session",
    "sess_max_age" : 3600000
}
```

### Creer la base de donnée
Creer la base de donnee social-network grâce au fichier sql ce trouvant a `bdd/social-network.sql` 

### Lancer
```bash
npm start
```
