FROM node:18-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "dev", "--host", "0.0.0.0"]
