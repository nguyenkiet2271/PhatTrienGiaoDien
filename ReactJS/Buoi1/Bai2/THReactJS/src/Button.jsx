import './Button.css';

function Button({ type = 'primary', children, onClick }) {
  return (
    <button 
      className={`btn btn-${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
