export interface PostedBy {
  _id: string;
  image: string;
  userName: string;
}

export interface Comment {
  _key: string;
  comment: string;
  postedBy: PostedBy;
}

export interface Like {
  _key: string;
  _ref: string;
  _type: string;
}

export interface PostedBy2 {
  _id: string;
  image: string;
  userName: string;
}

export interface Asset {
  _id: string;
  url: string;
}

export interface Video {
  asset: Asset;
}

export interface IVideo {
  _id: string;
  caption: string;
  comments: Comment[];
  likes: Like[];
  postedBy: PostedBy2;
  userId: string;
  video: Video;
}
