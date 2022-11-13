const { Router } = require('express')
const usersRoutes = require('./users/users.routes.js')
const eventsRouter = require('./eventos/eventos.routes.js')

const router = Router()

router.use('/user', usersRoutes)
router.use('/events', eventsRouter)

//User Schema
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name: 
 *          type: string
 *          description: The users name
 *        lastname:
 *          type: string
 *          description: The user lastname
 *        email:
 *          type: string
 *          description: The user email
 *        password:
 *          type: string
 *          description: The user password(will be encrypted)
 *        role:
 *          type: number
 *          description: role 1 (READ), role 2 (CRUD)
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: Lionel  
 *        lastname: Messi
 *        email: messi@messi.com
 *        password: messi
 *        role: 1
 * 
 *    Events:
 *      type: object
 *      properties:
 *        publisher_id: 
 *          type: string
 *          description: The publisher_id
 *        title:
 *          type: string
 *          description: The event name
 *        category:
 *          type: string
 *          description: The event category
 *        description:
 *          type: string
 *          description: The event description
 *        image:
 *          type: number
 *          description: Images of the event
 *        day:
 *          type: date  
 *          description: Day when event starts
 *      required:
 *        - publisher_id
 *        - title
 *        - category
 *      example:
 *        publisher_id: 'j2ghd64lsk82js72'
 *        title: 'Messi Juega'
 *        category: 'Mundial'
 *        description: 'El primer partido de Argentina en el mundial, vamo messi!'
 *        image: 'https://messimessimessimessimessi.com'
 *        day: '2022-11-11T14:04:00.372Z'
 *      
 *        
 */

/**  
*    @swagger
    /user/signup:
 *  post:
 *    summary: Crear usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *            example:
 *              name: "lionel"
 *              lastname: "messi"
 *              email: "messi@email.com"
 *              password: "messidiez"
 *              role: 1
 *    responses:
 *      201:
 *        description: User Registered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: messi@email.com
 *                isAdmin:
 *                  type: string
 *                  description: The user is Admin?
 *                  example: false 
 * 
 *      200:
 *        description: User logged
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: messi@email.com
 *                isAdmin:
 *                  type: boolean
 *                  description: The user is Admin?
 *                  example: false
 *                accessToken:
 *                  type: string
 *                  description: token of jwt (is lacking implementation)
 *                  example: asdetgasd1iwnasdfoije-sdliwan
 *      400:
 *        description: Invalid Password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Invalid Password
 *      404:
 *        description: Email Not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Email not found
*/

/**  
*    @swagger
    /user/signin:
 *  post:
 *    summary: Logear usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *            example:
 *              email: "messi@email.com"
 *              password: "messidiez"
 *    responses:
 *      201:
 *        description: User Registered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: messi@email.com
 *                isAdmin:
 *                  type: string
 *                  description: The user is Admin?
 *                  example: false 
 * 
 *      200:
 *        description: User logged
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: messi@email.com
 *                isAdmin:
 *                  type: boolean
 *                  description: The user is Admin?
 *                  example: false
 *                accessToken:
 *                  type: string
 *                  description: token of jwt (is lacking implementation)
 *                  example: asdetgasd1iwnasdfoije-sdliwan
 *      400:
 *        description: Invalid Password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Invalid Password
 *      404:
 *        description: Email Not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Email not found
 */

module.exports = router