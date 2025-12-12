#!/bin/bash

# ==============================
# Script automatisé de sauvegarde Git
# ==============================

# 1. Vérifie si Git est initialisé
if [ ! -d .git ]; then
  echo "Dépôt Git non initialisé. Initialisation..."
  git init
fi

# 2. Ajoute tous les fichiers modifiés
echo "Ajout des fichiers..."
git add .

# 3. Demande un message de commit
commitMessage=$1
if [ -z "$commitMessage" ]; then
  echo "Entrez un message de commit :"
  read commitMessage
fi

# 4. Crée le commit
git commit -m "$commitMessage"

# 5. Vérifie si un dépôt distant est configuré
remoteUrl=$(git remote get-url origin 2>/dev/null)
if [ -z "$remoteUrl" ]; then
  echo "Aucun dépôt distant configuré."
  echo "Entrez l'URL du dépôt GitHub (https://github.com/PhoenixC0de/Open-ClassRooms-Projet-8-Print-it-Javascript-) :"
  read repoUrl
  git remote add origin "$repoUrl"
fi

# 6. Synchronise avec le dépôt distant
echo "🔄 Synchronisation avec le dépôt distant..."
git pull origin main --rebase

# 7. Pousse les modifications
echo "Envoi vers GitHub..."
git push -u origin main

echo "Sauvegarde terminée avec succès."
