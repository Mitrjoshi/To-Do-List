const Extras = ({ children, title, onClick }) => {
  return (
    <button onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Extras;
