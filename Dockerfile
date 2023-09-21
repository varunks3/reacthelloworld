FROM node:20-alpine3.17
WORKDIR /react-container
COPY . .
RUN npm run build
CMD [ "npm", "start" ]