import React, { useRef, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import search from "../../assets/iconSearch.svg";
import { Suggestions } from "../../components/separateComponents/Suggestion";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useDebounce } from "../../hooks/useDebounce";
import { addSearchHistory } from "../../slices/searchHistory/addSearchHistory";
import type { RootState } from "../../types/dataTypes";

const SearchBar = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isSuggestions, setIsSuggestions] = useState(true);
  const debouncedValue = useDebounce(inputValue, 500);
  const authName = useSelector((state: RootState) => state.userInfo.authName);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }

    const handleClickOutside = (): void => {
      setIsSuggestions(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSuggestions]);

  const openBook = (id: string): void => {
    navigate(`/book/${encodeURIComponent(id)}`);
    setIsSuggestions(false);
  };

  const searchFilling = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isSuggestions) {
      setIsSuggestions(true);
    }
    setInputValue(e.target.value);
  };

  const searchSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (authName.length > 0) {
      const searchDate = new Date();
      const date = `${searchDate.toTimeString().slice(0, 8)},
      ${searchDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`;
      void dispatch(addSearchHistory(authName, inputValue, date));
    }

    navigate(`/search/${encodeURIComponent(inputValue)}`);
  };

  return (
    <form className="search" onSubmit={searchSubmit}>
      <button type="submit" className="submit-button">
        <img src={search} />
      </button>
      <div className="submit-input">
        <label htmlFor="searchTitle">Start searching</label>
        <input
          id="searchTitle"
          name="searchTitle"
          type="text"
          onChange={searchFilling}
          value={inputValue}
          ref={inputFocus}
          placeholder="Start searching"
        />

        {inputValue.length > 2 && isSuggestions ? (
          <Suggestions
            query={debouncedValue}
            openBook={openBook}
            setIsSuggestions={setIsSuggestions}
          />
        ) : null}
      </div>
    </form>
  );
};

export { SearchBar };
