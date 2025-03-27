# Inventory Management Backend

This is the backend for an inventory management system developed using Node.js and MySQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [API Endpoints](#api-endpoints)
- [Postman Collections](#postman-collections)
- [License](#license)

## Features

- CRUD operations for inventory management.
- Event logging for tracking inventory changes.
- RESTful API endpoints for easy integration.

## Prerequisites

Before starting, make sure you meet the following requirements:

- Node.js and npm installed.
- A running MySQL server.
- Git for version control (optional).

### Installation

Clone the repository to your local machine (or download the source code).

```bash
git clone https://github.com/igorariza/nodejs-backend.git
cd nodejs-backend
```

Install the project dependencies:
  
  ```bash 
  npm install
  ```

Configuration
Create a .env file in the root of the project to store your configuration variables. Here is an example:
  
  ```bash
  PORT=8080
  DATABASE=admin
  HOST='127.0.0.1'
  USER=root
  PASSWORD=root
  PORTDB=3306
  ```

Start the Server
Start the Node.js server:
  
    ```bash
    npm run start
    ```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/v1/products/ | Creates a new product. |
| POST | /api/v1/inventarios/ | Creates a new inventory. |
| GET | /api/v1/products/listallproduct | Retrieves all products. |
| GET | /api/v1/bodegas | Retrieves all warehouses. |
| POST | /api/v1/bodegas | Creates a new warehouse. |
| PATCH | /api/v1/bodegas/traslado | Performs an inventory transfer between warehouses. |

## Postman Collections

You can import the Postman collections to test the API endpoints. The collections are located in the file. 

```bash
./BackendNodejs.postman.json
```

