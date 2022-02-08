const { Router } = require('express');

const homeController = require('../controllers/homeController');

const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();


/**
 * @swagger
 * /:
 *     get:
 *         security:
 *           - Bearer: []
 *         summary: root directory
 *         description: home page
 *         
 *         responses:
 *             200:
 *                 description: successful operation       
 * 
 */

router.get('/', homeController.home_get);


/**
 * @swagger
 * /smoothies:
 *     get:
 *         security:
 *           - Bearer: []
 *         summary: smoothies home page
 *         description: smoothies home page
 *         responses:
 *             200:
 *                 description: successful operation
 *                       
 * 
 */
router.get('/smoothies', requireAuth, homeController.smoothies_get);


module.exports = router;