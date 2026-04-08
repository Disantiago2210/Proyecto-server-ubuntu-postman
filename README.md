# Mi API REST de Usuarios
## Instalación
```
git clone <url-del-repo>
cd mi-api
npm install
```
## Ejecución
```
node index.js
```
## Autenticación
Todas las peticiones requieren el header:
```
x-api-key: 123456
```
## Endpoints
| Método | Ruta | Descripción |
|---------|-------------------|---------------------------|
| GET | /usuarios | Listar todos |
| GET | /usuarios/:id | Obtener uno por ID |
| POST | /usuarios | Crear usuario |
| PUT | /usuarios/:id | Actualizar usuario |
| DELETE | /usuarios/:id | Eliminar usuario |
| GET | /usuarios?rol=X | Filtrar por rol |

## link imagenes de funcion del servidor

https://github.com/Disantiago2210/Proyecto-server-ubuntu-postman/issues/1#issue-4226180011

