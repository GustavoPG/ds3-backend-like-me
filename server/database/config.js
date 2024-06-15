// config.js
import pg from 'pg';

/// Cargar variables de entorno
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = new pg.Pool({
    host: DB_HOST || "localhost",
    user: DB_USER || "postgres",
    password: DB_PASSWORD || "gp2022",
    database: DB_DATABASE || "likeme",
    allowExitOnIdle: true,
});

pool.query('SELECT NOW()', (err, res) => { 
    if (err) {
        console.log('Error connecting to DB:', err);
    } else {
        console.log('🔋 DB-Connected', res.rows[0].now);
    }
});

export default pool;
