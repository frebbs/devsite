# Frontend
This frontend application is built using Bootstrap 5, Webpack, and Babel. It includes a custom Webpack configuration to handle JavaScript, CSS, and SCSS files. The project uses the MiniCssExtractPlugin to extract CSS into separate files.

## Directory Structure

```
.
├── app.js

├── Dockerfile
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── prettier.config.js
├── public
│   ├── css
│   │   ├── main.css
│   │   └── main.css.map
│   ├── favicon.ico
│   └── js
│       ├── main.js
│       ├── main.js.LICENSE.txt
│       └── main.js.map
├── README.md
├── src
│   ├── js
│   │   ├── bootstrap.js
│   │   └── main.js
│   └── scss
│       ├── _bootstrap.scss
│       ├── _fonts.scss
│       ├── main.scss
│       ├── mixins
│       │   └── google-fonts.scss
│       └── _variables.scss
├── views
│   ├── index.ejs
│   ├── partials
│   │   └── _navbar.ejs
│   └── template.ejs
└── webpack.config.js
```

## Setup

1. Make sure you have Node.js installed on your system.
2. Install dependencies by running `npm install` in the frontend directory.
3. Update the `.env` file with necessary environment variables if needed.

## Development

To start the development server with hot reloading, run:

```bash
npm run dev
```

This will run Webpack in development mode with the watch flag, nodemon for the server, and browser-sync to automatically refresh the browser when changes are detected.

## Production

To build the frontend for production, run:

```bash
npm run build
```

This will generate the minified and optimized JS and CSS files in the `public` directory.

To run the production server, execute:

```bash
npm run serv:prod
```

This will start the server using the production build.

## Docker

The Dockerfile provided in the frontend directory allows you to build a Docker container for both development and production environments. The Dockerfile is designed to use the official Node.js image as the base image, and it installs the necessary dependencies based on your `package.json` file. It then sets up the appropriate environment and ports for development and production stages.

### Development with Docker

To build and run the frontend container in the development environment, you can use the `docker-compose.dev.yml` file provided in the project's root directory.

1. Make sure you have Docker and Docker Compose installed on your system.
2. From the project's root directory, run:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This command will build the frontend container using the development stage of the Dockerfile and start the services defined in `docker-compose.dev.yml`. The frontend will be accessible at `http://localhost:3000`.

### Production with Docker

To build and run the frontend container in the production environment, use the `docker-compose.production.yml` file provided in the project's root directory.

1. Make sure you have Docker and Docker Compose installed on your system.
2. From the project's root directory, run:

```bash
docker-compose -f docker-compose.production.yml up --build
```

This command will build the frontend container using the production stage of the Dockerfile and start the services defined in `docker-compose.production.yml`. The frontend will be accessible at `http://localhost:3000`.

### Stopping and Removing Docker Containers

To stop and remove the containers, networks, and volumes defined in the respective Docker Compose files, run the following command from the project's root directory:

For development:

```bash
docker-compose -f docker-compose.dev.yml down
```

For production:

```bash
docker-compose -f docker-compose.production.yml down
```

These commands will stop the running containers and remove the containers, networks, and volumes associated with the specified Docker Compose file.
