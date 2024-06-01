FROM node:latest

ENV API_URL=http://localhost
ENV EXPO_TOKEN=_lpU0LdVI6IVE8p9IurYKxRx6ALQgJyk-_hZUJWI

WORKDIR /app

COPY package*.json ./

RUN yarn install
RUN npm install -g @expo/ngrok@^4.1.0
RUN npm install -g eas-cli

COPY . .

EXPOSE 80

CMD ["./cli", "--help"]