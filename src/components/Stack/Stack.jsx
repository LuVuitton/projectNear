import StackItem from "./StackItem/StackItem";
import { useSelector } from "react-redux";



function Stack() {

  const stackData = useSelector(state => state.stackReducer);

  const stackItems = stackData.map(e => <StackItem flag={e.flag}km={e.km}money={e.money}key={e.key}description={e.description}/>);

  return <>{stackItems}</>;
}

export default Stack;
