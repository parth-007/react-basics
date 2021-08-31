import { useState, useEffect, useRef } from "react";
import { User } from "../models";
import { users } from "../constants";

const UserSearchRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();

  useEffect(()=>{
    if(!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  );
};

export default UserSearchRef;
