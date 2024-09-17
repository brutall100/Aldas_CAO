import { useState } from 'react';

const COLORS = [
  '#FF0000', // 0
  '#FF3300', // 1
  '#FF6600', // 2
  '#FF9900', // 3
  '#FFCC00', // 4
  '#FFFF00', // 5
  '#CCFF00', // 6
  '#99FF00', // 7
  '#66FF00', // 8
  '#33FF00', // 9
  '#00FF00'  // 10
];

const Counter = () => {
  const [count, setCount] = useState(5);
  const [grades, setGrades] = useState([]);

  const input = (value) => {
    setCount(value);
  };

  const changeCount = (value) => {
    setCount((prevCount) => {
      const newCount = prevCount + value;
      if (newCount > 10) return 10;
      if (newCount < 0) return 0;
      return newCount;
    });
  };

  const addGrade = () => {
    const gradeColor = COLORS[count]; // Get the color based on the current count
    const newGrade = { grade: count, color: gradeColor }; // Store the grade and its color
    setGrades((prevGrades) => [...prevGrades, newGrade]);
  };

  const removeThisGrade = (gradeToRemove) => {
    setGrades((prevGrades) => {
      const newGrades = prevGrades.filter((grade, index) => {
        if (grade.grade === gradeToRemove.grade) {
          return index !== prevGrades.indexOf(gradeToRemove);
        }
        return true;
      });
      return newGrades;
    });
  };

  const removeAllGrades = () => {
    setGrades([]);
  };

  return (
    <div>
      <input type="number" min={0} max={10} value={count} onChange={(e) => input(Number(e.target.value))} />
      <p style={{ color: COLORS[count] }}>Count: {count}</p>  {/* Use the corresponding color from COLORS */}
      <button onClick={() => changeCount(1)} disabled={count >= 10}>+1</button>
      <button onClick={() => changeCount(2)} disabled={count >= 10}>+2</button>
      <button onClick={() => changeCount(5)} disabled={count >= 10}>+5</button>
      <button onClick={() => changeCount(-1)} disabled={count <= 0}>-1</button>
      <button onClick={() => changeCount(-2)} disabled={count <= 0}>-2</button>
      <button onClick={() => changeCount(-5)} disabled={count <= 0}>-5</button>
      <button onClick={() => setCount(5)}>Reset</button>
      <button onClick={addGrade}>Add Grade</button>
      <button onClick={removeAllGrades}>Remove All Grades</button>

      <ul>
        {grades.map((item, index) => (
          <li key={index} style={{ color: item.color }}>
            {item.grade}
            <button onClick={() => removeThisGrade(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;


  