'use strict'
const serverless = require('serverless-http');
const app = require('./app')
const consign = require('consign');

consign({ cwd: __dirname })
    .include('config.js')
    .include('routes')
    .into(app);

    app.listen(app.config.port, () => {
        console.log('Server on port', app.config.port);
    });
module.exports.handler = serverless(app);