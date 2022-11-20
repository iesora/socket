FROM node:13.7 AS builder
WORKDIR /eo-api
COPY ./server-v2/package*.json /eo-api/
COPY ./server-v2/yarn.lock /eo-api/
RUN yarn
COPY ./server-v2 /eo-api/
RUN yarn build

FROM node:14-alpine
WORKDIR /eo-api
COPY --from=builder /eo-api/dist ./
COPY --from=builder /eo-api/package.json ./
CMD ["yarn", "start:prod"]