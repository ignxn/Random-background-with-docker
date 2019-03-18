#FROM node
#
#MAINTAINER Ihnatsi
#
#WORKDIR /server
#
#COPY . /server
#
#RUN npm install
#RUN npm install -g nodemon #hmm idk
#
#EXPOSE 3000
#
#CMD ["npm", "start"]



#FROM node:8
#
#WORKDIR /app/server
#
#ENV PATH /app/server/node_modules/.bin:$PATH
#
#RUN npm install --global nodemon
#
#ADD package.json /app/server
#RUN npm install
#
#CMD ["nodemon","--legacy-watch"]

FROM node:8.7.0-alpine

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package.json /app/server
COPY package-lock.json /app/server

RUN npm install

COPY . /app/server

CMD ["node", "server.js"]

