// ParentComponentA.js

import ChildComponentA from './ChildComponentA';

const ParentComponentA = () => {
  return (
    <div>
      <h1>Parent A Component</h1>
      <ChildComponentA name="John" age={30} />
    </div>
  );
};

export default ParentComponentA;
