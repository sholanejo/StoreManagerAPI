# Store Manager API built with Node.JS(Express Framework)

Store Manager is a web application that helps store owners manage sales and product inventory records

## Technologies 

The following technologies were used in this project:

- [JavaScript](https://www.javascript.com)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [MongoDb](https://www.mongodb.com/cloud/atlas)



## Requirements

Before starting, you need to have Git and Node.js installed. Alternatively, you can download the code as a zip file.

You will also need to create a .env file at the root directory, and you will need to create a MongoDB database. Insert the following into the .env file:
MONGO_URI: The URI of your MongoDB database. JWT_SECRET: The secret key used to sign the JWT. PORT: The port the application will run on.

Kindly ensure that you are in the root directory before running the following commands.

## Install dependencies
    npm install

## Start server
    npm run index

# Features				
- Store attendant can search and add products to buyer’s cart.
- Store attendant can see his/her sale records but can’t modify them.
- Application is able to show available products, quantity and price.
- Store owner can see sales and can filter by attendants.
- Store owner can add, modify and delete products.
- Store owner can give admin rights to a store attendant.
- Products have categories.
- Store attendants can add products to specific categories.	