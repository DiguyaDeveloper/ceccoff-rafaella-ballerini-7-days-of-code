import React from "react";

import "./radio-button.css";

type RadioButtonProps = {
  id: string;
  name: string;
  onSelect: (id: string) => void;
  image?: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  image,
  onSelect,
}) => {
  return (
    <label className="custom-radio">
      <input type="radio" name="radio" onClick={() => onSelect(id)} />
      <span className="radio-btn">
        <i className="las la-check"></i>
        <div className="hobbies-icon">
          {image && <img src={image} />}
          <h3 className="">{name}</h3>
        </div>
      </span>
    </label>
  );
};
