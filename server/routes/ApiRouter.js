import express from 'express';
import { getAllCategories } from '../api/getAllCategories.js';
import { getFeaturedCategories } from '../api/getFeaturedCategories.js';
import { getAllMovies } from '../api/getAllMovies.js';
import { getMovieBySlug } from '../api/getMovieBySlug.js';
import { getMoviesByCategory } from '../api/getMoviesByCategory.js';
<<<<<<< HEAD
import { postRegister } from '../api/postRegister.js';
=======
>>>>>>> 84f93c1fd2e3061968912500fc39751ab82b297c

export const apiRouter = express.Router();

apiRouter.post('/register', postRegister);

apiRouter.get('/categories', getAllCategories);
apiRouter.get('/categories/featured', getFeaturedCategories);

apiRouter.get('/movies', getAllMovies);
apiRouter.get('/movies/:slug', getMovieBySlug);

apiRouter.get('/movies-by-category/:slug', getMoviesByCategory);

apiRouter.all('*error', (req, res) => {
    return res.status(404).json({
        status: 'error',
        msg: 'No such API route exists',
    })
});