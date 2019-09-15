FROM node:10.13.0
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 8081
CMD npm run build && npm run start
