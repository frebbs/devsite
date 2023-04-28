# Use the official Node.js image as the base image
FROM node:20 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Development stage
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000:3000
EXPOSE 3001:3001
EXPOSE 3002:3002

CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000:3000

CMD ["npm", "run", "serv:prod"]


