export interface IUser {
  login: string,
  password: string
}

export interface IGood {
  id: number;
  category: string;
  title: string;
  author: string;
  image: string;
  price: number;
};