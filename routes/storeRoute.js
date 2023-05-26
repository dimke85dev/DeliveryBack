import { Router } from 'express';
import { getAllStores } from '../controllers/storeController.js';

const storeRouter = new Router();

//Create Post
//api/posts/
// storeRouter.post('/', checkAuth, createPost);

//Get All Posts
//api/posts/
storeRouter.get('/', getAllStores);

//Get Post By Id
//api/posts/:id
// storeRouter.get('/:id', getPostById);

//Get My Posts
//api/posts/user/me
// storeRouter.get('/user/me', checkAuth, getMyPosts);

//Remove Post
//api/posts/:id
// storeRouter.delete('/:id', checkAuth, removePost);

//Update Post
//api/posts/:id
// storeRouter.put('/:id', checkAuth, updatePost);

//Get Post Comments
//api/posts/comments/:id
// storeRouter.get('/comments/:id', getPostComments);

export default storeRouter;
