

# fastify-mongoose-odm

## Installation

     npm i -s mongoose
     npm i -s fastify-mongoose-odm
 
  Note: Mongoose is a peer dependency and must be installed manually for the plugin to work

## Usage
#### Install it into Fastify
     fastify.register(require("fastify-mongoose-odm"), "mongodb://uri", errorCallback);
#### or
 
    fastify.register(require("fastify-mongoose-odm"), 
                     { uri: "mongodb://uri", options: yourMongoOptions }, 
                     errorCallback);

---
#### Then use it

     fastify.Mongoose.model 
     fastify.db //Shorthand for Mongoose.connection