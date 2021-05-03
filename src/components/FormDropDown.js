import React, { useState, useEffect } from 'react';

const FormDropDown = ({
  id,
  text,
  forLabel,
  name,
  placeholder,
  dropDownData,
  formMethod,
  required,
  defaultValue,
  onChange
}) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    defaultValue && setSelected(defaultValue);
  }, [defaultValue]);

  return (
    <div>
      {text && (
        <label htmlFor={forLabel} className="c-form-label">
          {text}
          {required && <abbr className="c-form-required">*</abbr>}
        </label>
      )}
      <div className="c-form-select">
        <select
          id={id}
          data-test-id={id}
          name={name}
          className="c-form-select__dropdown"
          ref={formMethod}
          required={required}
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);

            onChange && onChange(e.target.value);
          }}
        >
          <option value="" disabled={required}>
            {placeholder}
          </option>
          {dropDownData.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

FormDropDown.defaultProps = {
  value: false
};

export default FormDropDown;
