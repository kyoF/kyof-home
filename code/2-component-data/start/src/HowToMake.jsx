import React from "react";

function MakingOrder(props) {
  const MakingOrder = props.makingOrder.map((makingOrder) => {
    return <li>{makingOrder.name}</li>;
  });
  return <ul>{MakingOrder}</ul>;
}

export default MakingOrder;
