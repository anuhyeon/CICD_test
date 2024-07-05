FROM node:20.14.0

# Set the working directory
# WORKDIR /app

# Copy package.json and package-lock.json
# COPY package*.json ./
COPY . .
# Clean npm cache and install dependencies

RUN npm cache clean --force

RUN npm install

CMD ["node","server"]