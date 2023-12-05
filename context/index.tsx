"use client";
import { createContext, ReactNode, useState, useEffect } from "react";
import { Client, Account, ID } from "appwrite";
import { AuthContextProps } from "@/types";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface Preferences {
  email: string;
  password: string;
}

interface User<T = Preferences> {
  id: string;
  username: string;
  preferences: T;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const client = new Client();
client
  .setEndpoint(`${process.env.NEXT_PUBLIC_API_AUTH_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_API_AUTH_KEY}`);

const account = new Account(client);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(undefined);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  console.log({ user });

  useEffect(() => {
    setLoadingUser(true);
    const getUser: any = async () => {
      setUser(await account.get());
      setLoadingUser(false);
      // router.push("/home");
    };

    getUser();
  }, []);

  const handleLogIn = async () => {
    try {
      setLoadingUser(true);
      await account.createEmailSession(email, password);
      const fetchedUser = (await account.get<User<Preferences>>()) || undefined;
      setUser(fetchedUser);
      router.push("/home");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error);
    } finally {
      setLoadingUser(false);
    }
  };

  const handleSignUp = async () => {
    try {
      await account.create(ID.unique(), email, password);
      await handleLogIn();
    } catch (error) {
      alert(error);
    }
  };

  if (loadingUser) {
    return <Loading />;
  }

  const contextValue: AuthContextProps = {
    email,
    password,
    user,
    setEmail,
    setPassword,
    handleLogIn,
    handleSignUp,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
