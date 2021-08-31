import { useState } from "react";
import { users } from "../constants";
import { User } from "../models";

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} {user && user.age}
       </div>
    </div>
  );
};

export default UserSearch;
