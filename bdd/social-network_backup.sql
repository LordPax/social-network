-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: winveer
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.19.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ban`
--

DROP TABLE IF EXISTS `ban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ban` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ban`
--

LOCK TABLES `ban` WRITE;
/*!40000 ALTER TABLE `ban` DISABLE KEYS */;
/*!40000 ALTER TABLE `ban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `epingle`
--

DROP TABLE IF EXISTS `epingle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `epingle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_thread` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `epingle`
--

LOCK TABLES `epingle` WRITE;
/*!40000 ALTER TABLE `epingle` DISABLE KEYS */;
INSERT INTO `epingle` VALUES (2,'dasInWyHrX'),(4,'ViMZzJITGJ'),(15,'dWlRNODofd'),(17,'KEmyagifTC'),(19,'jnXgicMQdT');
/*!40000 ALTER TABLE `epingle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reponse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_post` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponse`
--

LOCK TABLES `reponse` WRITE;
/*!40000 ALTER TABLE `reponse` DISABLE KEYS */;
INSERT INTO `reponse` VALUES (1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','ODUMWrJlrH',0,'2020-01-15 22:21:38'),(2,'lol er zez ef sdf f dferg sd z ','ODUMWrJlrH',0,'2020-01-15 22:21:56'),(3,'je suis en train de répondre a un thread avec mon compte administrateur, c\'est plutôt marrant putain de merde. J\'aime bien écrire de la merde.','ODUMWrJlrH',1,'2020-01-16 00:30:30'),(4,'voilà un petit test de l\'affichage de markdown','ViMZzJITGJ',1,'2020-01-16 02:05:53'),(5,'cool un test pour tester les réponses','ViMZzJITGJ',0,'2020-01-16 15:29:51'),(6,'cool','txjxuVoCSu',1,'2020-01-17 21:22:04'),(7,'cool un test','ViMZzJITGJ',0,'2020-01-21 17:19:17'),(8,'zerze','ViMZzJITGJ',0,'2020-01-21 18:59:49'),(9,'zerzer','ViMZzJITGJ',0,'2020-01-21 19:00:33'),(10,'salut c\'est un nouveau commentaire','ViMZzJITGJ',0,'2020-01-21 19:01:58'),(11,'salut je suis connecter','ViMZzJITGJ',1,'2020-01-21 19:02:52'),(12,'salut j\'écris un commentaire ','ViMZzJITGJ',1,'2020-01-21 19:12:31'),(13,'zerzerze','ViMZzJITGJ',1,'2020-01-21 19:14:03'),(14,'sdfsdfsdfsdf','ViMZzJITGJ',0,'2020-01-21 19:14:25'),(15,'cool','ViMZzJITGJ',0,'2020-01-21 19:21:42'),(16,'salut tout le monde','ViMZzJITGJ',0,'2020-01-21 19:22:06'),(17,'j\'aime bien ce readme sdf  j\'aime bien ce readme jhgqsd j\'aime bien ce readme j\'aime bien ce readme j\'aime bien ce readme j\'aime bien ce readme j\'aime bien ce readme ','dasInWyHrX',0,'2020-01-21 19:28:01'),(18,'cool ta vie','dasInWyHrX',0,'2020-01-21 19:28:22'),(19,'en effet je suis d\'accord avec toi','dasInWyHrX',0,'2020-01-21 19:29:34'),(20,'sdfsdf','dasInWyHrX',0,'2020-01-21 19:29:48'),(21,'azeaze','ViMZzJITGJ',0,'2020-01-21 19:31:07'),(22,'sdfsdfsd d','ViMZzJITGJ',0,'2020-01-21 19:32:08'),(23,'sdfsdf','ViMZzJITGJ',0,'2020-01-21 19:32:25'),(24,'zerzerzsfse','ViMZzJITGJ',0,'2020-01-21 19:33:05'),(25,'sdfsdrgsdfQQ','ViMZzJITGJ',1,'2020-01-21 19:33:24'),(26,'sdfsd','ViMZzJITGJ',0,'2020-01-21 19:37:00'),(27,'sdfsdf','ViMZzJITGJ',0,'2020-01-21 19:37:06'),(28,'zerzerzerzer','ViMZzJITGJ',0,'2020-01-21 19:44:35'),(29,'sdfsdfsd','ViMZzJITGJ',0,'2020-01-21 19:47:47'),(30,'zerzerzerz','ViMZzJITGJ',0,'2020-01-21 19:49:12'),(31,'zsefzefzefze','ViMZzJITGJ',1,'2020-01-21 19:49:24'),(32,'salut tout le monde','dasInWyHrX',1,'2020-01-21 22:26:40'),(33,'cool','ilwzFWspox',1,'2020-01-21 22:52:48'),(34,'ça donne à réfléchir ','ODUMWrJlrH',1,'2020-01-21 22:53:26'),(35,'zer','ViMZzJITGJ',0,'2020-01-21 22:57:25'),(36,'sdfsdq','ViMZzJITGJ',1,'2020-01-21 22:57:52'),(37,'cool ta vie','ViMZzJITGJ',0,'2020-01-21 23:01:05'),(38,'wesh sa veu tro rien dire c tro b1 wesh','ViMZzJITGJ',2,'2020-01-21 23:03:06'),(39,'lol','dasInWyHrX',2,'2020-01-21 23:08:09'),(40,'j\'aime écrire de la merde en réponse au thread','dWlRNODofd',1,'2020-01-22 02:22:27'),(41,'mdrr c\'est un peu useless','IJCsMCKSXb',0,'2020-01-22 13:02:10'),(42,'mdrr tu l\'a dit','IJCsMCKSXb',1,'2020-01-22 13:03:13'),(43,'petite réponse','ODUMWrJlrH',1,'2020-01-22 15:07:22'),(44,'je suis en train d\'écrire une réponse à ce thread puisque j\'aime écrire de la merde en réponse au thread, c\'est effectivement plutôt cool','dWlRNODofd',1,'2020-01-22 15:10:04'),(45,'plutôt cool','PbSqCgHscr',0,'2020-01-22 16:00:35'),(46,'ouaip c\'est vrais c\'est cool','PbSqCgHscr',1,'2020-01-22 16:01:23'),(47,'lol c\'est vrai que c\'est n\'importquoi mdrr','jiIzFZGbRI',1,'2020-01-22 17:33:05'),(48,'un peu useless comme thread','stiuvJZOKh',1,'2020-01-22 19:11:52'),(49,'voila un petit article qui explique clairement comment parametrer un serveur web avec nginx','KEmyagifTC',1,'2020-01-22 23:23:57'),(50,'c\'est vrai c\'est plutôt cool, j\'aime bien','KEmyagifTC',0,'2020-01-22 23:25:21'),(51,'ya beaucoup de réponse sur ce thread','ViMZzJITGJ',0,'2020-01-22 23:28:30'),(52,'il est quand meme un long ce thread','KEmyagifTC',1,'2020-01-23 20:44:36'),(53,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea','ViMZzJITGJ',1,'2020-01-23 23:25:34'),(54,'cool','dasInWyHrX',2,'2020-01-24 11:50:19'),(55,'juge pas stp tu est très mal placer pour parler de ça, sale merde','jiIzFZGbRI',2,'2020-01-24 11:52:27'),(56,'g pa tou lu mai sa a lair coool ptdr je sui un conar ki sai pa ecrir','KEmyagifTC',2,'2020-01-24 11:54:05'),(57,'wesh','KEmyagifTC',2,'2020-01-24 11:54:20'),(58,'lol mais quel connard il sait pas écrire','KEmyagifTC',1,'2020-01-24 11:55:54'),(59,'aze','stiuvJZOKh',0,'2020-01-24 16:16:18'),(60,'qsdqsdqsd','KEmyagifTC',0,'2020-01-25 15:53:29'),(61,'c\'est con d\'etre supprimer comme ça','stiuvJZOKh',0,'2020-01-25 15:54:39'),(62,'qsdflkjmqsdklmjqsdff sdfq','dWlRNODofd',1,'2020-01-25 17:21:10'),(63,'wesh ptdr ton thread a été suprimé lol','VzLbYzLJqb',2,'2020-01-25 17:32:46'),(64,'voilà un tout petit thread sur la class panel','VyWCljcOhp',1,'2020-01-29 21:26:13'),(65,'ok cool pour toi','VyWCljcOhp',0,'2020-01-29 23:04:11'),(66,'je me fait chier','VyWCljcOhp',1,'2020-01-29 23:17:52'),(67,'merde','FtgfZjrNRn',1,'2020-01-29 23:18:32'),(68,'cool','FtgfZjrNRn',2,'2020-02-01 02:10:48'),(69,'plutot pas mal','KEmyagifTC',2,'2020-02-01 02:11:13'),(70,'je me fait un peut chier','ViMZzJITGJ',1,'2020-02-01 02:14:47'),(71,'cool je suis annonyme','dWlRNODofd',0,'2020-02-01 02:16:48'),(72,'je l\'ai supprimer parceque c\'était inutile','ilwzFWspox',1,'2020-02-01 19:20:30'),(73,'voila un thread su le javascript','uyrmnZUrVk',1,'2020-02-07 02:00:04'),(74,'c\'est propablement le dernier thread de test sur ce site dans cette base de donnée, peu être que je le convertirai en blog pendant les vacances, je sais pas','jnXgicMQdT',1,'2020-02-07 02:11:11'),(75,'dommage c\'est triste, il avais l\'air bien ce site','jnXgicMQdT',0,'2020-02-07 02:12:00');
/*!40000 ALTER TABLE `reponse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reason` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `thread_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (1,'c\'est de la merde ce thread',0,'VyWCljcOhp'),(2,'nul archi nul',0,'FtgfZjrNRn');
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thread`
--

DROP TABLE IF EXISTS `thread`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `str_id` varchar(255) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user` int(11) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thread`
--

LOCK TABLES `thread` WRITE;
/*!40000 ALTER TABLE `thread` DISABLE KEYS */;
INSERT INTO `thread` VALUES (1,'FCWXXyFmNv','aze','aze',0,'2020-01-11 20:31:12'),(2,'ilwzFWspox','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',1,'2020-01-15 13:18:23'),(3,'bhtRVrTDFD','aze','**aze**',0,'2020-01-15 16:21:46'),(4,'dasInWyHrX','Le readme du reposotory','# Winveer\r\n## Description\r\nplus tard \r\n## Installation\r\n### Prérequis\r\n* Connaissance du javascript et de expressjs\r\n* Nodejs et npm installer et à jour\r\n* mysql installer\r\n\r\n### Intallation\r\n```bash\r\ngit clone https://github.com/LordPax/winveer.git; cd winveer\r\nnpm install\r\n```\r\n\r\n### Créer data.json\r\nCe fichier servira pour toutes les informations lier à la base de donnée par exemple\r\n```json\r\n{\r\n    \"port\" : 8080,\r\n    \"mysql_host\" : \"host vers mysql\",\r\n    \"mysql_user\" : \"nom d\'utilisateur pour mysql\",\r\n    \"mysql_pw\" : \"mot de passe pour mysql\",\r\n    \"mysql_db\" : \"winveer\",\r\n    \"sess_secret\" : \"quelque chose de secret\",\r\n    \"sess_name\" : \"session\",\r\n    \"sess_max_age\" : 3600000\r\n}\r\n```\r\n\r\n### Creer la base de donnée\r\nCreer la base de donnee Winveer grâce au fichier sql ce trouvant a `bdd/winveer.sql` \r\n\r\n### Lancer\r\n```bash\r\nnpm start\r\n```',1,'2020-01-15 16:24:59'),(5,'dWlRNODofd','test','je suis un test\r\n\r\nun putin de test de merde\r\n\r\nmerde',1,'2020-01-15 17:42:02'),(8,'ODUMWrJlrH','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',1,'2020-01-15 17:46:11'),(9,'XAXgGCbPmy','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',1,'2020-01-16 02:03:40'),(10,'ViMZzJITGJ','autre test','# 1er paragraphe\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\n# 2e paragraphe\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',1,'2020-01-16 02:05:08'),(11,'IJCsMCKSXb','Supprimer par un modérateur','# Raison de la suppression\n foiré',0,'2020-01-22 13:01:47'),(12,'PbSqCgHscr','Supprimer par un modérateur','# Raison de la suppression\n ',0,'2020-01-22 16:00:18'),(13,'jiIzFZGbRI','[Supprimer par un modérateur]','# Raison de la suppression\n c\'est de la merde comme thread',2,'2020-01-22 17:31:15'),(14,'stiuvJZOKh','Supprimer par un modérateur','# Raison de la suppression\n c\'est de la merde',0,'2020-01-22 19:09:15'),(15,'KEmyagifTC','Node nginx ssl','# Node.js Deployment\r\n\r\n&gt; Steps to deploy a Node.js app to DigitalOcean using PM2, NGINX as a reverse proxy and an SSL from LetsEncrypt\r\n\r\n## 1. Sign up for Digital Ocean\r\nIf you use the referal link below, you get $10 free (1 or 2 months)\r\nhttps://m.do.co/c/5424d440c63a\r\n\r\n## 2. Create a droplet and log in via ssh\r\n I will be using the root user, but would suggest creating a new user\r\n\r\n## 3. Install Node/NPM\r\n```\r\ncurl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -\r\n\r\nsudo apt install nodejs\r\n\r\nnode --version\r\n```\r\n\r\n## 4. Clone your project from Github\r\nThere are a few ways to get your files on to the server, I would suggest using Git\r\n```\r\ngit clone yourproject.git\r\n```\r\n\r\n### 5. Install dependencies and test app\r\n```\r\ncd yourproject\r\nnpm install\r\nnpm start (or whatever your start command)\r\n# stop app\r\nctrl+C\r\n```\r\n## 6. Setup PM2 process manager to keep your app running\r\n```\r\nsudo npm i pm2 -g\r\npm2 start app (or whatever your file name)\r\n\r\n# Other pm2 commands\r\npm2 show app\r\npm2 status\r\npm2 restart app\r\npm2 stop app\r\npm2 logs (Show log stream)\r\npm2 flush (Clear logs)\r\n\r\n# To make sure app starts when reboot\r\npm2 startup ubuntu\r\n```\r\n### You should now be able to access your app using your IP and port. Now we want to setup a firewall blocking that port and setup NGINX as a reverse proxy so we can access it directly using port 80 (http)\r\n\r\n## 7. Setup ufw firewall\r\n```\r\nsudo ufw enable\r\nsudo ufw status\r\nsudo ufw allow ssh (Port 22)\r\nsudo ufw allow http (Port 80)\r\nsudo ufw allow https (Port 443)\r\n```\r\n\r\n## 8. Install NGINX and configure\r\n```\r\nsudo apt install nginx\r\n\r\nsudo nano /etc/nginx/sites-available/default\r\n```\r\nAdd the following to the location part of the server block\r\n```\r\n    server_name yourdomain.com www.yourdomain.com;\r\n\r\n    location / {\r\n        proxy_pass http://localhost:5000; #whatever port your app runs on\r\n        proxy_http_version 1.1;\r\n        proxy_set_header Upgrade $http_upgrade;\r\n        proxy_set_header Connection \'upgrade\';\r\n        proxy_set_header Host $host;\r\n        proxy_cache_bypass $http_upgrade;\r\n    }\r\n```\r\n```\r\n# Check NGINX config\r\nsudo nginx -t\r\n\r\n# Restart NGINX\r\nsudo service nginx restart\r\n```\r\n\r\n### You should now be able to visit your IP with no port (port 80) and see your app. Now let\'s add a domain\r\n\r\n## 9. Add domain in Digital Ocean\r\nIn Digital Ocean, go to networking and add a domain\r\n\r\nAdd an A record for @ and for www to your droplet\r\n\r\n\r\n## Register and/or setup domain from registrar\r\nI prefer Namecheap for domains. Please use this affiliate link if you are going to use them\r\nhttps://namecheap.pxf.io/c/1299552/386170/5618\r\n\r\nChoose \"Custom nameservers\" and add these 3\r\n\r\n* ns1.digitalocean.com\r\n* ns2.digitalocean.com\r\n* ns3.digitalocean.com\r\n\r\nIt may take a bit to propogate\r\n\r\n10. Add SSL with LetsEncrypt\r\n```\r\nsudo add-apt-repository ppa:certbot/certbot\r\nsudo apt-get update\r\nsudo apt-get install python-certbot-nginx\r\nsudo certbot --nginx -d yourdomain.com -d www.yourdomain.com\r\n\r\n# Only valid for 90 days, test the renewal process with\r\ncertbot renew --dry-run\r\n```\r\n\r\nNow visit https://yourdomain.com and you should see your Node app\r\n',1,'2020-01-22 23:22:19'),(16,'BqehrZUKRI','[Supprimer par un modérateur]','# Raison de la suppression\n de la merde',0,'2020-01-25 12:39:58'),(17,'USqwNtDllJ','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',2,'2020-01-25 12:40:23'),(18,'DYxcsyTYAr','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',1,'2020-01-25 13:56:04'),(19,'VzLbYzLJqb','[Supprimer par le propriétaire]','# Raison de la suppression\n aucune',1,'2020-01-25 14:12:13'),(20,'VyWCljcOhp','Design CSS','# la class panel\r\n```css\r\n.panel{\r\n    position : fixed;\r\n    top : 55px;\r\n    left : 0;\r\n    height : 100%;\r\n    background-color : #34495e;\r\n    border-right : 1px solid #212f3d;\r\n    width : 250px;\r\n}\r\n```',1,'2020-01-29 21:25:31'),(21,'FtgfZjrNRn','fait chier','je suis en train de me faire chier en ce moment putin de merde',1,'2020-01-29 23:18:21'),(22,'uyrmnZUrVk','Javascript','# Javascript\r\n# Sommaire\r\n* [Notion de base](#syntax)\r\n    * [Déclaration de variable](#declaration-de-variable)\r\n    * [Chaine de caractère](#chaine-de-caractere)\r\n    * [Structure conditionnel](#structure-conditionnel)\r\n    * [Structure boucle](#structure-boucle)\r\n    * [Structure de données](#structure-de-donnees)\r\n        * [Les tableaux](#tableaux)\r\n        * [Les objets](#objets)\r\n    * [Les fonctions](#fonctions)\r\n    * [Les class](#class)\r\n* [Aller plus loin](#plus)\r\n    * [Immutabiliter](#immutabliliter)\r\n    * [Fonction en programmation fonctionnel](#fonctionnel)\r\n        * [Fonction pure](#fonction-pure)\r\n        * [High order function](#high-order-function)\r\n        * [Fonction recursive](#recursive)\r\n    * [Asyncrône](#asyncrone)\r\n        * [Promesse](#promesse)\r\n        * [async / await](#async-await)\r\n* [NodeJS](#node)\r\n    * [Installation](#installation-node)\r\n    * [Différence avec les navigateurs](#diff-navigateur)\r\n        * [module.export](#module-export)\r\n        * [require](#require)\r\n    * [npm](#npm)\r\n        \r\n# Note\r\nDepuis ES6 il n\'est plus obligatoire de mettre de point virgule à la fin d\'une instruction\r\n\r\n# Notion de base &lt;a id = \"syntax\"&gt;&lt;/a&gt;\r\n## Déclaration de variable &lt;a id = \"declaration-de-variable\"&gt;&lt;/a&gt;\r\n* **let**\r\n\r\nPermet de créer une variale\r\n```javascript\r\nlet variable = valeurs\r\n```\r\n\r\n* **const**\r\n\r\nPermet de créer une constante (option préféré sauf si on souhaite modifier la valeur)\r\n```javascript\r\nconst constant = valeurs\r\n```\r\n\r\n* **var** (fortement dépréssier car obselette)\r\n\r\nPermet de créer une variale\r\n```javascript\r\nvar variable = valeurs\r\n```\r\n\r\n## Chaine de caractère &lt;a id = \"chaine-de-caractere\"&gt;&lt;/a&gt;\r\nLes chaines de caractère peuvent être defini avec des \"\'\", \'\"\' ou \"\\`\"\r\n```javascript\r\nconst val = \"chaines de caractere\"\r\n\r\n// ou\r\n\r\nconst val = \'chaines de caractere\'\r\n\r\n// ou\r\n\r\nconst val = `chaines de ${variable}`\r\n```\r\n\r\n## Structure conditionnel &lt;a id = \"structure-conditionnel\"&gt;&lt;/a&gt;\r\nSi on a qu\'une instruction on peut se permettre de ne pas mettre d\'accolade, c\'est aussi valable pour les boucles et toutes les structures comportant des accolades.\r\n* **if**\r\n```javascript\r\nif (condition) {\r\n    // instructions\r\n}\r\nelse if (autreCondition) {\r\n    // autre instructions\r\n}\r\nelse {\r\n    // instructions par défaut\r\n}\r\n```\r\n* **switch**\r\n```javascript\r\nswitch(val) {\r\n    case egaliter0 :\r\n        // instructions\r\n        break\r\n    case egaliter1 :\r\n        // instructions\r\n        break\r\n    case egalitern :\r\n        // instructions\r\n        break\r\n}\r\n```\r\n* **ternaire**\r\n```javascript\r\nconst val = condition ? valSiVrai : valSiFaux\r\n```\r\n\r\n## Structure boucle &lt;a id = \"structure-boucle\"&gt;&lt;/a&gt;\r\n* **While**\r\n\r\nLe while tournera tant que la condition sera validé. Utile quand on ne connais pas la fin de l\'itération\r\n```javascript\r\nwhile (condition) {\r\n    // instructions\r\n}\r\n```\r\n\r\n* **For**\r\n\r\nLe for peut s\'utiliser de 2 façon\r\n1. **Avec une variable d\'itération**\r\n```javascript\r\nfor (variable; conditionArret; iteration) {\r\n    // instructions\r\n}\r\n```\r\nexemple\r\n```javascript\r\nfor (let i = 0; i &lt; 10; i++) {\r\n    // instructions\r\n}\r\n```\r\nDans cette exemple la boucle va tourner 10 fois\r\n\r\nOn a utiliser let au lieu de const car la variable i vas être modifier à chaque itération\r\n\r\ni++ veut simplement dire que l\'on souhaite incrémenter de 1 la valeur de i, on aurai aussi pue utiliser i+=1 ou i = i + 1\r\n\r\n2. **En itérant les valeurs d\'un tableau**\r\n```javascript\r\nconst tab = [1, 2, 3, 4]\r\nfor (let val in tab) {\r\n    // instructions\r\n}\r\n```\r\nDans cette exemple la boucle va tourner 4 fois\r\nLa valeur de val valoire 1 puis 2 puis 3 puis 4\r\n\r\n**Remarque** : *Pour traiter les valeurs d\'un tableau on verra qu\'on peut trouver mieux qu\'une boucle for notament grâce aux méthode des tableaux comme forEach, map, reduce ou filter qu\'on verra plus tard*\r\n\r\n## Structure de données &lt;a id = \"structure-de-donnees\"&gt;&lt;/a&gt;\r\nComme structure de données on peut compter les tableaux, les objet, les class\r\n\r\n### Les tableaux &lt;a id = \"tableaux\"&gt;&lt;/a&gt;\r\n* **Déclaration d\'un tableau**\r\n```javascript\r\nconst tab = [val0, val1, valn]\r\n```\r\n\r\n* **Récupération des données**\r\n\r\nRetourne la valeur de l\'emplacement indiqué\r\n```javascript\r\ntab[emplacement]\r\n```\r\nModifie la valeur à l\'emplacement indiqué\r\n```javascript\r\ntab[emplacement] = nouvelleValeur\r\n```\r\n\r\n* **Les méthodes associé aux tableaux**\r\n\r\nOn en avait parlé dans la remarque sur les boucles for\r\n1. **forEach**\r\n```javascript\r\nconst tab = [1, 2, 3, 4]\r\n\r\ntab.forEach(elem =&gt; instructions)\r\n\r\n// ou\r\n\r\ntab.forEach(function(elem){instructions})\r\n```\r\nVous ellez tout simplement itérer les valeurs du tableau tab.\r\n\r\nelem n\'est qu\'un paramtre de fonction annonyme et va prendre la valeur des elements du taleau\r\n\r\nOn vera les fonctions et leurs particulariter plus tard\r\n\r\n**Remarque** : *Dans les 2 cas les syntax sont valide, l\'un est une version compacte de l\'autre*\r\n\r\n2. **map**\r\n```javascript\r\nconst tab = unTableau\r\n\r\nconst tab2 = tab.map(elem =&gt; instructions)\r\n```\r\nmap fait la même chose que forEach à la différence que map retourne un tableau modifier suite aux instructions \r\n\r\n3. **filter**\r\n```javascript\r\nconst tab = unTableau\r\n\r\nconst tab2 = tab.filter(elem =&gt; condition)\r\n```\r\nexemple\r\n```javascript\r\nconst tab = [1, 2, 3, 4]\r\n\r\nconst tab2 = tab.filter(elem =&gt; elem % 2 === 0)\r\n\r\ntab2 // tab2 = [2, 4]\r\n```\r\nfilter va parcourir les elements du tableaux et retourne un tableau de tout les elements qui on validé la condition\r\n\r\n4. **reduce**\r\n```javascript\r\nconst tab = unTableau\r\n\r\nconst tab2 = tab.reduce((accumulateur, valeur) =&gt; instructions)\r\n```\r\nexemple\r\n```javascript\r\nconst tab = [1, 2, 3, 4]\r\n\r\nconst tab2 = tab.reduce((acc, val) =&gt; acc + val)\r\n\r\ntab2 // tab2 = 10\r\n```\r\nDans cet exemple reduce va parcourir les elements du tableau et retourner la somme de tout les elements du tableau.\r\n\r\nacc est l\'accumulateur, ça correspond à la valeur de la precedente itération et val est la valeur de l\'élément du tableau.\r\n\r\nLe résultat de cette somme sera la valeur de l\'accumulateur lors de la prochaine itération.\r\n\r\n### Les objets &lt;a id = \"objets\"&gt;&lt;/a&gt;\r\nLes objet en javascript peuvent être créé à partir d\'une instance d\'une class ou bien être créé à partir de rien.\r\n\r\nDans les 2 cas les \"variables\" d\'un objet s\'appel des attributs et dans le cas où vous enregistrer une fonction on appelera ça une methode\r\n\r\n* **Déclaration d\'un objet**\r\n```javascript\r\nconst obj = {\r\n    nom0 : val0,\r\n    nom1 : val1,\r\n    nomn : valn\r\n}\r\n```\r\n\r\n* **Récupérer les données**\r\n```javascript\r\nobj.nom // affiche la valeur de nom\r\n\r\nobj.nom = nouvelleValeur // modifie la valeur de nom\r\n```\r\n\r\n## Les fonctions &lt;a id = \"fonctions\"&gt;&lt;/a&gt;\r\nLes fonctions viennent du paradigme procédurale, le principe vas être de partitionner sont code afin d\'avoir des morceaux de code que l\'on pourra réutiliser.\r\n\r\nOn la vue dans la partie sur les tableaux, on peut déclarer les fonctions de 2 façons équivalentes\r\n```javascript\r\nfunction maFonction () { // sans paramètre\r\n    // instructions\r\n}\r\nfunction maFonction (param) { // 1 paramètre\r\n    // instructions\r\n}\r\nfunction maFonction (param1, param2) { // 2 ou plus paramètres\r\n    // instructions\r\n}\r\n\r\n// ou\r\n\r\nconst maFonction = () =&gt; { // sans paramètre\r\n    //instructions\r\n}\r\nconst maFonction = param =&gt; { // 1 paramètre\r\n    //instructions\r\n}\r\nconst maFonction = (param1, param2) =&gt; { // 2 ou plus paramètres\r\n    //instructions\r\n}\r\n```\r\nDans le 2e cas, lorsque l\'on à qu\'une instruction, on peut ne pas mettre d\'accolade\r\n\r\nLes paramètres d\'une fonction vont permètre d\'entrer des valeurs qui vont pouvoir être traiter\r\n\r\nLe 2e cas est appeler fonction lambda. Une fonction lambda est une fonction annonyme\r\n\r\nDans une fonction vous pouvez juste exécuter des instructions ou aussi retourner des valeurs qui pourront être récupérer avec le mot clé **return**\r\n\r\nLe return ne se met que lorsque l\'on a mis des accolades, à l\'invers, la valeur si y\'en a sera automatique retourner\r\n```javascript\r\nconst maFonction = () =&gt; {\r\n    return valeur\r\n}\r\n\r\n// ou\r\n\r\nconst maFonction = () =&gt; valeur\r\n```\r\n```javascript\r\nconst valeurRetour = maFonction()\r\n```\r\n\r\n## Les class &lt;a id = \"class\"&gt;&lt;/a&gt;\r\nOn en avais parler plus tôt, les class pour en faire des objets il vas falloir les instancier\r\n\r\n**Remarque** : *Il est important de savoir que javascript a un orienté objet differrent de C++, Java ou PHP par exemple*\r\n\r\n* **Déclaration class**\r\n```javascript\r\nclass maClasse {\r\n    constructor(param0, param1, paramn){\r\n\r\n    }\r\n}\r\n```\r\n\r\n# Aller plus loin &lt;a id = \"plus\"&gt;&lt;/a&gt;\r\n## Immutabiliter &lt;a id = \"immutabiliter\"&gt;&lt;/a&gt;\r\n\r\n## Fonction en programmation fonctionnel &lt;a id = \"fonctionnel\"&gt;&lt;/a&gt;\r\n### Fonction pure &lt;a id = \"fonction-pure\"&gt;&lt;/a&gt;\r\n\r\n### High order function &lt;a id = \"high-order-function\"&gt;&lt;/a&gt;\r\n\r\n### Fonction récursive &lt;a id = \"recursive\"&gt;&lt;/a&gt;\r\n\r\n## Asyncrône &lt;a id = \"asycrone\"&gt;&lt;/a&gt;\r\n### Promesse &lt;a id = \"promesse\"&gt;&lt;/a&gt;\r\n\r\n### async / await &lt;a id = \"async-await\"&gt;&lt;/a&gt;\r\n\r\n# NodeJS &lt;a id = \"node\"&gt;&lt;/a&gt;\r\n## Installation &lt;a id = \"installation-node\"&gt;&lt;/a&gt;\r\n\r\n## Différence avec les navigateurs &lt;a id = \"diff-navigateur\"&gt;&lt;/a&gt;\r\n### module.export &lt;a id = \"module-export\"&gt;&lt;/a&gt;\r\n\r\n### require &lt;a id = \"require\"&gt;&lt;/a&gt;\r\n\r\n## npm &lt;a id = \"npm\"&gt;&lt;/a&gt;',1,'2020-02-07 01:58:17'),(23,'jnXgicMQdT','fait chier encore','## petit thread sur le site\r\nPutin ça fait chier le projet a couler, a cause d\'une perte de motivation dans l\'équipe, c\'est pas cool. C\'est con parceque j\'avais tout codé, il manquais que quelque détail et le site était prèt mais bon fait chier.\r\n\r\nJe pense que je ne vais plus mettre à jour ce site mais ya moyen que je convertisse en blog pourquoi pas, ça prendra juste un peu de temps. Je ferai peu être ça pendant les vacances\r\n\r\nà jamais, LordPax',1,'2020-02-07 02:09:42');
/*!40000 ALTER TABLE `thread` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rank` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (0,'noname','none','none',0),(1,'LordPax','c4d4bb8b223063a5de2a7609d084205c5c94339dba9aa1e88f377e7b0f430c7b','capitaine_ted@hotmail.fr',1),(2,'aze','9adfb0a6d03beb7141d8ec2708d6d9fef9259d12cd230d50f70fb221ae6cabd5','aze@aze.aze',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-14 11:38:17
