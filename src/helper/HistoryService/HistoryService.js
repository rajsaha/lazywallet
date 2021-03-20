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

  const deleteExpense = async (input) => {
    try {
      const mutation = `
      mutation ($id: ID, $userId: ID) {
        deleteExpense (input: {id: $id, userId: $userId}) {
          _id
        }
      }`;

      const _result = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        data: JSON.stringify({
          query: mutation,
          variables: {
            id: input.id,
            userId: input.userId,
          },
        }),
      });

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getExpenses,
    deleteExpense
  };
})();

export default HistoryService;
