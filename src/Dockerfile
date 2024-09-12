FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]
