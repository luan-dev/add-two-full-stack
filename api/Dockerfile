# syntax=docker/dockerfile:1
# Dev Dockerfile to help with dev
FROM node:16-alpine

ENV APP_HOME=/app
WORKDIR ${APP_HOME}

COPY package.json .
RUN set -eux \
    && yarn install

COPY . .

EXPOSE 8080
CMD ["yarn", "dev"]