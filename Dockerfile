FROM node:lts

WORKDIR /app

COPY . ./

RUN npm install 
RUN rm -fr .git

RUN npm run serve