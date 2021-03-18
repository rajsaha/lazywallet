import axios from 'axios';

const HomeService = (() => {
    const getHomeData = async (input) => {
        const _result = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/graphql?`, {
            query: `
            query {
                getHomeData(userId: "${input.userId}") {
                    spentToday
                    spentThisMonth
                    spentMostOn
                }
            }`
        });

        return _result;
    }

    return {
        getHomeData
    }
})();

export default HomeService;
