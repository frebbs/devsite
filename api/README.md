# API Server

This README file provides a comprehensive guide to setting up and running the API server for your project. The API server is responsible for handling HTTP requests from the frontend, processing the requests, and communicating with the PostgreSQL database to store or retrieve data.

## Directory Structure

The API server directory has the following structure:

```
.
├── app.js
├── config
│   ├── dbConfig.js
│   └── handleJsonParsingError.js
├── Dockerfile
├── models
│   └── userAPI.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   ├── apiRouter.js
│   └── rootRouter.js
└── utils
    └── dbUtils.js
```

## Prerequisites

Ensure that you have the following software installed on your system:

- [Docker](https://docs.docker.com/engine/install/): Provides containerization for the API server.
- [Node.js](https://nodejs.org/en/download/) (Optional): Required for running the API server outside of Docker.

## Setting Up the API Server

1. Navigate to the API server directory within the App1 project:

```
cd api
```

2. Install the API server dependencies (Optional, required for running the API server outside of Docker):

```
npm install
```

## Running the API Server in Development Mode

There are two ways to run the API server in development mode:

### Using Docker

1. Make sure you are in the API server directory:

```
cd api
```

2. Build the development Docker image:

```
docker build -t api_server:dev --target development .
```

3. Run the development Docker container:

```
docker run -p 5000:5000 -v $(pwd):/app api_server:dev
```

The API server will be accessible at http://localhost:5000.

### Using Node.js (without Docker)

1. Make sure you are in the API server directory:

```
cd api
```

2. Start the development server using `nodemon`:

```
npm run dev:server
```

The API server will be accessible at http://localhost:5000.

## Running the API Server in Production Mode

### Using Docker

1. Make sure you are in the API server directory:

```
cd api
```

2. Build the production Docker image:

```
docker build -t api_server:prod --target production .
```

3. Run the production Docker container:

```
docker run -p 5000:5000 api_server:prod
```

The API server will be accessible at http://localhost:5000.

## API Server Components

- `app.js`: The main entry point for the API server.
- `config`: Contains configuration files for the API server, including database configuration and error handling.
- `models`: Contains the data models used by the API server, such as the `userAPI.js` model.
- `routes`: Contains the route definitions for the API server, including the `apiRouter.js` and `rootRouter.js` files.
- `utils`: Contains utility functions, such as the `dbUtils.js` file for database-related tasks.

## Contributing

When making changes to the API server code, please follow the existing coding conventions and ensure that your changes do not introduce new errors or break existing functionality.
