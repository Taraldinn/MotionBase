import React from "react";

function LanguageSelector({ setLanguage }) {
  return (
    <div>
      <label>Select Language: </label>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="EN">English</option>
        <option value="BN">Bangla</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
