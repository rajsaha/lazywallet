import {
  Fastfood,
  CardGiftcard,
  LocalHospital,
  Home,
  Commute,
  Person,
  Pets,
  Build,
  FlightTakeoff,
  AttachMoney,
  RadioButtonUnchecked,
  Error,
} from "@material-ui/icons";

function ExpenseIcon(props) {
  switch (props.icon) {
    case "food":
      return <Fastfood />;
    case "gift":
      return <CardGiftcard />;
    case "medical":
      return <LocalHospital />;
    case "home":
      return <Home />;
    case "transportation":
      return <Commute />;
    case "personal":
      return <Person />;
    case "pet":
      return <Pets />;
    case "utility":
      return <Build />;
    case "travel":
      return <FlightTakeoff />;
    case "debt":
      return <AttachMoney />;
    case "other":
      return <RadioButtonUnchecked />;
    default:
      return <Error />;
  }
}

export default ExpenseIcon;
