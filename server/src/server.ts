
import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const port = 3333;
const app = fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
    port
}).then(() => {
    console.log(`Server running in port:${port}`);
    
})