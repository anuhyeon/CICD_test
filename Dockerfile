FROM node:20.14.0

WORKDIR /app

COPY . .

RUN npm install

CMD ["node","server"]