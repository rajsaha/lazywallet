import React, { useCallback, useEffect, useState } from "react";
import "./Home.scss";
import AddExpense from "@Components/AddExpense/AddExpense";
import RegularExpenseGrid from "@Components/RegularExpenseGrid/RegularExpenseGrid";
import SpentOn from "@Components/SpentOn/SpentOn";
import { withRouter } from "react-router";
import HomeService from "@Helper/HomeService/HomeService";

function Homepage() {
  const [spentData, setSpentData] = useState({
    spentMostOn: "n/a",
    spentThisMonth: 0,
    spentToday: 0,
  });
  const [userId, setUserId] = useState("");
  const [expenseTypes, setExpenseTypes] = useState([]);

  async function addNewExpense({ typeId, title, amount }) {
    const _result = await HomeService.createExpense({
      userId,
      typeId,
      title,
      amount,
    });

    if ('error' in _result.data) return false;
    getHomeData();
    return true;
  }

  const getHomeData = useCallback(() => {
    HomeService.getHomeData({ userId }).then((res) =>
      setSpentData(res.data.data.getHomeData)
    );
  }, [userId]);

  const getExpenseTypes = useCallback(() => {
    HomeService.getExpenseTypes().then((res) =>
      setExpenseTypes(res.data.data.getExpenseTypes)
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserId(localStorage.getItem("userId"));
    getHomeData();
    getExpenseTypes();
  }, [getHomeData, getExpenseTypes]);

  return (
    <div className="home">
      <div className="section padding-horizontal-15">
        <div className="section-content">
          <SpentOn {...spentData} />
        </div>
      </div>

      <div className="section">
        <div className="section-header padding-horizontal-15">
          <h1>Regular Expenses</h1>
        </div>
        <div className="section-content">
          <RegularExpenseGrid></RegularExpenseGrid>
        </div>
      </div>

      <div className="section padding-horizontal-15">
        <div className="section-header">
          <h1>Add an Expense</h1>
        </div>
        <div className="section-content">
          <AddExpense
            expenseCallback={addNewExpense}
            expenseTypes={expenseTypes}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
