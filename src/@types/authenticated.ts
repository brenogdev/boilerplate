export type TokenProps = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type UserProps = {
  user: {
    token: TokenProps;
  };
};

export interface IContext extends UserProps {
  authenticated: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export type IAuthProvider = {
  children: React.ReactNode;
};



export type AuthRedux = {
  token: TokenProps
};
