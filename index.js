const fp = require("fastify-plugin");
const Mongoose = require("mongoose");

module.exports = fp((fastify, options, next) => {
    if (!Mongoose) {
        throw new Error("Could not find Mongoose, was it installed?");
    }

    let isOptionsUri = options instanceof String;

    let uri = isOptionsUri ? options : options.uri;
    let mongoOptions = isOptionsUri ? {} : options.options;

    Mongoose.connect(
        uri,
        mongoOptions,
        err => {
            if (err) {
                return next(err);
            }

            fastify.decorate("Mongoose", { Mongoose }).addHook("onClose", function(fastify, done) {
                fastify.Mongoose.connection.close(done);
            });

            fastify.decorate("db", Mongoose.connection);

            next();
        }
    );
});
