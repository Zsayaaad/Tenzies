const Die = ({ hold, value, isHeld }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <button onClick={hold} style={styles}>
      {value}
    </button>
  );
};

export default Die;
