import {useId, forwardRef} from 'react';

const Select = forwardRef(function Select({label, name, options, ...rest}, ref) {
  const id = useId();

  return (
    <div className=' w-full'>
      {label && (
        <label id={id} className=' inline-block mb-1 pl-1'>
          {label}
        </label>
      )}
      <select
        {...rest}
        name={name}
        id={id}
        className={`${rest.className} w-full px-3 py-2 border border-gray-200 rounded-lg outline-none bg-white text-black focus:bg-gray-50 duration-200`}
        ref={ref}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
