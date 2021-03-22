import React, { useCallback, useEffect, useState } from "react";
import ExpenseHistory from "@Components/ExpenseHistory/ExpenseHistory";
import "./History.scss";
import EmptyState from "../../components/EmptyState/EmptyState";
import { withRouter } from "react-router";
import HistoryService from "@Helper/HistoryService/HistoryService";
import dayjs from "dayjs";

function History() {
  const [latExps, setLatExps] = useState([]);
  const [range, setRange] = useState(0);
  const [userId, setUserId] = useState("");

  const getHistory = useCallback(() => {
    HistoryService.getExpenses({ userId }).then((res) => {
      if (Array.isArray(res.data.data.getExpenses)) {
        for (let item of res.data.data.getExpenses[0].expenses) {
          setLatExps((latExps) => [...latExps, item]);
        }
      }
    });
  }, [userId]);

  async function deleteExpense(id) {
    const _result = await HistoryService.deleteExpense({
      id,
      userId,
    });

    if ("error" in _result.data) return false;
    getHistory();
    return true;
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
                latExps.map((value, outerIndex) => {
                  return (
                    <div key={outerIndex}>
                      <h1>{dayjs(value._id).format("MMMM D, YYYY")}</h1>
                      {value.records.map((item, innerIndex) => {
                        return (
                          <>
                            <ExpenseHistory
                              key={innerIndex}
                              data={item}
                              deleteExpense={deleteExpense}
                            />
                          </>
                        );
                      })}
                    </div>
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
