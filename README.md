# Back-End Kuepa

## Realizado por: William Ricardo Enciso Bautista

Realizado en:

- ✨NodeJs
- Express
- Socket.IO
- MongoDB

## Instalación

- Genere una copia del respositorio
- Instale las dependencias con

```sh
cd Kuepa-Back
npm i
```

- Ingrese a la URL http://localhost:3000
- Haga uso de la aplicación

## EndPoints

- POST
  Create
  http://localhost:3000/api/v1/usuario

```sh
{
    "nombre": "Alan Perez",
    "usuario": "Kuepa01",
    "password": "123456",
    "tipo_usuario": "Estudiante"
}
```

- GET
  Get Usuarios
  http://localhost:3000/api/v1/usuario
- POST
  SigIn
  http://localhost:3000/api/v1/auth

```sh
{
    "usuario": "PLATYPUSCO",
    "password": "12345"
}
```

- POST
  Save Message
  http://localhost:3000/api/v1/mensaje

```sh
{
    "username": "64435af505669cc502883beb",
    "message": "Hola como estas?"
}
```

- GET
  Get Messages
  http://localhost:3000/api/v1/mensaje
