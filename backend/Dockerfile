FROM node:24-alpine3.21

COPY package.json /starter/
COPY server.js /starter/
COPY configs /starter/configs
COPY .env /starter/

WORKDIR /starter

RUN npm install

EXPOSE 3001

CMD ["npm","start"]