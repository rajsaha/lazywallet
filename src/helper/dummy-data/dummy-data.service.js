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
            },
            {
                id: 4,
                type: "utilities",
                title: "Electricity",
                amount: 25
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
            },
            {
                id: 3,
                type: "food",
                title: "Lunch",
                amount: 15,
                datetime: "01-04-2020 2:00 p.m"
            },
            {
                id: 4,
                type: "food",
                title: "Lunch",
                amount: 15,
                datetime: "02-04-2020 2:00 p.m"
            },
            {
                id: 5,
                type: "food",
                title: "Lunch",
                amount: 15,
                datetime: "03-04-2020 2:00 p.m"
            },
            {
                id: 6,
                type: "food",
                title: "Lunch",
                amount: 15,
                datetime: "04-04-2020 2:00 p.m"
            }
        ];

        return data;
    }
}