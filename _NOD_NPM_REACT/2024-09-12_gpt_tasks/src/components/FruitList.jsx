function FruitList(props) {
  const { title, fruits } = props;
  const displayTitle = title || 'Vaisius';

  if (!fruits) {
    return null;
  }

  return (
    <div>
      <h1>{displayTitle}</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;

  
  