# Nawyish - Backend

## Description

This is the backend for the Nawyish project. It is a RESTful API that provides the necessary endpoints for the frontend to interact with the database.

## Installation

Run `npm ci` to install the necessary dependencies.

## Usage

Copy the `.env.example` file to `.env` and fill in the necessary environment variables. You'll need a `postgres` database to connect to.

Run `npm run start:dev` to start the server.

On first run, the backend will seed the database.

## API Documentation

The Swagger API docs are available at the `/doc` endpoint. There is no auth for anything because I don't wanna :(
