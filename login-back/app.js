const express = require("express");
const cors = require("cors");

const backapp = express();
backapp.use(express.json());
backapp.use(cors());

const TOKEN_KEY = "aYOw43BM8WuLcthkKeZ12qQYUBmeEOSl"

backapp.post("/usuario/login", (req, res) => {
    const { usuario, clave } = req.body;
    if (usuario == "jorgeme743@gmail.com" && clave == "pruebatecnica1234") {
         const datos = {
            id: 1,
            nombre:"jorge meriño",
            email:"jorgeme743@gmail.com",
            codigo: "JIDJOIWJDOIJ-KJ"
         };
         res.status(200).json(datos);
    } else {
        res.status(400).send("Error en credenciales intente más tarde");
    }
});

backapp.get("/usuarios/perfil", (req, res) => {
    const datos = [
        {id:1, cliente:"Empresa 1", total:2500, fecha:"2023-15-06"},
        {id:2, cliente:"Empresa 2", total:1500, fecha:"2023-18-06"},
        {id:3, cliente:"Empresa 3", total:500, fecha:"2023-25-06"},
        {id:4, cliente:"Empresa 4", total:400, fecha:"2023-30-06"}
    ];
    res.json(datos);
});

backapp.listen(5174, () => {
    console.log("Servidor iniciado en el puerto 5174");
})