import { ITask } from "../types";
declare class Pool {
    client: any;
    methods: any;
    constructor(client: any, methods?: any);
    registerMethods(methods: any): void;
    getMethods(): any;
    addTask(task: ITask): Promise<void>;
    getTasks(): Promise<ITask[]>;
}
export default Pool;
