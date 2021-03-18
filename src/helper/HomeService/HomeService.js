import axios from "axios";

const HomeService = (() => {
  const getHomeData = async (input) => {
    try {
      const _result = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        {
          query: `
                query {
                    getHomeData(userId: "${input.userId}") {
                        spentToday
                        spentThisMonth
                        spentMostOn
                    }
                }`,
        }
      );

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  const createExpense = async (input) => {
    try {
      const _result = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        {
          mutation: `
                  mutation {
                      createExpense (input: {userId: "${input.userId}", typeId: "${input.typeId}", title: "${input.title}", amount: ${input.amount}}) {
                        _id
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

  const getExpenseTypes = async () => {
    try {
      const _result = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        {
          query: `
              query {
                  getExpenseTypes {
                      typeId
                      typeDesc
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
    getHomeData,
    createExpense,
    getExpenseTypes,
  };
})();

export default HomeService;
