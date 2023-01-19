import { PrismaClient } from '@prisma/client';
import fastify from "fastify";
import cors from '@fastify/cors';

const port = 3333;
const app = fastify();
const prisma = new PrismaClient();
app.register(cors);


app.get('/habits', async () => {
    const habits = await prisma.habits.findMany({
        where: {
            title: {
                startsWith: 'Be'
            }
        }
    });
    return habits;
})

app.listen({
    port
}).then(() => {
    console.log(`Server running in port:${port}`);
    
})