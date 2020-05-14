const PackageController = require("./controllers/PackageController");

module.exports.setup = function(app) {
    /**
 * @swagger
 *
 * definitions:
 *   DeliveryPart:
 *     type: object
 *     required:
 *       - lat
 *       - lng
 *       - phone
 *       - firstName
 *       - lastName
 *       - address
 *     properties:
 *       lat:
 *         type: number
 *       lng:
 *         type: number
 *       phone:
 *         type: string
 *       firstName:
 *         type: string 
 *       lastName:
 *         type: string
 *       address:
 *         type: string
 */

    /**
     * @swagger
     *
     * /packages:
     *   post:
     *     description: Creates a new package delivery order
     *     parameters:
     *       - name: sender
     *         in: body
     *         description: Sender details
     *         required: true
     *         type: string
     *         schema:
     *          $ref: '#/definitions/DeliveryPart'
     *       - name: receiver
     *         in: body
     *         description: Receiver details details
     *         required: true
     *         type: string
     *         schema:
     *          $ref: '#/definitions/DeliveryPart'
     */
    app.post("/packages", PackageController.create);

    /**
     * @swagger
     *
     * /packages:
     *   get:
     *     description: Retrieves all the packages deliveries in the system
     *     produces:
     *       - application/json
     */
    app.get("/packages", PackageController.retrive);

    /**
     * @swagger
     *
     * /packages:
     *   delete:
     *     description: Deletes a package delivery order in the system
     *   parameters:
     *       - name: _id
     *         in: body
     *         description: Order id to delete
     *         type: string
     */
    app.delete("/packages", PackageController.delete);

    /**
     * @swagger
     *
     * /best-delivery:
     *   post:
     *     description: Returns the best delivery that the runner should be picket up, given a runner's position
     *   parameters:
     *       - name: lat
     *         in: body
     *         description: Runner's latitude coordinate
     *         type: number
     *       - name: lng
     *         in: body
     *         description: Runner's longitude coordinate
     *         type: number
     */
    app.post("/best-delivery", PackageController.retriveBestDelivery);
}