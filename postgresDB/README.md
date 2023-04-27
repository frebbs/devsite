# Dockerfile for PostgreSQL for connection from Node.js

## Getting started

1. Create a directory for your project, and create a file called Dockerfile in that directory.
2. Copy the contents of the sample Dockerfile in this repository into your Dockerfile. 
3. Create an init.sql file in the same directory as your Dockerfile. This file should contain any SQL commands necessary to set up your database schema and initial data.
4. Build your Docker image using the following command:

    docker build -t postgresdb .

This will create a new Docker image with the tag postgresdb.

Run your Docker container using the following command:

    docker run --name postgresdb -p 5432:5432 -d postgresdb

This will start a new Docker container with the name postgresdb, using the image you just built. The -p 5432:5432 option maps the PostgreSQL port inside the container (5432) to the same port on your host machine, so you can connect to the database from your Node.js app running on your host machine. The -d option runs the container in detached mode (in the background).

## Connect to your PostgreSQL database from your Node.js app using the following connection string:

    postgres://USERNAME:PASSWORD@localhost:5432/mydb

This assumes that you're using the username, password, and database name as specified in the Dockerfile, so you will need to update the fields. If you're using different values, adjust the connection string accordingly.

## Dockerfile details

The Dockerfile starts with the latest version of the official PostgreSQL Docker image.

It sets the default username, password, and database name for PostgreSQL by setting the appropriate environment variables.

It copies a SQL file called init.sql to the /docker-entrypoint-initdb.d/ directory. This SQL file will be executed by PostgreSQL when the container starts up, and it will initialize the database with any necessary tables, indexes, etc.

It exposes the default PostgreSQL port, 5432.