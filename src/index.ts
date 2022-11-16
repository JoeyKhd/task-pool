import { createClient } from "redis";
import Pool from "@/libs/pool";

const client = createClient();
const pool = new Pool(client);

pool.addTask("hello12");
pool.getTasks()
