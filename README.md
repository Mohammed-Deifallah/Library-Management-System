# Library Management System

## Introduction

This repository shows my work on developing a library management system, as an initial task from [Bosta](https://bosta.co/en-eg) to join the interview process as a Backend Developer II.

REST API is developed in [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) framework, while the relational database is designed and written in [MySQL](https://www.mysql.com/).

## Routes
### GET Requests

- list_books: This retrieves all relevant information about the existing books in the library database.
- list_borrowers: This retrieves all relevant information about the library members who borrowed some books and haven't returned them yet.

### POST Requests

- register_borrower: This adds a new member to the library database.

## How To Run

1. First, run `db/setup.sql` script to setup the schema.
2. Run the command `node src/app.js`
3. You can send requests to your `localhost:3000`, either from your browser or [Postman](https://www.postman.com/).

## Deployment

The current work includes an incomplete Dockerfile due to MySQL connectivity issue.

