FROM node:18-alpine
WORKDIR /react-container
COPY . .
RUN npm install
CMD [ "npm", "start" ]