export interface ITask {
    name: string;
    method: string;
    params?: any[];
    completed?: boolean;
    completedBy?: string;
    completedAt?: number;
}
