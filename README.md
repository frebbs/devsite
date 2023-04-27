# Aarondev.co.uk

Aarondev.co.uk is a full-featured, three-tier web application composed of a frontend, a backend API, and a PostgreSQL database. This guide will provide detailed instructions on setting up and running the application in both development and production environments.

## Overview

The application is divided into three main components:

- Frontend: Provides a user interface for interacting with the application.
- API: Handles requests from the frontend and communicates with the PostgreSQL database.
- PostgreSQL database: Stores and manages the data used by the application.

## Prerequisites

Before you begin, ensure that the following software is installed on your system:

- [Docker](https://docs.docker.com/engine/install/): Provides containerization for the application components.
- [Docker Compose](https://docs.docker.com/compose/install/): Simplifies the process of defining and running multi-container applications.
- [Node.js](https://nodejs.org/en/download/) (Optional): Required for running custom scripts and managing top-level dependencies.

## Directory Structure

The application's directory structure is organized as follows:

- `/api`: Contains the backend API code, including routes, models, and configuration files.
- `/frontend`: Houses the frontend code, including JavaScript, CSS, and template files.
- `/postgresDB`: Contains the PostgreSQL database setup, including Dockerfile and initialization scripts.

## Setting Up the Application

1. Clone the repository to your local machine:

```
git clone https://github.com/frebbs/app1.git
cd app1
```

2. Install the top-level dependencies (Optional, required for running custom scripts):

```
npm install
```

## Running the Development Environment

To run the application in development mode, follow these steps:

1. Execute the following command:

```
npm run dev
```

This command will build and run the Docker containers for the frontend, API, and PostgreSQL database using the `docker-compose.dev.yml` configuration file. The containers are optimized for a development environment.

2. Access the frontend by navigating to http://localhost:3000 in your web browser. 
3. Access the frontend proxy by navigating to http://localhost:3001 in your web browser.
4. Access the frontend proxy UI by navigating to http://localhost:3002 in your web browser.
4. The API will be accessible at http://localhost:5000.

3. When you make changes to the application code, the development environment will automatically rebuild and reload the affected components.

## Running the Production Environment

To run the application in production mode, follow these steps:

1. Execute the following command:

```
npm run production
```

This command will build and run the Docker containers for the frontend, API, and PostgreSQL database using the `docker-compose.production.yml` configuration file. The containers are optimized for a production environment.

2. Access the frontend by navigating to http://localhost:3000 in your web browser. The API will be accessible at http://localhost:5000.

3. In production mode, the application code is minified, and the containers are optimized for performance and stability.

## Miscellaneous

- To generate a directory structure of the project, excluding the `node_modules` folders, run the following command:

```
npm run util:getDircetoryStruc
```

This command will output a tree-like representation of the application's directory structure, which can be useful for understanding the organization of the project.

## Directory structure as of 26/04/2023

    api: Contains the backend API for your application.
    ├── app.js: Entry point for the API server.
    ├── config: Configuration files for the API.
    ├── dbConfig.js: Configuration for the database connection.
    ├── handleJsonParsingError.js: Middleware for handling JSON parsing errors.
    ├── Dockerfile: Docker configuration for building the API container.
    ├── models: Data models for the API.
    └── userAPI.js: User model for the API.
    ├── package.json & package-lock.json: Dependency management files for the API.
    ├── README.md: Documentation for the API.
    ├── routes: Route files for the API.
    ├── apiRouter.js: Route definitions for the API-specific endpoints.
    └── rootRouter.js: Route definitions for the root API endpoints.
    └── utils: Utility functions.
    └── dbUtils.js: Utility functions for the database.
    
    frontend: Contains the frontend code for your application.
    ├── app.js: Entry point for the frontend server.
    ├── Dockerfile: Docker configuration for building the frontend container.
    ├── package.json & package-lock.json: Dependency management files for the frontend.
    ├── postcss.config.cjs: PostCSS configuration for the frontend.
    ├── prettier.config.js: Prettier configuration for the frontend.
    ├── public: Static files for the frontend.
    ├── css: CSS files.
    ├── favicon.ico: Favicon for the frontend.
    └── js: JavaScript files.
    ├── README.md: Documentation for the frontend.
    ├── src: Source files for the frontend.
    ├── js: JavaScript files.
    └── scss: SCSS files and partials.
    ├── views: EJS template files for the frontend.
    ├── index.ejs: Main page template.
    ├── partials: Partial templates.
    └── template.ejs: Base template for other EJS templates.
    └── webpack.config.js: Webpack configuration for the frontend.
    
    postgresDB: Contains the PostgreSQL database setup for your application.
    ├── Dockerfile: Docker configuration for building the PostgreSQL container.
    ├── init.sql: SQL file to initialize the database schema.
    ├── package.json: Dependency management file for the PostgreSQL setup.
    └── README.md: Documentation for the PostgreSQL setup.
    
    Miscellaneous files:
    ├── docker-compose.dev.yml: Docker Compose configuration for development.
    ├── docker-compose.production.yml: Docker Compose configuration for production.
    └── package.json & package-lock.json: Dependency management files for the entire application.


