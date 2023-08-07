# Verwende das offizielle Node.js-Image als Basis
FROM node:14

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /app

# Kopiere die Abhängigkeiten
COPY package.json package-lock.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projektinhalts
COPY . .

# Definiere den Befehl, der beim Start des Containers ausgeführt wird
CMD ["npm", "start"]
