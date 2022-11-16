"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pool {
    client;
    methods;
    constructor(client, methods) {
        this.client = client;
        this.client.connect();
        if (methods) {
            this.methods = methods;
        }
        console.log(`Pool initialized with ${this.methods ? Object.keys(this.methods)?.length : 0} method(s)`);
    }
    // Register a method for a specific task
    registerMethods(methods) {
        this.methods = methods;
    }
    getMethods() {
        return this.methods;
    }
    // Add a task to the pool, must refer to a specific method
    async addTask(task) {
        await this.client.sAdd("new:task:index", JSON.stringify(task));
    }
    // Get pending tasks in the pool
    async getTasks() {
        const members = await this.client.sMembers("new:task:index");
        console.log(members);
        return members;
    }
}
exports.default = Pool;
