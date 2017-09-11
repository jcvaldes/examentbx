const config = require('./config/global')
const server = require('./config/server');
require('./config/database')(config);
require('./config/routes')(server);