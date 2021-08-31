import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child id={1} color='red' onClick={()=> console.log(`1 clicked`)}/>
      <Child id={2} color='lime' onClick={()=> console.log(`2 clicked`)}/>
      <Child id={3} color='blue' onClick={()=> console.log(`3 clicked`)}/>
    </div>
  );
};

export default Parent;
