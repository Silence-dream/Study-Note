import {ReactChild, ReactFragment, ReactPortal} from "react";

function FunctionChildren (props: { children: ReactChild | ReactFragment | ReactPortal }) {
  return (
    <div>
      <h1>Function Children</h1>
      {props.children}
    </div>
  );
}

export default FunctionChildren;
