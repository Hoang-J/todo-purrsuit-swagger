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
 *      - in: query
 *        name: playerid
 *        schema:
 *          type: integer
 *        required: false
 *        description: ID associated with the player, the assigned number of the player
 *      - in: query
 *        name: username
 *        schema:
 *          type: string
 *        required: false
 *        description: Username associated with the player
 *      - in: query
 *        name: score
 *        schema:
 *          type: integer
 *        required: false
 *        description: Score associated with the player, player point total based on levels completed in-game
 * 
 *     responses:
 *       200:
 *         description: A list of the different usernames along with their playerids, and scores will be displayed OR specific information will be shown base on a specific query request
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items: 
 *               type: object
 *               properties:
 *                  playerid:
 *                    type: integer
 *                  username:
 *                    type: string
 *                  score:
 *                    type: integer
 *       400:
 *         description: Request body is not permitted at this endpoint OR Query parameters do not meet requirements OR Query Parameter is NaN

 * 
 *   post:
 *     summary: Create a new entry on the leaderboard for a new player and/or score
 *     tags: [Scoreboard Server]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json: 
 *         schema: 
 *           type: object
 *           properties:
 *              username:
 *                  type: string
 *              score:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Player was successfully added
 *       400:
 *         description: Invalid body parameters

 * /score/{username}:
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
 *         schema: 
 *           type: object
 *           properties:
 *              username:
 *                  type: string
 *              score:
 *                  type: integer
 *    responses:
 *      200:
 *        description: The player's username AND/OR score was updated
 *        content:
 *        application/json: 
 *         schema: 
 *           type: object
 *           properties:
 *              username:
 *                  type: string
 *              score:
 *                  type: integer
 *      404:
 *        description: Invalid body parameters

 *   delete:
 *     summary: Remove the player and their score by username
 *     tags: [Scoreboard Server]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The player's registered username
 *
 *     responses:
 *       200:
 *         description: The player's score was deleted
 *       400:
 *         description: The player's score was not found
 */

