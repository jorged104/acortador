FROM nginx
WORKDIR /app
ADD frontend/dist/ /app
RUN npm install


ENV ADMIN 'admin'

CMD ["npm","start"]