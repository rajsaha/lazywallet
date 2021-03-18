import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./Regulars.scss";
import dummyDataObj from "@Helper/dummy-data/dummy-data.service";
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import AddRegularExpense from "@Components/AddRegularExpense/AddRegularExpense";
import EmptyState from "@Components/EmptyState/EmptyState";
import RegularExpenseService from "@Helper/RegularExpenseService/RegularExpenseService";

function Regulars() {
  const [regExps, setRegExps] = useState([]);
  const [regExpsLength, setRegExpsLength] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [userId, setUserId] = useState("");

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleOpen = () => {
    setShowDialog(true);
  };

  const getRegExps = useCallback(() => {
    RegularExpenseService.getRegularExpenses({ userId }).then((res) => {
      if (Array.isArray(res.data.data.getRegularExpenses))
        setRegExps(res.data.data.getRegularExpenses[0].regExpenses);
    });
  }, [userId]);

  function addRegularExpense({ type, title, amount, repeat, time, days }) {
    if (!title || !amount) {
      return false;
    }
    dummyDataObj.addRegularExpense({
      type: type,
      title: title,
      amount: amount,
      repeat: repeat,
      time: time,
      days: days,
    });
    setRegExpsLength(regExpsLength + 1);
    getRegExps();
    return true;
  }

  function updateRegularExpense({
    id,
    type,
    title,
    amount,
    repeat,
    time,
    days,
  }) {
    if (!title || !amount) {
      return false;
    }
    dummyDataObj.updateRegularExpense({
      id: id,
      type: type,
      title: title,
      amount: amount,
      repeat: repeat,
      time: time,
      days: days,
    });
    setRegExpsLength(regExpsLength + 1);
    setRegExpsLength(regExpsLength - 1);
    getRegExps();
    return true;
  }

  function removeRegularExpense(id) {
    dummyDataObj.removeRegularExpense(id);
    if (regExpsLength > 1) setRegExpsLength(regExpsLength - 1);
    getRegExps();
    return true;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserId(localStorage.getItem("userId"));
    getRegExps();
  }, [getRegExps]);

  return (
    <>
      <div className="regulars-container">
        <div className="regulars">
          <div className="section padding-horizontal-15">
            <div className="section-header">
              <h1>Regulars</h1>
            </div>
            <div className="section-content">
              <div className="latest-expenses">
                {regExps.length > 0 ? (
                  regExps.map((value, index) => {
                    return (
                      <RegularExpense
                        key={value.id}
                        data={value}
                        isEditable={true}
                        removeRegularExpense={removeRegularExpense}
                        updateRegularExpense={updateRegularExpense}
                      />
                    );
                  })
                ) : (
                  <EmptyState type="regExp" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="add-regular-expense section padding-horizontal-15">
          <AddRegularExpense
            addRegularExpenseCallback={addRegularExpense}
            handleClose={handleClose}
            handleOpen={handleOpen}
            showDialog={showDialog}
          />
        </div>
      </div>
    </>
  );
}

export default withRouter(Regulars);
