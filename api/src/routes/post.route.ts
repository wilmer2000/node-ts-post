import express from 'express';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import { PostRepository } from '../repositories/post.repository';

const postRepository = new PostRepository();
const postService = new PostService(postRepository);
const postController = new PostController(postService);

const router = express.Router();

router.get('/posts', postController.getAllPosts.bind(postController));
router.post('/posts', postController.addPost.bind(postController));

export default router;
