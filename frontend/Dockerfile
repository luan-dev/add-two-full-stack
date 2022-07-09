# syntax=docker/dockerfile:1
FROM node:16-alpine

ENV APP_HOME=/app
WORKDIR ${APP_HOME}

COPY package.json .
RUN set -eux \
    && yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]