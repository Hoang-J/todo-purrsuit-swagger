// Creating the API Model
// Data is stored inside a model which is then shown in the documentation page
// Swagger expects you to have and define models


// Contains a tag which gives it an organizational design (color coded based on the endpoint)
// Has a section that gives examples of different status codes
/**
 * @swagger
 * tags:
 *   name: Scoreboard Server
 *   description: Get a list of scores, create a new score for a new player, update a current player's scores, and      delete a player's score
 * /score:
 *   get:
 *     summary: Lists all the players and their scores
 *     tags: [Scoreboard Server]
 *     parameters:
 *      - in: path
 *        name: playerid
 *        schema:
 *          type: string
 *        required: false
 *        description: ID associated with the player, the assigned number of the player
 *      - in: path
 *        name: username
 *        schema:
 *          type: string
 *        required: false
 *        description: Username associated with the player
 *      - in: path
 *        name: score
 *        schema:
 *          type: number
 *        required: false
 *        description: Score associated with the player, player point total based on levels completed in-game
 * 
 *     responses:
 *       200:
 *         description: The player and their score
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new entry on the leaderboard for a new player and/or score
 *     tags: [Scoreboard Server]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The name of the new player and their current score in the game
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /score/:username:
 *   patch:
 *    summary: Update the player's score
 *    tags: [Scoreboard Server]
 *    parameters:
 *      - in: path
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *        description: The username of the player
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Scoreboard Server]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

