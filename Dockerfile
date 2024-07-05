FROM node:20.14.0

WORKDIR /app

# package.json과 package-lock.json 파일을 작업 디렉토리로 복사
COPY package*.json ./

# npm 캐시를 클리어하고 의존성을 설치
RUN npm cache clean --force && npm install

COPY . .

#RUN npm install

CMD ["node","server"]