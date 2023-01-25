import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
    app.get('/habits', async () => {
        const habits = await prisma.habits.findMany({
            where: {
                title: {
                    startsWith: 'D'
                }
            }
        });
        return habits;
    })

    app.post('/habits', async (req, res) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            ) 
        })

        const { title, weekDays} = createHabitBody.parse(req.body);

        await prisma.habits.create({
            data: {
                title: title,
                created_at: new Date(),
                weekDays: {
                    create: weekDays.map(w => {
                        return {
                            week_day: w
                        }
                    })
                }
            }
        })
    })
}