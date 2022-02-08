const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();


/** 
 * @swagger
 * components:
 *     
 *     schemas:
 *         User:
 *             type: object
 *             required:
 *                 - email
 *                 - password
 *             properties:
 *                 id:
 *                     type: integer
 *                     description: The auto-generated id of the author.
 *                 email:
 *                     type: string
 *                     description: Email of a registered user.
 *                 password:
 *                     type: string
 *                     description: password of a registered user.
 *    
 *     
 */    

/**
 * @swagger
 * tags:
 *     name: Users Registration And Login
 *     description: Users registration and Users login.
 */


/**
 * @swagger
 * /signup:
 *     get:
 *         security:
 *           - Bearer: []
 *         summary: sign up form
 *         description: sign up page
 *         tags: [Users Registration And Login]
 *         responses:
 *             200:
 *                 description: successful operation
 *                 content:
 *                     application/json:
 *                         schemas:
 *                             $ref: '#/components/schemas/User'
 *                               
 *                     application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *             404: 
 *                 description: page not found       
 * 
 */
router.get('/signup', authController.signup_get);

/**
 * @swagger
 * /signup:
 *     post:
 *         summary: Creating a new user
 *         description: post request to register a new user
 *         tags: [Users Registration and login]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         
 *                         $ref: '#/components/schemas/User'
 *                 application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *         responses:
 *             200:
 *                 description: successful operation
 *                 content:
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *                     application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *             404: 
 *                 description: User Not Found        
 * 
 */
router.post('/signup', authController.signup_post);

/**
 * @swagger
 * /login:
 *     get:
 *         security:
 *           - Bearer: []
 *         summary: logout user from the database
 *         description: request users logout
 *         tags: [Users]
 *         responses:
 *             200:
 *                 description: successful operation
 *                 content:
 *                     application/json:
 *                         schemas:
 *                             $ref: '#/components/schemas/User'
 *                               
 *                     application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *             404: 
 *                 description: User not found        
 * 
 */

router.get('/login', authController.login_get);

/**
 * @swagger
 * /login:
 *     post:
 *         summary: login to an existing users account
 *         description: post request to login an existing user
 *         tags: [Users Registration And Login]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         $ref: '#/components/schemas/User'
 *                 application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *         responses:
 *             200:
 *                 description: successful operation
 *                 content:
 *                     application/xml:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/User'
 *             400: 
 *                 description: Invalid User Email and Password        
 * 
 */

router.post('/login', authController.login_post);

/**
 * @swagger
 * /logout:
 *     get:
 *         security:
 *           - Bearer: []
 *         summary: logout user from the database
 *         description: request users logout
 *         tags: [Users]
 *         responses:
 *             200:
 *                 description: successful operation
 *                 content:
 *                     application/json:
 *                         schemas:
 *                             $ref: '#/components/schemas/User'
 *                               
 *                            
 * 
 */
router.get('/logout', authController.logout_get);

module.exports = router;