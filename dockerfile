FROM node:10-alpine

# Making application directory
RUN mkdir -p /usr/src/app

# Setting application directory as working directory
WORKDIR /usr/src/app

# Copying npmrc package.json and lock file for docker layer caching
COPY .npmrc package.json yarn.lock ./

# Installing packages including devDependencies
RUN yarn --pure-lockfile

# Copying code
COPY . /usr/src/app

# Building service
RUN yarn build

# Installing production packages
RUN yarn --prod

# Exposing Port
EXPOSE 50052

# Starting service
CMD [ "npm", "run", "start"]
