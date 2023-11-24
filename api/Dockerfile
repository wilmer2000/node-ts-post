FROM node:20-alpine AS development

RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/api

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]