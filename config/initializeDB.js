import { optionsMysql } from './mariaDB.js';
import { optionsSqlite3 } from './sqlite3.js';
import knex from 'knex';
import productos from './productos.js';

(async () => {
    const databaseProductos = knex(optionsMysql);
    try {
        await databaseProductos.schema.createTableIfNotExists('productos', (tabla) => {
            tabla.increments('id').primary();
            tabla.string('codigo');
            tabla.string('descripcion');
            tabla.string('foto');
            tabla.string('nombre');
            tabla.float('precio');
            tabla.integer('stock');
        });
        await databaseProductos('productos').insert(productos);
        console.log(`Tabla "Productos" creada exisotamente!`);
    }
    catch (err) {
        console.log(err);
    }
})();

(async () => {
    const databaseCarritos = knex(optionsMysql);
    try {
        await databaseCarritos.schema.createTableIfNotExists('carritos', (tabla) => {
            tabla.increments('id').primary();
            tabla.dateTime('timestamp');
        })
    }
    catch (err) {
        console.log(err);
    }
})();