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
      const mutation = `
      mutation ($userId: ID, $typeId: ID, $title: String, $amount: Int) {
        createExpense (input: {userId: $userId, typeId: $typeId, title: $title, amount: $amount}) {
          _id
        }
      }`;

      const _result = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        data: JSON.stringify({
          query: mutation,
          variables: {
            userId: input.userId,
            typeId: input.typeId,
            title: input.title,
            amount: input.amount,
          },
        }),
      });

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
                      _id
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
