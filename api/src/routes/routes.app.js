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
 *        publisher_id: '63726e791dc222150f39626a'
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
 *                role:
 *                  type: number
 *                  description: The user is reader or writer and reader?
 *                  example: 1 
 * 
 *      200:
 *        description: User created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: messi@email.com
 *                role:
 *                  type: number
 *                  description: The user is reader or writer and reader?
 *                  example: 1
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

//Event Schema
/**
 * @swagger
 * components:
 *  schemas:
 *    Event:
 *      type: object
 *      properties:
 *        publisher_id:
 *          type: string
 *          description: the id of the event creator
 *        title:
 *          type: string
 *          description: the title of the event
 *        description:
 *          type: string
 *          description: the infomation about the event
 *        category:
 *          type: string
 *          description: the cateogry of the event
 *        image:
 *          type: string
 *          description: the image/images of the event
 *        day:
 *          type: string
 *          description: the day the event will take of
 *      required: 
 *        - title
 *        - category
 *        - published_id
 *        - description
 *        - day
 *      example:
 *        publisher_id: 63726e791dc222150f39626a
 *        title: OctoberFest
 *        description: Oktoberfest is the world's largest beer celebration and typically draws over six million visitors over its three-week run.
 *        category: Bar
 *        image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *        day: 17 de sept de 2022 – 3 de oct de 2022
 */

//get all Events
/**
 * @swagger
 * /events:
 *  get:
 *    summary: Return all events
 *    tags: [Event]
 *    responses:
 *      200:
 *        description: All Events
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *              example:
 *                -
 *                    publiser_id: 63726e791dc222150f39626a
 *                    title: OctoberFest
 *                    category: Bar
 *                    description: A celebration where beer is everywhere
 *                    image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *                    day: 17 de sept de 2022 – 3 de oct de 2022
 *                -
 *                    publiser_id: 63726e791dc222150f39626a
 *                    title: OctoberFest
 *                    category: Bar
 *                    description: A celebration where beer is everywhere
 *                    image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *                    day: 17 de sept de 2022 – 3 de oct de 2022
 */

//view Event
/**
 * @swagger
 * /events/{id}:
 *  get:
 *    summary: Return the event by ID
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        require: true
 *        example: 63726e791dc222150f39626a
 *    responses:
 *      200:
 *        description: Event Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                publiser_id: 63726e791dc222150f39626a
 *                title: OctoberFest
 *                category: Bar
 *                description: A celebration where beer is everywhere
 *                image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *                day: 17 de sept de 2022 – 3 de oct de 2022
 *      400:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example: "Event dont exists, provide a valid id!"
 */
//Event create
/**
 * @swagger
 * /events:
 *  post:
 *    summary: Create a new event
 *    tags: [Event]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Event'
 *    responses:
 *      201:
 *        description: Event Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              ref: '#/components/schema/Event'
 *            example:
 *              publiser_id: 63726e791dc222150f39626a
 *              title: OctoberFest
 *              category: Bar
 *              description: A celebration where beer is everywhere
 *              image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *              day: 17 de sept de 2022 – 3 de oct de 2022
 */

//Event edit
/**
 * @swagger
 * /events/{id}:
 *  put:
 *    summary: Edit the event
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        require: true
 *        example: 63726e791dc222150f39626a
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Event'
 *    responses:
 *      204:
 *        description: Event modified
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              ref: '#/components/schema/Event'
 *            example:
 *              publiser_id: 63726e791dc222150f39626a
 *              title: OctoberFest
 *              category: Bar
 *              description: A celebration where beer is everywhere
 *              image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNchXim5v62oDOyzwlw_OTGfJGek8x5IP3dRTQGgmzFtVOouyKA-3EKbBY8sxvpu--g&usqp=CAU
 *              day: 17 de sept de 2022 – 3 de oct de 2022
 *      400:
 *        description: Event Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example: You don't have permission to update this event as it is not yours.
 *      401:
 *        description: Event Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example: You are not authorized to update this event
 */

//Event delete
/**
 * @swagger
 * /events/{id}:
 *  delete:
 *    summary: Delete the event
 *    tags: [Event]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        require: true
 *        example: 63726e791dc222150f39626a
 *    responses:
 *      204:
 *        description: Event Deleted Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Event deleted successfully
 *      400:
 *        description: Event Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Provide a valid id, id must be 24 characters long
 *      404:
 *        description: Event Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Event not found
 *      401:
 *        description: Event Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  You are not authorized to delete this event
 */

module.exports = router