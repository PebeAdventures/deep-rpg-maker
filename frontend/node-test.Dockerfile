FROM node:16.10.0-alpine

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apk upgrade --no-cache --available
RUN apk add --no-cache chromium 
