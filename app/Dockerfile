FROM node:alpine

WORKDIR /usr/src/

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

CMD yarn start -p 3000