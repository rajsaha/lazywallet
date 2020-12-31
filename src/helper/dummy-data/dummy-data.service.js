export default class DummyData {
    getDummyData() {
        let data = [
            {
                id: 0,
                type: "food",
                title: "Lunch",
                amount: 10
            },
            {
                id: 1,
                type: "gift",
                title: "Dinner",
                description: "Home",
                amount: 15
            },
            {
                id: 2,
                type: "medical",
                title: "Happy Meds",
                amount: 150
            },
            {
                id: 3,
                type: "pet",
                title: "Chimpanzee",
                amount: 10
            }
        ];

        return data;
    }
}