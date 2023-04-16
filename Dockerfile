FROM node:lts-alpine as build-stage
WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .

RUN npm run generate

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
