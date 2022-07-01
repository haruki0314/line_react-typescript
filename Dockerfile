# FROM node:16.13.0-alpine
# WORKDIR /src

# FROM node:16.13.0-alpine3.11
# WORKDIR /usr/src/app
# RUN npm install react-router-dom @types/react-router-dom

FROM node:16.13.0-alpine3.12
ENV NODE_VERSION 14.18.1
WORKDIR /front
COPY ./front /front
EXPOSE 3000
ENV CI=true