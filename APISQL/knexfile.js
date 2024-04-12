module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        user: 'postgres',
        host: '127.0.0.1',
        password: "Blaze0719",
        database: 'APISQL',
    },
};