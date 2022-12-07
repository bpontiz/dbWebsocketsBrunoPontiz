import * as dotenv from 'dotenv';

dotenv.config();
const optionsMysql = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        db: process.env.DB_NAME,
        insecureAuth: true
    },
    pool: { min: 0, max: 10 }
}

export default optionsMysql;