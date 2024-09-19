import { useState } from "react";
import DisplayData from "./DisplayData";

function PersonsForm() {
  const [rangeValue, setRangeValue] = useState(50);
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    age: '',
    phone: '',
    email: '',
    group: 'group1',
    courses: [],
  });

  const [submittedDataList, setSubmittedDataList] = useState([]); // Store multiple submissions

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDataList((prevDataList) => [...prevDataList, formData]); // Add new form data to the array
    resetForm(); // Reset form after submission
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        courses: checked
          ? [...prevData.courses, value]
          : prevData.courses.filter((course) => course !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDelete = (index) => {
    setSubmittedDataList((prevDataList) =>
      prevDataList.filter((_, i) => i !== index)
    );
  };

  const resetForm = () => {
    setFormData({
      name: '',
      surName: '',
      age: '',
      phone: '',
      email: '',
      group: 'group1',
      courses: [],
    });
    setRangeValue(50); // Reset range
  };

  const handleDeleteAll = () => {
    setSubmittedDataList([]); // Clear the list of students
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form Inputs */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="surName">Sur Name:</label>
        <input
          type="text"
          id="surName"
          name="surName"
          value={formData.surName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="range">Range:</label>
        <input
          type="range"
          id="range"
          name="range"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <span>{rangeValue}</span>
        <br />
        {/* Radio buttons and checkboxes */}
        <fieldset>
          <legend>Chose your Group</legend>
          <input
            type="radio"
            id="group1"
            name="group"
            value="group1"
            onChange={handleInputChange}
            checked={formData.group === "group1"}
          />
          <label htmlFor="group1">Group 1</label>
          <br />
          <input
            type="radio"
            id="group2"
            name="group"
            value="group2"
            onChange={handleInputChange}
            checked={formData.group === "group2"}
          />
          <label htmlFor="group2">Group 2</label>
          <br />
          <input
            type="radio"
            id="group3"
            name="group"
            value="group3"
            onChange={handleInputChange}
            checked={formData.group === "group3"}
          />
          <label htmlFor="group3">Group 3</label>
        </fieldset>
        <br />
        <fieldset>
          <legend>Choose Your Course</legend>
          <input
            type="checkbox"
            id="css"
            name="course"
            value="css"
            onChange={handleInputChange}
            checked={formData.courses.includes("css")}
          />
          <label htmlFor="css">CSS</label>
          <br />
          <input
            type="checkbox"
            id="html"
            name="course"
            value="html"
            onChange={handleInputChange}
            checked={formData.courses.includes("html")}
          />
          <label htmlFor="html">HTML</label>
          <br />
          <input
            type="checkbox"
            id="js"
            name="course"
            value="js"
            onChange={handleInputChange}
            checked={formData.courses.includes("js")}
          />
          <label htmlFor="js">JS</label>
        </fieldset>

        <button type="submit">Add new student</button>
        <button type="button" onClick={resetForm}>Reset Form</button> {/* Reset button */}
        <button type="button" onClick={handleDeleteAll}>Delete All Students</button> {/* Delete all button */}
      </form>

      {submittedDataList.map((data, index) => (
        <DisplayData
          key={index}
          data={data}
          onDelete={() => handleDelete(index)} // Pass the delete handler
        />
      ))}
    </div>
  );
}

export default PersonsForm;





