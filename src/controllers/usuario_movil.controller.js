import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Funcion para mostrar todos los usuarios_movil
export const getUsuario_moviles = async (req, res) => {

    try {
        const usuario_movil = await prisma.usuario_movil.findMany();
        console.log(usuario_movil);
        res.json(usuario_movil);
    } catch (error) {
        console.log(error.message);
    }
};

//Funcion para mostrar un usuario_movil
export const getUsuario_movil = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario_movil = await prisma.usuario_movil.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        console.log(usuario_movil);
        res.json(usuario_movil);
    } catch (error) {
        console.log(error.message);
    }
};

//Funcion para crear un usuario_movil
export const createUsuario_moviles = async (req, res) => {
    const { username, password, choferId } = req.body;
    try {
        const usuario_movil = await prisma.usuario_movil.create({
            data: {
                username,
                password,
                choferId: parseInt(choferId),
            },
        });
        console.log(usuario_movil);
        res.json(usuario_movil);
    } catch (error) {
        console.log(error.message);
    }
};

//Funcion para actualizar un usuario_movil
export const updateUsuario_moviles = async (req, res) => {
    const id = req.params.id;
    const { username, password, choferId } = req.body;
    if (choferId !== undefined) {
        choferId = parseInt(choferId);
    }
    try {
        const usuario_movil = await prisma.usuario_movil.update({
            where: {
                id: parseInt(id),
            },
            data: {
                username,
                password,
                choferId,
            },
        });
        console.log(usuario_movil);
        res.json(usuario_movil);
    } catch (error) {
        console.log(error.message);
    }
};

//Funcion para eliminar un usuario_movil
export const deleteUsuario_moviles = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario_movil = await prisma.usuario_movil.delete({
            where: {
                id: parseInt(id),
            },
        });
        console.log(usuario_movil);
        res.json(usuario_movil);
    } catch (error) {
        console.log(error.message);
    }
};