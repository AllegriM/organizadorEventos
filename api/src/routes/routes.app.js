const { Router } = require('express')
const usersRoutes = require('./users/users.routes.js')
const eventsRouter = require('./eventos/eventos.routes.js')
const favoritesRouter = require('./favorites/favorites.routes.js')

const router = Router()

router.use('/user', usersRoutes)
router.use('/events', eventsRouter)
router.use('/favorites', favoritesRouter)

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
 *        description: User created succesfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 user: 
 *                   type: object
 *                   description: An object with all the user info
 *                   example:
 *                       _id: "6373a4e619e83b292f03eb50"
 *                       name: "hola"
 *                       role: 1
 *                       email: "hola@gmail.com"
 *                       password: "$2b$10$g8PRS8gHq2A3S3.Z7KsCK.R09nZKsm/b7fS.J8ILweAx58vB8G4KG"
 *                       favoriteEvents": []
 *                       createdAt: "2022-11-15T14:40:38.466Z"
 *                       updatedAt: "2022-11-15T14:40:38.466Z"
 *                 message: 
 *                   type: string
 *                   description: Proccess response
 *                   example: User created succesfully
 *
 *                   
 *                
 * 
 *      409:
 *        description: User email already exists
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  User email already exists
 *      404:
 *        description: Invalid role number
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Invalid role number
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
 *      200:
 *        description: User logged
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  description: An object with all the user info
 *                  example: 
 *                       _id: 63726e791dc222150f39626a
 *                       name: "userAdmin"
 *                       role: 2
 *                       email: "userAdmin@gmail.com"
 *                       password: "$2b$10$qGjiNn1q2xOf.37F4moy4ejYquj6c1Vb.e0H75oFTa4YGew7bIC0q"
 *                       favoriteEvents: Array
 *                       createdAt: 2022-11-14T16:36:09.637+00:00
 *                       updatedAt: 2022-11-14T16:36:09.637+00:00
 *                token:
 *                  type: string
 *                  description: An encrypted token
 *                  example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzJhOWU2ZmU2YzQ4OTMyMzhmNzRmOCIsImlhdCI6MTY2ODUyMzAzNCwiZXhwIjoxNjY4NjA5NDM0fQ.5RQ5RdaGrn0gH5ZuVU3f-0odiUsIwJf-7vK9xtAmYG
 *      401:
 *        description: Invalid Email
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  User not found
 *      404:
 *        description: Invalid password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Invalid password
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