# Use an official Node.js image to build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire frontend source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server (nginx) to serve the React app
FROM nginx:alpine

# Copy built React files to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
