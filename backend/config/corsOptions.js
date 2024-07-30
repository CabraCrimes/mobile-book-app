const allowedOrigins = require('./allowOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        //!origin means the origin url is coming from the same domain and not from outside
        //that is why we have to add it below in devlopment. 
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by Cors'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;