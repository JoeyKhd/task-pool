import { createClient } from "redis";
import Pool from "@/libs/pool";

const client = createClient();

const sayHello = (): void => {
  console.log(`sayHello method!`);
};

const pool = new Pool(client, { sayHello });

pool.addTask({ name: "ello", method: "sayHello", params: [1, 2, 3] });
pool.getTasks();
