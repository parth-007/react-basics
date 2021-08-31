import { ChildProps } from "../models";

export const Child: React.FC<ChildProps> = (props) => {
  return (
    <div style={{color: props.color}}>
      <b>{props.id}</b>
      <i>Hello, I am a cell.</i>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
};
