FROM node:latest as build
ENV API_URL=https://api.ownit.app
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN ./cli build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]