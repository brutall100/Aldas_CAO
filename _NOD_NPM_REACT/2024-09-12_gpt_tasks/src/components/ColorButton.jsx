function ColorButton(props) {
  const buttonStyle = {
    backgroundColor: props.color,
    color: props.color === "white" ? "black" : "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 1s"
  }
  return <button style={buttonStyle}>Spalvotas mygtukas</button>;
}

export default ColorButton;
