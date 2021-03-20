import React from "react";
import RegularExpense from "@Components/RegularExpense/RegularExpense";
import "./RegularExpenseGrid.scss";
import EmptyState from "@Components/EmptyState/EmptyState";

function RegularExpenseGrid({ regExps, addExpenseCallback }) {
  return (
    <>
      <div className="regular-expenses">
        {regExps.length > 0 ? (
          regExps.map((value, index) => {
            return (
              <RegularExpense
                addExpenseCallback={addExpenseCallback}
                key={index}
                data={value}
              />
            );
          })
        ) : (
          <EmptyState type="regExp" doAction={true}></EmptyState>
        )}
      </div>
    </>
  );
}

export default RegularExpenseGrid;
