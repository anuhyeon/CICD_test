FROM node:20.14.0

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# package.json과 package-lock.json 파일을 작업 디렉토리로 복사
COPY package.json package-lock.json ./

# npm 캐시를 클리어하고 의존성을 설치
RUN npm cache clean --force && npm install

# 나머지 소스 코드를 작업 디렉토리로 복사
COPY . .

# 서버를 실행
CMD ["node", "server"]
