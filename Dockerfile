FROM node:14-alpine
WORKDIR /app
COPY soft1.js package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node soft1.js