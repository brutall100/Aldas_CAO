// ParentComponent.js

import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message="Hello from Parent!" />
    </div>
  );
};

export default ParentComponent;

