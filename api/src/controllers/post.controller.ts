import { Request, Response } from 'express';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

export class PostController {
    constructor(private postService: PostService) {}

    getAllPosts(req: Request, res: Response): void {
        const posts = this.postService.getAllPosts();
        res.json(posts);
    }

    addPost(req: Request, res: Response): void {
        const { title, content } = req.body;
        const newPost: Post = {
            id: Date.now(),
            title,
            content,
        };

        this.postService.addPost(newPost);
        res.json(newPost);
    }
}
