const SubmitButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-[40px] text-[#f2f3f5] font-semibold bg-[#5865f2] rounded-[8px]"
    >
      Add
    </button>
  );
};

export default SubmitButton;
