FROM node:15.14-alpine3.13 as base

WORKDIR /app
COPY package*.json ./

FROM base as build
RUN npm install -g npm@8.3.2

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
