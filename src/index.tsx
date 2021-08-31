import ReactDOM from "react-dom";
import ClickCounter from "./classes/HOC/ClickCounter";
import HoverCounter from "./classes/HOC/HoverCounter";
import StudentInfoClass from "./classes/StudentInfoClass";
import UserSearchClass from "./classes/UserSearchClass";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import UserSearchRef from "./refs/UserSearch";
import GuestList from "./state/GuestList";
import StudentInfo from "./state/StudentInfo";
import UserSearch from "./state/UserSearch";
import { users } from "./constants";

const App = () => {
  return (
    <div>
      <Parent />
      <UserSearch />
      <UserSearchRef />
      <GuestList />
      <UserSearch />
      <UserSearchClass users={users} />
      <EventComponent />
      <StudentInfo id={10} name="Parth" />
      <StudentInfoClass id={20} name="Rohan"/>
      <HoverCounter name="Jay" />
      <ClickCounter name="Rahul" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
