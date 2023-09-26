const InputField = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder={placeholder}
      className="bg-[#36383D] rounded-[8px] h-[45px] pl-4 outline-none text-[#f2f3f5] font-semibold"
      required
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
