FROM node:16-bullseye
COPY . /app
WORKDIR ./app
RUN npm ci
CMD npm run start