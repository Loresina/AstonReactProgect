import { useSelector } from "react-redux";

import iconDel from "../../assets/iconDel.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeSearchHistory } from "../../slices/searchHistory/removeSearchHistory";
import type { RootState } from "../../types/dataTypes";

const SearchHistory = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useSelector(
    (state: RootState) => state.userInfo.searchHistory,
  );
  const userName = useSelector((state: RootState) => state.userInfo.authName);

  const removeRow = (date: string): void => {
    void dispatch(removeSearchHistory(userName, date));
  };

  return (
    <section className="wrapper">
      <div className="container">
        <div className="history">
          <h1>Search History for {userName}</h1>
          {history.length === 0 ? (
            <span>No search history yet.</span>
          ) : (
            <div className="">
              {history
                .slice()
                .reverse()
                .map((one) => {
                  return (
                    <div key={one.date} className="history-row">
                      <div className="history-row">
                        <button
                          type="button"
                          className="history-button"
                          onClick={(e) => {
                            removeRow(one.date);
                          }}
                        >
                          <img src={iconDel} />
                        </button>
                        <a href={`/search/${one.param}`}>{one.param}</a>
                      </div>
                      <span>{one.date}</span>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { SearchHistory };
