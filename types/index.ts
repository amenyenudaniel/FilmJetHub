import { Dispatch, SetStateAction } from "react";
export interface trendingMoviesProps {
  id: number;
  poster_path: string;
}

export interface AccordionItemProps {
  title: string;
  content: string;
}

export interface AuthContextProps {
  auth: any;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogIn: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  handleSignOut?: () => Promise<void>;
  googleSignUp?: () => Promise<void>;
}

export interface MovieProps {
  backdrop_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
  id: number;
  movie: any;
}
