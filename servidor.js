const net = require('net');

const server = net.createServer(function (connection) {
    
    connection.on('data', function(data){
        console.log('Cliente conectado ' + data);
        var data2 = data.toString();
        datos = data2.split('/', 2);
        switch(datos[0]) {
            case 'dcopalupe':
              if(datos[1]=='123456')
              {
                connection.write('Bienvenido Dan Israel Copa Lupe!!!!!');
                connection.end();
              }
              else 
              {
                connection.write('La contraseña para ' + datos[0]+ ' es incorrecta');
                connection.write('Ingrese usuario y contraseña (user/pass)');  
              }
            break;

            case 'jalanocaquino':
                if(datos[1]=='1q2w3e4')
                {
                    connection.write('Bienvenido Jorge Andres Alanoca Quino!!!!!');
                    connection.end();
                }
                else 
                {
                    connection.write('La contraseña para ' + datos[0]+ ' es incorrecta');
                    connection.write('Ingrese usuario y contraseña (user/pass)');  
                }
            break;

            case 'jacondoriquispe':
                if(datos[1]=='54321')
                {
                    connection.write('Bienvenido Ana Condori Quispe!!!!!');
                    connection.end();
                }
                else 
                {
                    connection.write('La contraseña para ' + datos[0]+ ' es incorrecta');
                    connection.write('Ingrese usuario y contraseña (user/pass)');  
                }
            break;

            default:
                connection.write('El usuario ' + datos[0]+ ' es incorrecto o no existe');
                connection.write('Ingrese usuario y contraseña (user/pass)');  
        }              
               
    });
});

server.listen(7000, function () {
    console.log('Servidor corriendo en puerto 7000');
});