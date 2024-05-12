FROM node:21.7.2-alpine

USER node

WORKDIR /app

COPY --chown=node:node package*.json .

COPY --chown=node:node . .

RUN npm i --no-cache && npm run build


ENTRYPOINT ["npm", "start"]