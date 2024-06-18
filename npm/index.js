
const express = require("express")
const app = express()
bodyParser = require("body-parser")

// using package managers to help set up swagger
swaggerUi = require("swagger-ui-express")


swaggerJsdoc = require("swagger-jsdoc")
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

app.get('/', function (req, res) {
  res.send('Swagger Documentation for Todo Purrsuit API')
})

// Using Swagger's Open Source Specification to set up documentation page (provided by Swagger)
const options = {
    definition: {
      openapi: "2.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "1.0.0",
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
    apis: ["src/routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { customCssUrl: CSS_URL })
);


  
app.listen(4242, 
    console.log("Running on Port 4242")
)

