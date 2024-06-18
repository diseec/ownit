FROM node:latest

WORKDIR /app

COPY package*.json ./

# RUN npm install -g @expo/ngrok@^4.1.0
# RUN npm install -g eas-cli
# RUN npm install

ENV API_URL=http://localhost
ENV EXPO_TOKEN=

COPY . .

EXPOSE 80

CMD ["./cli", "--help"]