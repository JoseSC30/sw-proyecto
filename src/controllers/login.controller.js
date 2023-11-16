import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

//Funcion para mostrar el login
export const showLogin = async (req, res) => {
    res.render('login');
}

//Funcion para logear un usuario
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos
        const user = await prisma.administrador.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            // Comparación de contraseñas
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                // Contraseña correcta
                console.log("Usuario y contraseña correctos");
                req.session.user = user;
                console.log(req.session.user);
                
            } else {
                // Contraseña incorrecta
                console.log("Usuario o contraseña incorrectos");
                res.redirect('/login');
            }
        } else {
            // Usuario no encontrado
            console.log("Usuario no encontrado");
            res.redirect('/login');
        }

    } catch (error) {
        // Manejo de errores
        console.error("Error al autenticar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
