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

    getAllExpenses() {
        let data = [
            {
                id: 0,
                type: "food",
                title: "Lunch",
                amount: 10,
                datetime: "01-01-2020 2:00 p.m"
            },
            {
                id: 1,
                type: "food",
                title: "Dinner",
                amount: 15,
                datetime: "01-01-2020 8:00 p.m"
            },
            {
                id: 2,
                type: "medical",
                title: "Happy Meds",
                amount: 150,
                datetime: "01-01-2020 4:00 p.m"
            }
        ];

        return data;
    }
}