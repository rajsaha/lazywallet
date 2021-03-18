import axios from "axios";

const HistoryService = (() => {
  const getExpenses = async (input) => {
    try {
      const _result = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        {
          query: `
          {
            getExpenses(userId: "${input.userId}", size: 1000, skip: 0, period: "everything") {
              expenses {
                _id
                typeId
                typeDesc
                title
                amount
                timestamp
              }
              count {
                count
              }
              total {
                total
              }
            }
          }
          `,
        }
      );

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getExpenses,
  };
})();

export default HistoryService;
