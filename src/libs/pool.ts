import { ITask } from "@/types";
class Pool {
  client: any;
  methods: any;

  constructor(client: any, methods?: any) {
    this.client = client;
    this.client.connect();
    if (methods) {
      this.methods = methods;
    }
    console.log(`Pool initialized with ${this.methods ? Object.keys(this.methods)?.length : 0} method(s)`);
  }

  // Register a method for a specific task
  registerMethods(methods: any) {
    this.methods = methods;
  }

  getMethods() {
    return this.methods;
  }

  // Add a task to the pool, must refer to a specific method
  async addTask(task: ITask) {
    await this.client.sAdd("new:task:index", JSON.stringify(task));
  }

  // Get pending tasks in the pool
  async getTasks() {
    const members: ITask[] = await this.client.sMembers("new:task:index");
    console.log(members);
    return members;
  }
}

export default Pool;
