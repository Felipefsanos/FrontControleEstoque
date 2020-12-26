FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli@~9.0.4
RUN npm install
COPY . .
EXPOSE 4200
ENTRYPOINT npm start 
