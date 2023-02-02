import React from "react";

export default function Dropdown() {
  const dropdownOptions = [];
  for (let i = 0; i <= 20; i++) {
    dropdownOptions.push(i);
  }

  return dropdownOptions.map((dropdownOption) => {
    return <option value={dropdownOption}>{dropdownOption}</option>;
  });
}
