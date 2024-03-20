import type { StateBookInfo } from "../../../types/dataTypes";

const setMessage = (
  type: keyof { favorites: string; main: string; search: string },
  books: StateBookInfo[],
  error: string,
): string => {
  const messages = {
    favorites: "not favorites yet",
    main: "nothing was found",
    search: "nothing was found",
  };

  if (error.length > 0) {
    return `something went wrong`;
  }

  if (books.length === 0) {
    return messages[type];
  }

  return "";
};

export { setMessage };
