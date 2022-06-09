const { exec } = require('node:child_process'); //prueba

const executeComand = (DbEmpty) => {
    if (DbEmpty) { //agrega los datos fake a la base de datos
        exec('cd src && npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
            console.error(`stderr: ${stderr}`); 
            console.log(`stdout: ${stdout}`);
        });
    }
}

module.exports = {
    executeComand
}