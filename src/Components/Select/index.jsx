import React, { Fragment, useState } from "react";

const Select = ({ options, name }) => {
  const [value, setValue] = useState("None")
  const [isOpen, setIsOpen] = useState(false)

  window.addEventListener('click', (e) => {
    if (e.target !== document.querySelector(`.select`) && e.target !== document.querySelector(`.option`))
      setIsOpen(false);
  })

  return (
    <Fragment>
      <div tabIndex={0} className="select" name={name} value={value} onClick={() => setIsOpen(prev => !prev)}>
        {value}
      </div>
      {isOpen &&
        <div className="option no-select">
          <ul>
            {options.map((item, index) => {
              return (
                <li key={index} onClick={() => { setValue(item); setIsOpen(false) }}>{item}</li>
              )
            })}
          </ul>
        </div>
      }
    </Fragment>
  );
}

export default Select