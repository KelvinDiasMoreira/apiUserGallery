(async () => {
    const database = require('./src/database/connection')
    const Users = require('./src/models/users')
    await database.sync({force: true});

})();

