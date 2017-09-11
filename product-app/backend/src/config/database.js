const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = function(config) {
  mongoose.connect(config.database, {useMongoClient: true}, (err) => {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
  })
  // .then(() => require('./db-init')(server))
  .catch(err => console.error(err));
}
