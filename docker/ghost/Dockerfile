FROM ghost:0.9

WORKDIR $GHOST_SOURCE
ADD dist/ content/themes/my-ghost-theme
RUN sed -i.bak s/casper/my-ghost-theme/g "/usr/src/ghost/core/server/data/schema/default-settings.json"

ADD config-prod.js config.example.js

ENV NODE_ENV production
ENV BLOG_URL ?
ENV MAILGUN_USER ?
ENV MAILGUN_PASSWORD ?

EXPOSE 2368
