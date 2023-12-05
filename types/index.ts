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
  email: string;
  password: string;
  setUser: Dispatch<SetStateAction<any>>; // SetUser is of type any
  user: any; // User is of type any
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleLogIn: () => Promise<void>;
  handleSignUp: () => Promise<void>;
}
