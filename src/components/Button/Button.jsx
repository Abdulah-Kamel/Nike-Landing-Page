const Button = ({ label, iconUrl, bacgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${bacgroundColor ? `${bacgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white'} rounded-full ${fullWidth && 'w-full'}
    `}>
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow Right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
