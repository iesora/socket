FROM node:18 AS builder
WORKDIR /eo-api
COPY ./server-v2/package*.json /eo-api/
COPY ./server-v2/yarn.lock /eo-api/
RUN yarn
COPY ./server-v2 /eo-api/
RUN yarn build
# for ncc
RUN yarn pack:ncc

# FROM node:14-alpine
# WORKDIR /eo-api-v2
# COPY --from=builder /eo-api-v2/dist ./
# COPY --from=builder /eo-api-v2/package.json ./
# RUN yarn add typeorm@0.2.43

# CMD ["yarn", "start:prod-new"]
CMD ["yarn", "start:ncc"]