declare class Pool {
    client: any;
    methods: any;
    tasks: any;
    constructor(client: any, methods?: any);
    registerMethods(methods: any): void;
    getMethods(): any;
    addTask(value: string): Promise<void>;
    getTasks(): Promise<any>;
}
export default Pool;
