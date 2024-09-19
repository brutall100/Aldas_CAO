function DisplayData({ data, onDelete }) {
    return (
      <div>
        <h2>
          Person {data.name} Added: <button onClick={onDelete}>X</button>
        </h2>
        <p>Name: {data.name}</p>
        <p>Surname: {data.surName}</p>
        <p>Age: {data.age}</p>
        <p>Phone: {data.phone}</p>
        <p>Email: {data.email}</p>
        <p>Range: {data.range}</p>
        <p>Group: {data.group}</p>
        <p>Courses: {data.courses.join(", ")}</p>
      </div>
    );
  }
  
  export default DisplayData;
  