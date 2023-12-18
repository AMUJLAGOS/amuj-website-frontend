//

"use client";
import React, { useState } from "react";

interface CheckProps {
  label: string;
  checkName: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  filterList: never[];
}

function CheckHelper({ label, checkName, setValue, filterList }: CheckProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e: any) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    if (isChecked) {
      setValue([...filterList, e.target.value]);
    } else {
      const remove = filterList.filter((obj) => obj !== e.target.value);
      setValue(remove);
    }
  };
  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        name={checkName}
        id={checkName}
        checked={isChecked}
        value={label.toLowerCase()}
        onChange={(e) => handleCheckbox(e)}
      />
      <label htmlFor="checkbox" className="ml-2 font-normal">
        {label}
      </label>
    </div>
  );
}

export default CheckHelper;
