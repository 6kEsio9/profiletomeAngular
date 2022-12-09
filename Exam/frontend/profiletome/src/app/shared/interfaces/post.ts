export interface IPost {
    _id: string;
    imageUrl: string;
    caption: string;
    owner: string;
    likedUsers: string[]
}