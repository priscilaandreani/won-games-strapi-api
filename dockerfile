FROM node:20.15.1-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install -g 
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]

# VITE
USER root
RUN chown node:node /opt/app/node_modules

USER node
RUN mkdir -p /opt/app/node_modules/.strapi/vite

EXPOSE 1337
EXPOSE 5173
CMD ["npm", "run", "develop"]