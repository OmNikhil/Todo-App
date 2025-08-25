FROM node:22.14.0

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]

RUN npm install