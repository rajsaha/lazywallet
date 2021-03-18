import axios from "axios";

const RegularExpenseService = (() => {
  const getRegularExpenses = async (input) => {
    try {
      const _result = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/graphql`,
        {
          query: `
            query {
              getRegularExpenses(pageNo: 1, size: 10, skip: 0, userId: "${input.userId}") {
                regExpenses {
                  _id
                  typeId
                  typeDesc
                  title
                  amount
                  repeat
                  time
                  days {
                    value
                    selected
                  }
                  timestamp
                }
              }
            }`,
        }
      );

      return _result;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getRegularExpenses,
  };
})();

export default RegularExpenseService;
