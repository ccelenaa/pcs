"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('ts-node/register');
const config = require("config");
console.log(config.get('database'));
const migration = Object.assign({}, config.get('database'), {
    migrations: {
        schemaName: 'public',
        tableName: `migrations`,
        disableTransactions: true,
        migrationSource: require('./migrations/source')
    }
});
module.exports = migration;
//# sourceMappingURL=knexfile.js.map