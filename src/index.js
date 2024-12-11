const express = require('express');
const mongoose = require('mongoose');
const productoRutas = require('./routes/producto.ruta');

const app = express();

//Middleware
app.use(express.json());

//Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/inventario', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log(`Conectado a MongoDB`))
.catch(err => console.error(`Error al conectar a MongoDB:`, err));

//Rutas
app.use('/api/productos', productoRutas);

//Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 