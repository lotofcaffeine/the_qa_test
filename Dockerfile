# Base Docker Container
# FROM alpine:3.9.4
FROM node:lts-alpine
WORKDIR /opt/server
EXPOSE 80
# ENV NAME base
RUN apk update && apk upgrade && apk add --no-cache git
COPY ./src /opt/server
RUN npm install
CMD ["node", "index.js"]
