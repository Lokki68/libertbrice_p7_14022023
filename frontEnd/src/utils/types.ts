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
  comments: any[];
  likes: any[];
}

export interface RootState {
  user: {
    isLogged: boolean;
    infos: User;
  };
}
