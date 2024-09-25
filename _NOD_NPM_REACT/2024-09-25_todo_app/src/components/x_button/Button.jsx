import './Button.css'; // Import the CSS

const Button = (props) => {
    const { handleClick, children, color = 'primary' } = props; // default color is 'primary'
  
    return (
      <button
        className={`button button-${color}`} // Dynamically apply class based on color prop
        onClick={handleClick}
      >
        {children || "Click Me!"}
      </button>
    );
  };
  
  export default Button;
