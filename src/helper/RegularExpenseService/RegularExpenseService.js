import axios from 'axios';

const RegularExpenseService = (() => {
    const getRegularExpenses = async (input) => {
        const _result = await axios.post('http://localhost:8080/graphql', {
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
            }`
        });

        return _result;
    }
    return {
        getRegularExpenses
    }
})();

export default RegularExpenseService;
