import React, { useCallback, useEffect, useState } from "react";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import "./History.scss";
import EmptyState from "../../components/EmptyState/EmptyState";
import { withRouter } from "react-router";
import HistoryService from "@Helper/HistoryService/HistoryService";

function History() {
  const [latExps, setLatExps] = useState([]);
  const [latExpsLength, setLatExpsLength] = useState(latExps.length);
  const [range, setRange] = useState(0);
  const [userId, setUserId] = useState("");

  const getHistory = useCallback(() => {
    HistoryService.getExpenses({ userId }).then((res) => {
      if (Array.isArray(res.data.data.getExpenses))
      setLatExps(res.data.data.getExpenses[0].expenses);
    });
  }, [userId]);

  function removeExpense(id) {
    dummyDataObj.removeExpense(id);
    if (latExpsLength > 1) setLatExpsLength(latExpsLength - 1);
    getHistory();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserId(localStorage.getItem("userId"));
    getHistory();
  }, [getHistory]);

  return (
    <div className="history-container">
      <div className="history">
        <div className="section padding-horizontal-15">
          <div className="section-header">
            <h1>History</h1>
            <div className="range-controls">
              <p
                onClick={() => setRange(0)}
                className={range === 0 ? "selected" : ""}
              >
                Today
              </p>
              <p
                onClick={() => setRange(1)}
                className={range === 1 ? "selected" : ""}
              >
                Last 7 days
              </p>
              <p
                onClick={() => setRange(2)}
                className={range === 2 ? "selected" : ""}
              >
                Everything
              </p>
            </div>
          </div>
          <div className="section-content">
            <div className="latest-expenses">
              {latExps.length > 0 ? (
                latExps.map((value, index) => {
                  return (
                    <ExpenseHistory
                      key={index}
                      data={value}
                      removeExpense={removeExpense}
                    />
                  );
                })
              ) : (
                <EmptyState type="latExp" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(History);
