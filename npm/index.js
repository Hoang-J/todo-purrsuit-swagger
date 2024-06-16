
const express = require("express")
const app = express()
bodyParser = require("body-parser")

// using package managers to help set up swagger
swaggerUi = require("swagger-ui-express")


swaggerJsdoc = require("swagger-jsdoc")



app.get('/', function (req, res) {
  res.send('Swagger Documentation for Todo Purrsuit API')
})

app.get('/api-docs', function (req, res) {

  // Using Swagger's Open Source Specification to set up documentation page (provided by Swagger)
  const options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "LogRocket Express API with Swagger",
          version: "0.1.0",
          description:
            "This is a simple CRUD API application made with Express and documented with Swagger",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "LogRocket",
            url: "https://logrocket.com",
            email: "info@email.com",
          },
        },
        servers: [
          {
            url: "https://todo-purrsuit-backend.vercel.app",
          },
        ],
      },
      apis: ["./routes/*.js"],
    };
    
    const specs = swaggerJsdoc(options);
    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(specs)
    );
})


  
app.listen('https://todo-purrsuit-swagger.vercel.app', 
    // console.log("Running on Port 3000")
)