FROM node:22.14.0

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli
RUN npm install

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]

