[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QBnwEJ5z)

# DOCUMENTACION DEL TP ESTRATEGIA DE PERSISTENCIA

Este es un proyecto realizado por el Equipo PersistenciaCafe24. Los integrantes son los siguiente:
  - Castro, Sebastian Alexis
  - Uriona, Lautaro Leonel
  - Villafañe, Carlos Javier
  - Muñoz, Fernando Ezequiel
  - Gareca Gavilán, Walter Aurelio
  - Amaya, Alan Ezequiel

# Iniciar el proyecto

Una vez que lo clona en su repositorio local, lo que se debe hacer es posicionarse en el directorio del proyecto y ejecutar los siguientes comandos

`npm i`                De esta forma primero instalará todos los recursos que se utilizarán

`docker-compuse up`    Con este comando va a levantar la herramienta Docker

Espera hasta que Docker termine de iniciar

Abre una nueva termina

`npm start`            Para iniciar el proyecto

El proyecto le notificará una vez el proyecto haya hecho la conexión exitosa con Docker Compose y estará listo para ser utilizado. La dirección en la que se abrirá el proyecto es en:

https://localhost:3000

# Lista de Endpoints

| Verbo  | Recurso                    | Status code   | Descripción                                           |
| ------ | -------------------------- | ------------- | ----------------------------------------------------- |
| GET    | /productos                 | 200           | Obtener todos los productos                           |
| GET    | /productos/:id             | 200, 404      | Obtener un producto en particular                     |
| POST   | /productos                 | 201, 400      | Crear un producto                                     |
| PUT    | /productos/:id             | 200, 404      | Modificar los datos de un producto en particular      |
| DELETE | /productos/:id             | 200, 404, 500 | Borrar un producto en particular                      |
| POST   | /productos/:id/fabricantes | 201, 404, 400 | Crea la asociación de 1 producto a N fabricantes      | 
| GET    | /productos/:id/fabricantes | 200, 404      | Obtener todos los fabricantes de un producto          |
| POST   | /productos/:id/componentes | 201, 404, 400 | Crear la asociación de 1 producto a N componentes     |
| GET    | /productos/:id/componentes | 200, 404      | Obtener todos los componentes de un producto          |
| GET    | /fabricantes               | 200           | Obtener todos los fabricantes                         |
| GET    | /fabricantes/:id           | 200, 404      | Obtener un fabricante en particular                   |
| POST   | /fabricantes               | 201, 400      | Crear un fabricante                                   |
| PUT    | /fabricantes/:id           | 200, 404      | Modificar los datos de un fabricante en particular    |
| DELETE | /fabricantes/:id           | 200, 404, 500 | Borrar un fabricante en particular                    |
| GET    | /fabricantes/:id/productos | 200, 404      | Obtener todos los productos de un fabricante          |
| GET    | /componentes               | 200           | Obtener todos los componentes                         |
| GET    | /componentes/:id           | 200, 404      | Obtener un componente en particular                   |
| POST   | /componentes               | 201, 400      | Crear un componente                                   |
| PUT    | /componentes/:id           | 200, 404      | Modificar los datos de un componente en particular    |
| DELETE | /componentes/:id           | 200, 404, 500 | Borrar un componente en particular                    |
| GET    | /componentes/:id/productos | 200, 404      | Obtener todos los productos de un componente          |

# Tipo de enfoque

Cuando desarrollamos el proyecto decidimos con el grupo que ibamos a tomar el enfoque de las Relaciones Referenciadas.
Esto fue porque se nos iba a facilitar a la hora de hacer tanto los endpoints y cuando teníamos que modelar los Schemas.

Sin embargo, para los productos y componentes elegimos la relación por incrustación, ya que un producto real puede contener N componentes dentro de él. Es decir, tomamos esta decisión para reflejar lo que ocurre en la vida real.


----
