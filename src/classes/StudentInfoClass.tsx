import "../styles.css";
import { Component } from "react";
import { CounterInterface, Student } from "../models";
import { style1, fruits } from "../constants";

class StudentInfoClass extends Component<Student, CounterInterface> {
  constructor(props: Student) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onClick = () => {
    console.log("Button Clicked");
    this.setState({
      count: this.state.count + 1,
    });
  };
  style2: React.CSSProperties = {
    color: "blue",
  };

  render() {
    const { count } = this.state;
    return (
      <div className="student-info-class">
        <div style={this.style2}>{this.props.id}</div>
        <div style={style1}>{this.props.name}</div>
        <div>{count}</div>

        <button onClick={this.onClick}>Click Me!</button>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}> {fruit} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentInfoClass;
