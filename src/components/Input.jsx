import {useId, forwardRef} from 'react';

const Input = forwardRef(function Input({label, type = 'text', ...rest}, ref) {
  const id = useId();

  return (
    <div className=' w-full'>
      {label && (
        <label htmlFor={id} className=' inline-block mb-1 pl-1'>
          {label}
        </label>
      )}
      <input
        id={id}
        {...rest}
        type={type}
        className={`${rest.className} w-full px-3 py-2 border border-gray-200 rounded-lg outline-none bg-white text-black focus:bg-gray-50 duration-200 `}
        ref={ref}
      />
    </div>
  );
});

export default Input;
