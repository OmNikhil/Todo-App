FROM node:22.14.0

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

ENTRYPOINT [ "ng", "serve" ]

RUN npm install