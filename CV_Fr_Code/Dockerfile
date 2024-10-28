# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY QPE_Frontend_Code/package*.json ./

# Install frontend dependencies
RUN yarn install && yarn cache clean

# Bundle app source
COPY QPE_Frontend_Code/ .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your frontend app
CMD ["npm", "start"]
