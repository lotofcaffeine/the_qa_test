# Base Docker Container
# FROM alpine:3.9.4
FROM node:lts-alpine
# ENV NAME base
RUN apk update && apk upgrade && apk add --no-cache git
COPY ./src /opt/server
WORKDIR /opt/server
RUN npm install
EXPOSE 3000

#CMD ["node", "index.js"]
