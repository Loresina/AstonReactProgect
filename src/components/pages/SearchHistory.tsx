import { useSelector } from "react-redux";

import iconDel from "../../assets/iconDel.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  getHistoryState,
  getUserNameState,
} from "../../slices/getStateVars/getStateVars";
import { removeSearchHistory } from "../../slices/searchHistory/removeSearchHistory";

const SearchHistory = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useSelector(getHistoryState);
  const userName = useSelector(getUserNameState);

  const removeRow = (date: string): void => {
    void dispatch(removeSearchHistory(userName, date));
  };

  return (
    <section className="wrapper">
      <div className="container">
        <div className="history">
          <div>
            <h1>Search History for {userName}</h1>
          </div>
          <div>
            {history.length === 0 ? <h2>not search history yet</h2> : null}
          </div>
          {history.length === 0 ? null : (
            <div className="history-table">
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
                          onClick={() => {
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

export default SearchHistory;
