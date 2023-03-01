export interface Like {
  id: number;
  postId: number;
  userId: number;
  date: string;
}

export interface Comment {
  id: number;
  content: string;
  postId: number;
  userId: number;
  date: string;
}

export interface User {
  admin: boolean;
  date: string;
  description?: string;
  email: string;
  id: number;
  image: string;
  password: string;
  phoneNumber: number;
  username: string;
}

export interface Post {
  id: number;
  message: string;
  image: string;
  date: string;
  userId: number;
  comments: Comment[];
  likes: Like[];
}

export interface RootState {
  user: {
    isLogged: boolean;
    infos: User;
  };
}
