const express = require('express')
const app = express()

require('./models/db');
const clienteRouter = require('./routes/clientes');
const proveedorRouter = require('./routes/proveedor');
const insumoRoutes = require('./routes/insumo');

//seteamos el motor de plantillas ejs
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.use('/', clienteRouter);
app.use('/proveedor', proveedorRouter);
app.use('/insumo', insumoRoutes);
app.listen(4000, ()=>{
    console.log('¡Server UP! en http://localhost:4000')
})

