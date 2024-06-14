const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "*",
}
app.use(cors(corsOptions))

const router = express.Router();


// Iniciar sesión
router.post('/login', async (req, res) => {
    try {
        const { nomusu, password } = req.body;
        const respuesta = await ModelUser.findOne({ nomusu, password });

        if (respuesta) {
            res.send('Autenticacón Satisfactoria');
        } else {
            res.status(401).send('Error en la auenticación');
        }
    } catch (error) {
        res.status(500).send('Error en la auenticación');
    }
});

//Create
router.post('/', async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//Consultar
router.get('/', async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})

//Consultar por ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
})

//Actualizar
router.put('/:id', async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
})

//Eliminar
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})


app.use(express.json());
app.use(router);
app.listen(3005, ()=>{
    console.log("El servidor está conectado en el puerto 3005")
})

dbconnect();

