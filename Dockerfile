FROM node:14-alpine
WORKDIR /
COPY package.json ./
RUN npm install
COPY . .
CMD npm run build
CMD npm run start
