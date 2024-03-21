import { createContext } from "react";

import type { ThemeContType } from "../../types/contextTypes";

const ThemeContext = createContext<ThemeContType>({
  theme: "main-default",
  toggleTheme: () => {},
});

export default ThemeContext;
