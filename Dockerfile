FROM node:8.10.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]