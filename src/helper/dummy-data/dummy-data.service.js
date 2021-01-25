class DummyData {
    regExpenses = [{
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

    allExpenses = [{
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

    getDummyData() {
        return this.regExpenses;
    }

    getAllExpenses() {
        return this.allExpenses;
    }

    addExpense(data) {
        let maxId = Math.max.apply(Math, this.allExpenses.map((o) => o.id)) + 1;
        this.allExpenses.push({
            id: maxId,
            type: data.type,
            title: data.title,
            amount: data.amount,
            datetime: "04-04-2020 2:00 p.m"
        });
    }

    removeExpense(id) {
        const itemIndex = this.allExpenses.map(item => item.id).indexOf(id);
        this.allExpenses.splice(itemIndex, 1);
    }
}

const dummyDataObj = new DummyData();
export default dummyDataObj;

export function getDummyData() {
    return dummyDataObj.getDummyData;
}

export function getAllExpenses() {
    return dummyDataObj.getAllExpenses;
}

export function addExpense(data) {
    return dummyDataObj.addExpense;
}

export function removeExpense(data) {
    return dummyDataObj.removeExpense;
}