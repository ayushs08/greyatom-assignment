import React from "react";
const findByType = (children, component) => {
  const result = [];
  const type = component;
  React.Children.forEach(children, child => {
    const childType = child && child.props.type;
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  return result[0];
};
export default findByType;
