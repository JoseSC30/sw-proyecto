// seeder.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import bcrypt from 'bcrypt';
const password = '1234';
const saltRounds = 10;

const encryptedPassword = await bcrypt.hash(password, saltRounds);

console.log(encryptedPassword);
async function seed() {
  try {
    // Lógica para insertar registros en la base de datos usando Prisma Client
    await prisma.administrador.createMany({
      data: [
        { email: 'oscar@oscar', username: 'admin', password: encryptedPassword },
        // ... más datos
      ],
    });
    
    await prisma.chofer.createMany({
      data: [
        { nombre: 'Danco', dni: '1234' },
        // ... más datos
      ],
    });

    console.log('Datos de usuarios insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos de usuarios:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();

// PARA CORRER EL SEEDER EJECUTAR "node seeder.js" desde la raiz del proyecto