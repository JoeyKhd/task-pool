"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pool {
    client;
    methods;
    tasks;
    constructor(client, methods) {
        this.client = client;
        this.client.connect();
    }
    // Register a method for a specific task
    registerMethods(methods) {
        this.methods = methods;
    }
    getMethods() {
        return this.methods;
    }
    // Add a task to the pool, must refer to a specific method
    async addTask(value) {
        await this.client.sAdd("new:task:index", JSON.stringify({ value }));
    }
    // Get pending tasks in the pool
    async getTasks() {
        const members = await this.client.sMembers("new:task:index");
        console.log(members);
        return members;
    }
}
exports.default = Pool;
