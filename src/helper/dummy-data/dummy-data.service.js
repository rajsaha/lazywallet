class DummyData {
    regExpenses = [{
            id: 0,
            typeDesc: "food",
            typeId: 0,
            title: "Lunch",
            amount: 10
        },
        {
            id: 1,
            typeDesc: "gift",
            typeId: 1,
            title: "Gift",
            amount: 15
        },
        {
            id: 2,
            typeDesc: "medical",
            typeId: 2,
            title: "Happy Meds",
            amount: 150
        },
        {
            id: 3,
            typeDesc: "pet",
            typeId: 6,
            title: "Chimpanzee",
            amount: 10
        },
        {
            id: 4,
            typeDesc: "utilities",
            typeId: 7,
            title: "Electricity",
            amount: 25
        }
    ];

    allExpenses = [{
            id: 0,
            typeDesc: "food",
            typeId: 0,
            title: "Lunch",
            amount: 10,
            datetime: "01-01-2020 2:00 p.m"
        },
        {
            id: 1,
            typeDesc: "food",
            typeId: 0,
            title: "Dinner",
            amount: 15,
            datetime: "01-01-2020 8:00 p.m"
        },
        {
            id: 2,
            typeDesc: "medical",
            typeId: 2,
            title: "Happy Meds",
            amount: 150,
            datetime: "01-01-2020 4:00 p.m"
        },
        {
            id: 3,
            typeDesc: "food",
            typeId: 0,
            title: "Lunch",
            amount: 15,
            datetime: "01-04-2020 2:00 p.m"
        },
        {
            id: 4,
            typeDesc: "food",
            typeId: 0,
            title: "Lunch",
            amount: 15,
            datetime: "02-04-2020 2:00 p.m"
        },
        {
            id: 5,
            typeDesc: "food",
            typeId: 0,
            title: "Lunch",
            amount: 15,
            datetime: "03-04-2020 2:00 p.m"
        },
        {
            id: 6,
            typeDesc: "food",
            typeId: 0,
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
            typeDesc: this.getTypeDesc(data.type),
            typeId: data.type,
            title: data.title,
            amount: data.amount,
            datetime: "04-04-2020 2:00 p.m"
        });
    }

    removeExpense(id) {
        const itemIndex = this.allExpenses.map(item => item.id).indexOf(id);
        this.allExpenses.splice(itemIndex, 1);
    }

    getTypeDesc(id) {
        switch (id) {
            case 0:
                return "food";
            case 1:
                return "gift";
            case 2:
                return "medical";
            case 3:
                return "home";
            case 4:
                return "transportation";
            case 5:
                return "personal";
            case 6:
                return "pets";
            case 7:
                return "utilities";
            case 8:
                return "travel";
            case 9:
                return "debt";
            case 10:
                return "other";
            default:
                return "food";
        }
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