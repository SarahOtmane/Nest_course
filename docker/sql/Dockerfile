# Utiliser l'image MySQL officielle comme base
FROM mysql:8.0

# Copier les fichiers de configuration personnalisés si nécessaire
# COPY my.cnf /etc/mysql/conf.d/my.cnf

# Exposer le port MySQL
EXPOSE 3306

# Commande pour démarrer MySQL
CMD ["mysqld"]

# Ce Dockerfile utilise l'image officielle MySQL comme base. Il définit les variables d'environnement pour le mot de passe root, la base de données, l'utilisateur et le mot de passe. Il expose le port MySQL 3306 et démarre le serveur MySQL avec la commande mysqld.