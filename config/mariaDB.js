import * as dotenv from 'dotenv';

dotenv.config();
const optionsMysql = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
}

export default optionsMysql;