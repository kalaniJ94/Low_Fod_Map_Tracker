const {connect, connection } = require('mongoose');

const connectionString =
//  process.env.MONGODB_URI || 
"mongodb://mongodb://127.0.0.1:27017/lfm-tracker";

connect(connectionString);

module.exports = connection;