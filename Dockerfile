FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -f

EXPOSE 8080
# Note 8080 is exposed! I'm not crazy!
CMD ["npm", "run", "serve"]
