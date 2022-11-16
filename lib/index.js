"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const redis_1 = require("redis");
const pool_1 = tslib_1.__importDefault(require("./libs/pool"));
const client = (0, redis_1.createClient)();
const pool = new pool_1.default(client);
pool.addTask("hello12");
pool.getTasks();
