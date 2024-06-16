// Creating the API Model
// Data is stored inside a model which is then shown in the documentation page
// Swagger expects you to have and define models


// Contains a tag which gives it an organizational design (color coded based on the endpoint)
// Has a section that gives examples of different status codes
/**
 * @swagger
 * tags:
 *   name: Login Server
 *   description: Users can get a list of all the accounts currently on the database as well as create a new account
 * /login:
 *   get:
 *     summary: Returns a list of users and their information
 *     tags: [Login Server]
 *     parameters:
 *      - in: path
 *        name: username
 *        schema:
 *          type: string
 *        required: false
 *        description: Username associated with the account
 *      - in: path
 *        name: password
 *        schema: 
 *          type: string
 *        required: false
 *        description: Password associated with the account
 *     responses:
 *       200:
 *         description: Displays a list of current accounts stored in a database.
 *         content:
 *           application/json: 
 *             schema: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 * /register:
 *   post:
 *     summary: Create a new account
 *     tags: [Login Server]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Account has been successfully added into the database.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error

*/
