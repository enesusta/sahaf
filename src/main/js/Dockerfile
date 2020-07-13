FROM mhart/alpine-node:12 AS builder

WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]