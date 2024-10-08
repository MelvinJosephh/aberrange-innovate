export interface Post {
    title: string;
    permalink: string;
    category: {
        categoryId: string;
        category: string;
    },
    postImgPath: string;
    excerpt: string;
    content: string;
    isFeatured: boolean;
    views: number;
    status: string;
    createdAt: any;
}

export interface PostWithId {
    id: string;
    data: Post;
}
