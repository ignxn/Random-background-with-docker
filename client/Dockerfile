#FROM nginx
#
#MAINTAINER Ihnatsi
#
#VOLUME D:/Documents/Projects/Random-background/Random-background/client:/app/client
# VOLUME /Users/sjobs/Documents/docker-compose-tutorial/angular-app/dist:/usr/share/nginx/html
#
#EXPOSE 80


#FROM node:8
#
#WORKDIR /app/client
#
#ENV PATH /app/client/node_modules/.bin:$PATH
#
#ADD package.json /app/client
#RUN npm install
#RUN npm install react-scripts -g
#
#CMD ["npm", "start"]


FROM node:8

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client
COPY package-lock.json /app/client

RUN npm install

COPY . /app/client

CMD ["npm", "start"]

