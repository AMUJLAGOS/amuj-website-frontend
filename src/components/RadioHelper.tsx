//
import React from "react";

interface RadioProps {
  label: string;
  checkName: string;
  setValue: React.Dispatch<React.SetStateAction<never[]>>;
  filterList: never[];
}

function RadioHelper({ label, checkName, setValue, filterList }: RadioProps) {
  return (
    <div className="flex items-center p-2">
      <input
        type="radio"
        name={checkName}
        id={checkName}
        value={label.toLowerCase()}
        onChange={(e) => setValue([])}
      />
      <label htmlFor="checkbox" id={checkName} className="ml-2 font-normal">
        {label}
      </label>
    </div>
  );
}

export default RadioHelper;
