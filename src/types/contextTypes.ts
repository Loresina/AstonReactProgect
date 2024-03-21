interface AuthContType {
  logStatus: boolean;
  logIn: () => void;
  logOut: () => void;
}

interface ThemeContType {
  theme: string;
  toggleTheme: () => void;
}

export type { AuthContType, ThemeContType };
