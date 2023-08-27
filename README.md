# Backend para Gestión de Inventario

Este es el backend para un sistema de gestión de inventario desarrollado utilizando Node.js y MySQL.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Puntos de Acceso de la API](#puntos-de-acceso-de-la-api)
- [Colecciones de Postman](#colecciones-de-postman)
- [Licencia](#licencia)

## Características

- Operaciones CRUD para la gestión de elementos de inventario.
- Registro de eventos para seguimiento de cambios en el inventario.
- Puntos de acceso de API RESTful para una fácil integración.

## Requisitos Previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Tener Node.js y npm instalados.
- Tener un servidor MySQL instalado y en funcionamiento.
- Git para el control de versiones (opcional).

### Instalación

Clona el repositorio en tu máquina local (o descarga el código fuente).

```bash
git clone https://github.com/igorariza/nodejs-backend.git
cd nodejs-backend
```

Instala las dependencias del proyecto:
  
  ```bash 
  npm install
  ```

Configuración
Crea un archivo .env en la raíz del proyecto para almacenar tus variables de configuración. Aquí tienes un ejemplo:
  
  ```bash
  PORT=8080
  DATABASE=admin
  HOST='127.0.0.1'
  USER=root
  PASSWORD=root
  PORTDB=3306
  ```

Iniciar el Servidor
Inicia el servidor Node.js:
  
    ```bash
    npm run start
    ```

## Puntos de Acceso de la API

| Método | Punto de Acceso | Descripción |
| --- | --- | --- |
| POST | /api/v1/products/ | Crea un nuevo producto. |
| POST | /api/v1/inventarios/ | Crea un nuevo inventario. |
| GET | /api/v1/products/listallproduct | Obtiene todos los productos. |
| GET | /api/v1/bodegas | Obtiene todas las bodegas. |
| POST | /api/v1/bodegas | Crea una nueva bodega. |
| PATCH | /api/v1/bodegas/traslado | Realiza un traslado de inventario entre bodegas. |

## Colecciones de Postman

Puedes importar las colecciones de Postman para probar los puntos de acceso de la API. Las colecciones se encuentran en el archivo. 

```bash
./BackendNodejs.postman.json
```

