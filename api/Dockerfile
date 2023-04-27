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
EXPOSE 5000:5000

CMD ["npm", "run", "dev:server"]

# Production stage
FROM base AS production
RUN npm install
COPY . .

CMD ["npm", "start"]


