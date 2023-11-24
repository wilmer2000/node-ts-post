import { Post } from '../models/post.model';

export class PostRepository {
    private posts: Post[] = [];

    getAllPosts(): Post[] {
        return this.posts;
    }

    addPost(post: Post): void {
        this.posts.push(post);
    }
}
