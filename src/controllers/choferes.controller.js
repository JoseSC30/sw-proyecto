import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

//Funcion para mostrar todos los choferes
export const getChoferes = async (req, res) => {

    try {
        const choferes = await prisma.chofer.findMany()
        console.log(choferes)
        res.json(choferes)
    } catch (error) {
        console.log(error.message)
    }
}

//Funcion para mostrar un chofer
export const getChofer = async (req, res) => {
    const id = req.params.id
    try {
        const chofer = await prisma.chofer.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        console.log(chofer)
        res.json(chofer)
    } catch (error) {
        console.log(error.message)
    }
}

//Funcion para crear un chofer
export const createChoferes = async (req, res) => {
    const {nombre, dni} = req.body
    try {
        const chofer = await prisma.chofer.create({
            data: {
                nombre,
                dni
            }
        })
        console.log(chofer)
        res.json(chofer)
    } catch (error) {
        console.log(error.message)
    }
}

//Funcion para actualizar un chofer
export const updateChoferes = async (req, res) => {
    const id = req.params.id
    const {nombre, dni} = req.body
    try {
        const chofer = await prisma.chofer.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nombre,
                dni
            }
        })
        console.log(chofer)
        res.json(chofer)
    } catch (error) {
        console.log(error.message)
    }
}

//Funcion para eliminar un chofer
export const deleteChoferes = async (req, res) => {
    const id = req.params.id
    try {
        const chofer = await prisma.chofer.delete({
            where: {
                id: parseInt(id)
            }
        })
        console.log(chofer)
        res.json(chofer)
    } catch (error) {
        console.log(error.message)
    }
}