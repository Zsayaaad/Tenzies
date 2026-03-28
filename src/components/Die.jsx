const Die = ({ hold, value, isHeld }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#ffffff",
  };

  const pipsLookup = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
  };

  const pips = pipsLookup[value]?.map((pos) => (
    <span key={pos} className={`pip pip-${pos}`}></span>
  ));

  return (
    <button
      className="die-face"
      onClick={hold}
      style={styles}
      aria-label={`Die with value ${value}`}
    >
      {pips}
    </button>
  );
};

export default Die;
