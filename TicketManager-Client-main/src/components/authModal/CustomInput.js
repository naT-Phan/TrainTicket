const CustomInput = ({
  title,
  inputType,
  placeHolder,
  name,
  onChange,
  value,
  error,
}) => {
  let className = "bg-gray-100 focus:border-gray-300 ";
  if (error) {
    className = "bg-white border-red-400  ";
  }

  return (
    <div>
      <div className="opacity-70 text-sm ">{title}</div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeHolder}
        className={`w-full px-6 py-2 rounded-lg mt-2 outline-none  border-2  border-transparent ${className}`}
      />

      {error && <ErrorNotify>{error}</ErrorNotify>}
    </div>
  );
};
export default CustomInput;

export const ErrorNotify = ({ children, className = "" }) => {
  return (
    <div
      className={`opacity-70 text-red-500 font-normal text-[12px] ml-2 mt-2 flex items-center gap-2 ${className}`}
    >
      <i class="fa-solid fa-triangle-exclamation"></i>
      <span className="mt-[1px]">{children}</span>
    </div>
  );
};
