# Winveer
## Description
plus tard 

<!-- ## Images
### Acceuil
![accueil](https://raw.githubusercontent.com/LordPax/winveer/master/exemple/accueil.png)

### Nouveau thread
![newthread](https://raw.githubusercontent.com/LordPax/winveer/master/exemple/newthread.png)

### Les threads
![lorem](https://raw.githubusercontent.com/LordPax/winveer/master/exemple/thread_lorem.png)
![readme](https://raw.githubusercontent.com/LordPax/winveer/master/exemple/thread_readme.png)

### Les réponses
![reponse](https://raw.githubusercontent.com/LordPax/winveer/master/exemple/reponse.png) -->

## Installation
### Prérequis
* Connaissance du javascript et de expressjs
* Nodejs et npm installer et à jour
* mysql installer

### Intallation
```bash
git clone https://github.com/LordPax/winveer.git; cd winveer
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
    "mysql_db" : "winveer",
    "sess_secret" : "quelque chose de secret",
    "sess_name" : "session",
    "sess_max_age" : 3600000
}
```

### Creer la base de donnée
Creer la base de donnee Winveer grâce au fichier sql ce trouvant a `bdd/winveer.sql` 

### Lancer
```bash
npm start
```