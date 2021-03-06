import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./Regulars.scss";
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import AddRegularExpense from "@Components/AddRegularExpense/AddRegularExpense";
import EmptyState from "@Components/EmptyState/EmptyState";
import HomeService from "@Helper/HomeService/HomeService";
import RegularExpenseService from "@Helper/RegularExpenseService/RegularExpenseService";

function Regulars() {
  const [regExps, setRegExps] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [userId, setUserId] = useState("");
  const [expenseTypes, setExpenseTypes] = useState([]);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleOpen = () => {
    setShowDialog(true);
  };

  const getRegExps = useCallback(() => {
    RegularExpenseService.getRegularExpenses({
      userId,
      pageNo: 1,
      size: 100,
      skip: 0,
    }).then((res) => {
      if (Array.isArray(res.data.data.getRegularExpenses))
        setRegExps(res.data.data.getRegularExpenses[0].regExpenses);
    });
  }, [userId]);

  async function addRegularExpense({
    typeId,
    title,
    amount,
    repeat,
    time,
    days,
  }) {
    const _result = await RegularExpenseService.createRegularExpense({
      userId,
      typeId,
      title,
      amount,
      repeat,
      time,
      days,
    });

    if ("error" in _result.data) return false;
    getRegExps();
    return true;
  }

  async function updateRegularExpense({
    id,
    typeId,
    title,
    amount,
    repeat,
    time,
    days,
  }) {
    const _result = await RegularExpenseService.updateRegularExpense({
      id,
      userId,
      typeId: typeId,
      title: title,
      amount: amount,
      repeat: repeat,
      time: time,
      days: days,
    });

    if ("error" in _result.data) return false;
    getRegExps();
    return true;
  }

  async function deleteRegularExpense(id) {
    const _result = await RegularExpenseService.deleteRegularExpense({
      id,
      userId,
    });

    if ("error" in _result.data) return false;
    getRegExps();
    return true;
  }

  const getExpenseTypes = useCallback(() => {
    HomeService.getExpenseTypes().then((res) =>
      setExpenseTypes(res.data.data.getExpenseTypes)
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserId(localStorage.getItem("userId"));
    getRegExps();
    getExpenseTypes();
  }, [getRegExps, getExpenseTypes]);

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
                        expenseTypes={expenseTypes}
                        key={index}
                        data={value}
                        isEditable={true}
                        deleteRegularExpenseCallback={deleteRegularExpense}
                        updateRegularExpenseCallback={updateRegularExpense}
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
            expenseTypes={expenseTypes}
          />
        </div>
      </div>
    </>
  );
}

export default withRouter(Regulars);
