export default function Button({
  children,
  type = 'button',
  bgColor = 'bg-pink-600',
  bgColorHover = 'hover:bg-pink-700',
  textColor = 'text-white',
  ...rest
}) {
  return (
    <button
      {...rest}
      type={type}
      className={`${bgColor} ${bgColorHover} ${textColor} ${rest.className} px-4 py-2 rounded-md shadow-md duration-300`}
    >
      {children}
    </button>
  );
}
