
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
      openapi: "3.0.0",
      info: {
        title: "Todo Purrsuit API Documentation",
        version: "1.0.0",
        description:
          "This website created with Swagger, provides documentation for the Todo Purrsuit API we created.",
        license: {
          name: "License: MIT",
          url: "https://spdx.org/licenses/MIT.html",
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

