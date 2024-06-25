# NX-Microservices-Nest-RabbitMQ School project

This project simulates a web-programming school backend system.
It totally works as real online-courses API as well as perfectly dedicated, reliable and easy-to-use application.

## Technologies I've used here

During development process, I've used several back-end JS technologies:

- _Nest.js_, probably - the Best back-end framework on JavaScript;
- _Typescript_ as basic straight-typized programming language for development;
- _Rabbit MQ_ to create connection and swap data between separated microservices;
- _Mongo DB_ as well-structured and safety NoSQL database;
- _Docker_ for quickly containerizing the application.

## How to use

1. First of all, you should install all dependencies on the way to run project on your PC.
   Just run _npm ci_

2. Create a demo .env file, and put some data into:
   | Variable | Description | Example Value |
   |-----------------|------------------------------|--------------------------------|
   | `MONGODB_URL` | URL to connect to MongoDB | `mongodb://localhost:27017/school` |
   | `JWT_SECRET` | Secret key for JWT | `supersecretkey` |
   | `AMQP_EXCHANGE` | RabbitMQ exchange name | `school_exchange` |
   | `AMQP_USER` | RabbitMQ username | `guest` |
   | `AMQP_PASSWORD` | RabbitMQ password | `guest` |
   | `AMQP_QUEUE` | RabbitMQ queue name | `school_queue` |
   | `AMQP_HOSTNAME` | RabbitMQ hostname | `localhost` |

3. Run _docker_ in the root dir of project:
   `docker-compose up -d`

4. Start server with several microservices:
   `nx run-many --target=serve --all --parallel=10`

Enjoy!
