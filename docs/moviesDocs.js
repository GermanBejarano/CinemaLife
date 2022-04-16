/**
 * Create movie
 * @swagger
 * components:
 *    schemas:
 *      Movies:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              description:
 *                  type: text
 *              summary:
 *                  type: text
 *              image:
 *                  type: string
 *              date_publication:
 *                  type: date
 *              active:
 *                  type: boolean
 *          required:
 *              - name
 *              - description
 *              - summary
 *              - image
 *              - date_publication
 *              - active
 *          example:
 *              name: Batman
 *              description: Esto es una prueba
 *              summary: Esto es una prueba
 *              image: https://hips.peliculas.com/image.jpg
 *              date_publication: 1998/04/01
 *              active: true
 * 
 *      Success:
 *          type: object
 *          properties:
 *              state:
 *                  type: boolean
 *              
 */

/**
 * @swagger
 * /api/movies:
 *  post:
 *      summary: Create a new movie record 
 *      tags: [Movies]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: Record created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#/components/schemas/Success'
 */


/**
 * @swagger
 *  /api/movies:
 *  get:
 *      summary: Return all movies 
 *      tags: [Movies]
 *      responses:
 *          200:
 *              description: All movies
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Movies'
 *          404:
 *              description: Error!
 */


/**
 * @swagger
 *  /api/movies/{id}:
 *  get:
 *      summary: Return a movie by id
 *      tags: [Movies]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Movie id
 *      responses:
 *          200:
 *              description: Movie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Movies'
 *          404:
 *              description: Error!
 */


/**
 * @swagger
 *  /api/movies/{id}:
 *  put:
 *      summary: Update a movie record
 *      tags: [Movies]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Movie id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: Update status
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Success'
 *          404:
 *              description: Error!
 */


/**
 * @swagger
 *  /api/movies/{id}:
 *  delete:
 *      summary: delete a movie record
 *      tags: [Movies]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Movie id
 *      responses:
 *          200:
 *              description: Delete status
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Success'
 *          404:
 *              description: Error!
 */