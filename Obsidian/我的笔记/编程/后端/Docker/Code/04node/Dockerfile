FROM node:14.16.1

CMD [ "echo wdnmd" ]
COPY . /app
WORKDIR /app
RUN node -v
RUN npm -v
ENTRYPOINT  node ./app.js