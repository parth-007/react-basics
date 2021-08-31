import { Component } from "react";
import { UserSearchProps, UserSearchState } from "../models";

class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name} {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearchClass;
