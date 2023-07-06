FROM node:lts-alpine as dev

RUN mkdir -p /app/lyrio
WORKDIR /app/lyrio
COPY ./ /app/lyrio/
RUN yarn
ENV LYRIO_CONFIG_FILE /config/lyrio.yaml
CMD ["yarn", "start:dev"]