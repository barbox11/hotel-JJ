// const mysql = require('mysql');
// const express = require('express');

// const app = express();
// const port = 3000;



// // Configura la conexión a la base de datos
// //const connection = mysql.createConnection({
//     //host: '127.0.0.1' ,
//     //user: 'root',
//    // password: '',
//     //database: 'hotel'
// //});

// //connection.connect(function(err){
//    // if(err){
//        // throw err;
//    // }else{
//        // console.log("conexon exitosa");
//     //}
// //});
// app.set ("view engine","ejs");


// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.get("/index.ejs", function(req,res){
//     res.render("index");
// });

// app.post("/validar", function(req,res){
//     const datos = req.body;

//     console.log(datos);
// })


// // Inicia el servidor
// app.listen(3000, function(){
//     console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
// });
// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Configuración para servir archivos estáticos
// app.use(express.static('public'));
// app.set('views', path.join(__dirname, 'views'));
// // Configuración de MySQL
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'hotel'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to database: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// // Middleware para parsear bodies JSON
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.ejs');
//     });

// // Ruta para manejar el formulario de registro
// app.post('/validar', (req, res) => {
//     const { nombre, email, contrasena } = req.body;
//     const INSERT_USER_QUERY = `INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)`;
//     connection.query(INSERT_USER_QUERY, [nombre, email, contrasena], (err, results) => {
//         if (err) {
//             console.error('Error al insertar usuario: ' + err.stack);
//             res.status(500).send('Error al registrar usuario');
//             return;
//         }
//         console.log('Usuario registrado correctamente');
//     res.redirect('/'); // Redirige a la página principal
//     });
// });

// // Iniciar servidor
// app.listen(3000, function(){
//         console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
//     });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.forms_form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('/validar', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show the response from the server
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


