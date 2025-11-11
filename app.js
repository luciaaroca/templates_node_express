//Lo que tenga * tiene que ver con pug

const express = require("express"); // Importando express
const cowsay = require("cowsay");
const error404 = require("./middlewares/error404");

const app = express(); // Creando el servidor
const port = 3000; // Puerto de pruebas


//******Configurar PUG como motor de vistas**********
app.set('view engine', 'pug');
app.set('views','./views');
//************************************************** 

// Habilitar recepción de JSON por mi backend
// Parsear el body entrante a JSON
app.use(express.json());

//Visualizar archivos estatico de public***************
app.use(express.static('public')); // Para servir archivos estáticos del front CSS, JS, assets
//*******************************************************


//Rutas WEB******************************
const pagesWebRoutes = require("./routes/pages.routes");
app.use('/',pagesWebRoutes);
//*******************************************************


//******************ENDPOINTS DE EJEMPLO************************
// GET http://localhost:3000/
/*app.get("/", (req, res) => {
  res.send("Hello World!");
});

// http://localhost:3000/first_template
app.get('/first_template', function(req, res){
  res.render('first_view.pug');
});

app.get('/dynamic_view', function(req, res){
  res.render('dynamic.pug', {
     name: "The Bridge of Torre Picasso", 
     url:"https://thebridge.tech/"
  });
});

// Habilitar ruta about
app.get('/about', function(req, res){
  res.render('about');
});*/
//*******************************************************


app.use(error404); // Manejo de rutas no encontradas

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "owl", // Use the owl ASCII art // owl
    })
  );
});

module.exports = app; // Exportar la app para usarla en tests
