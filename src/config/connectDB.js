const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'mysql-38811778-kevinkumar0a2-f691.b.aivencloud.com',
    user: 'avnadmin',
    port: 22755,
    password: 'AVNS_hEoA58j1X-hZdhi1KSy',
    database: 'defaultdb',
});

export default connection;
