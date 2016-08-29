FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY ghost-blog /etc/nginx/sites-enabled/ghost-blog

RUN rm -rf /etc/nginx/conf.d
