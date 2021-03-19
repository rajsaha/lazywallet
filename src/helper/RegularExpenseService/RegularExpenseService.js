import axios from "axios";

const RegularExpenseService = (() => {
  const getRegularExpenses = async (input) => {
    try {
      const query = `
      query ($pageNo: Int, $size: Int, $skip: Int, $userId: ID) {
        getRegularExpenses(pageNo: $pageNo, size: $size, skip: $skip, userId: $userId) {
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
      }`;

      const _result = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_DOMAIN}/graphql?`,
        data: JSON.stringify({
          query,
          variables: {
            userId: input.userId,
            pageNo: input.pageNo,
            size: input.size,
            skip: input.skip,
          },
        }),
      });

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  const createRegularExpense = async (input) => {
    try {
      const mutation = `
      mutation ($userId: ID, $typeId: ID, $title: String, $amount: Int, $repeat: Boolean, $time: String, $days: [DayInput]) {
        createRegularExpense (input: {userId: $userId, typeId: $typeId, title: $title, amount: $amount, repeat: $repeat, time: $time, days: $days}) {
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
            repeat: input.repeat,
            time: input.time,
            days: input.days,
          },
        }),
      });

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  const updateRegularExpense = async (input) => {
    try {
      const mutation = `
      mutation ($id: ID, $userId: ID, $typeId: ID, $title: String, $amount: Int, $repeat: Boolean, $time: String, $days: [DayInput]) {
        updateRegularExpense (input: {id: $id, userId: $userId, typeId: $typeId, title: $title, amount: $amount, repeat: $repeat, time: $time, days: $days}) {
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
            typeId: input.typeId,
            title: input.title,
            amount: input.amount,
            repeat: input.repeat,
            time: input.time,
            days: input.days,
          },
        }),
      });

      return _result;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRegularExpense = async (input) => {
    try {
      const mutation = `
      mutation ($id: ID, $userId: ID) {
        deleteRegularExpense (input: {id: $id, userId: $userId}) {
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
    getRegularExpenses,
    createRegularExpense,
    updateRegularExpense,
    deleteRegularExpense,
  };
})();

export default RegularExpenseService;
