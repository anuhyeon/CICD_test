FROM node:20.14.0

COPY . .

RUN npm install

CMD ["node","server"]