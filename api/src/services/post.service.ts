import { Post } from '../models/post.model';
import { PostRepository } from '../repositories/post.repository';

export class PostService {
    constructor(private postRepository: PostRepository) {}

    getAllPosts(): Post[] {
        return this.postRepository.getAllPosts();
    }

    addPost(post: Post): void {
        this.postRepository.addPost(post);
    }
}
