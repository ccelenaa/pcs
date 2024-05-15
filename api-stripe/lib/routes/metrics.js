'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const metrics_1 = require("../tools/metrics");
module.exports = (server) => {
    server.on('after', metrics_1.default.after(server));
    server.get('/metrics', metrics_1.default.get());
};
//# sourceMappingURL=metrics.js.map