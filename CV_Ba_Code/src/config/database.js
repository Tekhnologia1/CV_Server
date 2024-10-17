const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Vmavalkar@99',  // Keep this secure
    database: 'cvdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to test the connection
async function testConnection() {
    try {
        const connection = await mySqlPool.getConnection();
        console.log('Database connection successful');
        connection.release();
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

// Test the connection when the module is loaded
testConnection();

module.exports = mySqlPool;




