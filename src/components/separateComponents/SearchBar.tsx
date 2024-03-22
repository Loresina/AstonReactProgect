import React, { useRef, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import search from "../../assets/iconSearch.svg";
import { Suggestions } from "../../components/separateComponents/Suggestion";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useDebounce } from "../../hooks/useDebounce";
import {
  getUserNameState,
  getSearchInputState,
} from "../../slices/getStateVars/getStateVars";
import { addSearchHistory } from "../../slices/searchHistory/addSearchHistory";

export const SearchBar = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchInput = useSelector(getSearchInputState);
  const authName = useSelector(getUserNameState);

  const [inputValue, setInputValue] = useState(searchInput);
  const [isSuggestions, setIsSuggestions] = useState(false);
  const debouncedValue = useDebounce(inputValue, 500);

  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }

    setInputValue(searchInput);

    const handleClickOutside = (e: MouseEvent): void => {
      if ((e.target as HTMLElement).id === "searchTitle") {
        setIsSuggestions(true);
      } else {
        setIsSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchInput]);

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
          onFocus={() => {
            setIsSuggestions(true);
          }}
          value={inputValue}
          ref={inputFocus}
          placeholder="Start searching"
          required
        />

        {inputValue.length > 2 && isSuggestions ? (
          <Suggestions query={debouncedValue} openBook={openBook} />
        ) : null}
      </div>
    </form>
  );
};
