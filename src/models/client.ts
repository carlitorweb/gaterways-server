import { PrismaClient } from '@prisma/client';

interface CustomNodeJsGlobal {
    prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

// Event-based logging
const prisma =
    global.prisma ||
    new PrismaClient({
        log: [
            {
                emit: 'event',
                level: 'query',
            },
            {
                emit: 'stdout',
                level: 'error',
            },
            {
                emit: 'stdout',
                level: 'info',
            },
            {
                emit: 'stdout',
                level: 'warn',
            },
        ],
    });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
