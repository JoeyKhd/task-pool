class Pool {
  client: any;
  methods: any;
  tasks: any;

  constructor(client: any, methods?: any) {
    this.client = client;
    this.client.connect();
  }

  // Register a method for a specific task
  registerMethods(methods: any) {
    this.methods = methods;
  }

  getMethods() {
    return this.methods;
  }

  // Add a task to the pool, must refer to a specific method
  async addTask(value: string) {
    await this.client.sAdd("new:task:index", JSON.stringify({ value }));
  }

  // Get pending tasks in the pool
  async getTasks() {
    const members = await this.client.sMembers("new:task:index");
    console.log(members);
    return members;
  }
}

export default Pool;
