FROM mysql:5.7

WORKDIR /app

COPY . .

EXPOSE 3000:3000
EXPOSE 3306

ENTRYPOINT ["node", "src/app.js"]