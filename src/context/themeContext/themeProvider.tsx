import React, { useMemo, useState } from "react";

import ThemeContext from "./themeContext";

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const localTheme = localStorage.getItem("currentTheme");
  let currentTheme = "main-theme";

  if (localTheme !== null) {
    currentTheme = localTheme;
  }

  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = (): void => {
    setTheme((prevTheme) =>
      prevTheme === "main-theme" ? "book-theme" : "main-theme",
    );
  };

  localStorage.setItem("currentTheme", theme);

  const memoizedValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
