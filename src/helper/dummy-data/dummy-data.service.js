class DummyData {
  regExpenses = [
    {
      id: 0,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 10,
      repeat: true,
      time: "13:00",
      days: [
        { value: "mon", selected: true },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 1,
      typeDesc: "gift",
      typeId: 1,
      title: "Gift",
      amount: 15,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 2,
      typeDesc: "medical",
      typeId: 2,
      title: "Happy Meds",
      amount: 150,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 3,
      typeDesc: "pet",
      typeId: 6,
      title: "Chimpanzee",
      amount: 10,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 4,
      typeDesc: "utilities",
      typeId: 7,
      title: "Electricity",
      amount: 25,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 5,
      typeDesc: "utilities",
      typeId: 7,
      title: "Water",
      amount: 20,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 6,
      typeDesc: "utilities",
      typeId: 7,
      title: "Internet",
      amount: 104,
      repeat: false,
      time: "",
      days: [
        { value: "mon", selected: false },
        { value: "tue", selected: false },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
    {
      id: 7,
      typeDesc: "utilities",
      typeId: 7,
      title: "Air Cond",
      amount: 150,
      repeat: true,
      time: "18:30",
      days: [
        { value: "mon", selected: true },
        { value: "tue", selected: true },
        { value: "wed", selected: false },
        { value: "thu", selected: false },
        { value: "fri", selected: false },
        { value: "sat", selected: false },
        { value: "sun", selected: false },
      ],
    },
  ];

  allExpenses = [
    {
      id: 0,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 10,
      datetime: "01-01-2020 2:00 p.m",
    },
    {
      id: 1,
      typeDesc: "food",
      typeId: 0,
      title: "Dinner",
      amount: 15,
      datetime: "01-01-2020 8:00 p.m",
    },
    {
      id: 2,
      typeDesc: "medical",
      typeId: 2,
      title: "Happy Meds",
      amount: 150,
      datetime: "01-01-2020 4:00 p.m",
    },
    {
      id: 3,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 15,
      datetime: "01-04-2020 2:00 p.m",
    },
    {
      id: 4,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 15,
      datetime: "02-04-2020 2:00 p.m",
    },
    {
      id: 5,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 15,
      datetime: "03-04-2020 2:00 p.m",
    },
    {
      id: 6,
      typeDesc: "food",
      typeId: 0,
      title: "Lunch",
      amount: 15,
      datetime: "04-04-2020 2:00 p.m",
    },
  ];

  getDummyData() {
    return this.regExpenses;
  }

  getAllExpenses() {
    return this.allExpenses;
  }

  addExpense(data) {
    let maxId =
      Math.max.apply(
        Math,
        this.allExpenses.map((o) => o.id)
      ) + 1;
    this.allExpenses.push({
      id: maxId,
      typeDesc: this.getTypeDesc(data.type),
      typeId: data.type,
      title: data.title,
      amount: data.amount,
      datetime: "04-04-2020 2:00 p.m",
    });
  }

  addRegularExpense(data) {
    let maxId =
      Math.max.apply(
        Math,
        this.regExpenses.map((o) => o.id)
      ) + 1;
    this.regExpenses.push({
      id: maxId,
      typeDesc: this.getTypeDesc(data.type),
      typeId: data.type,
      title: data.title,
      amount: data.amount,
      repeat: data.repeat,
      time: data.time,
      days: data.days,
    });
  }

  updateRegularExpense(data) {
    this.regExpenses[data.id] = {
      id: data.id,
      typeDesc: this.getTypeDesc(data.type),
      typeId: data.type,
      title: data.title,
      amount: data.amount,
      repeat: data.repeat,
      time: data.time,
      days: data.days,
    };
  }

  removeExpense(id) {
    const itemIndex = this.allExpenses.map((item) => item.id).indexOf(id);
    this.allExpenses.splice(itemIndex, 1);
  }

  removeRegularExpense(id) {
    const itemIndex = this.regExpenses.map((item) => item.id).indexOf(id);
    this.regExpenses.splice(itemIndex, 1);
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

export function addRegularExpense(data) {
  return dummyDataObj.addRegularExpense;
}

export function updateRegularExpense(data) {
  return dummyDataObj.updateRegularExpense;
}

export function removeExpense(data) {
  return dummyDataObj.removeExpense;
}

export function removeRegularExpense(data) {
  return dummyDataObj.removeRegularExpense;
}
