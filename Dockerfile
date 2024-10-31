FROM nginx:1.20-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]