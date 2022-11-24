import sql from 'mssql'

const dbSettings = {
    user: 'luke',
    password: 'senha',
    server: 'localhost',
    database: 'CRUD',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    }   catch (error) {
        console.error(error);
    }
}
