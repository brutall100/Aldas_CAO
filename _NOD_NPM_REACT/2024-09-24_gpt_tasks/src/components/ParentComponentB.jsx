// ParentComponentB.js
import React from 'react';
import ChildComponentB from './ChildComponentB';

const ParentComponentB = () => {
  const handleClick = () => {
    alert("Button clicked in Child!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponentB onClick={handleClick} />
    </div>
  );
};

export default ParentComponentB;
