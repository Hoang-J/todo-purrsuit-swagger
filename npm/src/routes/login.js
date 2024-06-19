// Creating the API Model
// Data is stored inside a model which is then shown in the documentation page
// Swagger expects you to have and define models

// Contains a tag which gives it an organizational design (color coded based on the endpoint)
// Has a section that gives examples of different status codes
/**
 * @swagger
 * tags:
 *   name: Login 
 *   description: Users can get a list of all the accounts currently on the database as well as create a new account
 * /login:
 *   get:
 *     summary: Returns a list of users or a response depending on whether the login information is correct or exists.
 *     tags: [Login]
 *     parameters:
 *      - in: query
 *        name: username
 *        schema:
 *          type: string
 *        required: false
 *        description: Username associated with the account
 *      - in: query
 *        name: password
 *        schema: 
 *          type: string
 *        required: false
 *        description: Password associated with the account
 *     responses:
 *       200:
 *         description: Displays a list of current accounts stored in a database. If query params are included, a response will be sent back to the user
 *         content:
 *           application/json: 
 *             schema: 
 *              type: array
 *              items: 
 *               type: object
 *               properties:
 *                  id:
 *                    type: integer
 *                  email:
 *                    type: string
 *                  password:
 *                    type: string
 *                  username:
 *                    type: string
 *                  firstname:
 *                    type: string
 *                  lastname:
 *                    type: string
 *       400:
 *         description: Request body is not permitted at this endpoint OR Query parameters do not meet the requirements length 


 *                 
 * /register:
 *   post:
 *     summary: Create a new account
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json: 
 *         schema: 
 *           type: object
 *           properties:
 *              firstname:
 *                  type: string
 *              lastname:
 *                  type: string
 *              email:
 *                  type: string
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User was successfully registered OR account already exists
 *       400:
 *         description: Query not permitted at this endpoint
*/
