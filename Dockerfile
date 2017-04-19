FROM node:7.9-alpine

ADD https://github.com/alexellis/faas/releases/download/v0.3-alpha/fwatchdog /usr/bin
RUN chmod +x /usr/bin/fwatchdog

WORKDIR /app
ADD package.json .
ADD index.js .

RUN npm i

ENV fprocess="node /app/index.js"
CMD ["fwatchdog"]