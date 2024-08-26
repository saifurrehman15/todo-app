function Buttons({ onClick, text, backColor, color, pd, width }) {
  const buttonStyles = {
    backgroundColor: backColor,
    color: color,
    padding: pd,
    width: width,
  };

  return (
    <button onClick={onClick} style={buttonStyles}>
      {text}
    </button>
  );
}

export default Buttons;
