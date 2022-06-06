const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Synchronizing all the models at once.
server.listen(3001, () => {
    console.log('%s listening at 3001');// eslint-disable-line no-console
    conn.sync({ force: true }).then(() => {});
});