FROM node:alpine

WORKDIR /usr/src/

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

CMD npm run start