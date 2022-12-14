const router = require('express').Router();

const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');

const { isAuth } = require('./middlewares/authMiddleware.js');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.get('/posts/:id', postController.getOnePost);
router.get('/posts', postController.getPosts);
router.get('/friend/:userId/:friendId', isAuth, userController.addFriend);
router.get('/posts/like/:userId/:postId', isAuth, postController.likePost)

router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.post('/posts/create', isAuth, postController.createPost);

router.put('/posts/edit/:id', isAuth, postController.editPost);
router.delete('/posts/delete/:id', isAuth, postController.deletePost);

module.exports = router;