# Specify a base image
FROM node:14.15.1-alpine3.10

# Set up working directory
WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install

# Copy all rest files
COPY ./ ./

# Default command
CMD ["npm", "start"]
 