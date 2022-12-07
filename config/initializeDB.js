import optionsMysql from './mariaDB.js';
import knex from 'knex';
import productos from './productos.js';


(async () => {
    const databaseProductos = knex(optionsMysql);
    try {
        await databaseProductos.schema.createTableIfNotExists('productos', (table) => {
            table.increments('id').primary();
            table.string('codigo');
            table.string('descripcion');
            table.string('foto');
            table.string('nombre');
            table.float('precio');
            table.integer('stock');
        });
        await databaseProductos('productos').insert(productos);
        console.log(`Tabla "Productos" creada exisotamente!`);
    }
    catch (err) {
        console.log(`No pudo crearse la table "productos". ${err}`);
    }
})();

(async () => {
    const databaseCarritos = knex(optionsMysql);
    try {
        await databaseCarritos.schema.createTableIfNotExists('carritos', (table) => {
            table.increments('id').primary();
            table.dateTime('timestamp');
        })
    }
    catch (err) {
        console.log(`No pudo crearse la table "carritos". ${err}`);
    }
})();

(async () => {
    const database = knex(optionsMysql);
    try {
        await database.schema.createTableIfNotExists("carritos_productos", (table) => {
        table.increments("id").primary();
        table.integer("carrito_id").unsigned().references("id").inTable("carritos");
        table.integer("producto_id").unsigned().references("id").inTable("productos");
        });
        console.log("Tabla intermedia creada con éxito!");
    } catch (err) {
        console.log(`No pudo crearse la table "carritos_productos". ${err}`);
    }
})();