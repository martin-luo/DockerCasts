# Base image
FROM node:14.15.1-alpine3.10

# Set up the working directory
WORKDIR '/app'

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy other files
COPY . .

# Build the project
RUN npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html