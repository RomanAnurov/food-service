import React from "react";
import "./InputSearch.scss";



function InputSearch(props) {
  const { text, name, src, placeholder } = props;
  return (
    <form className={`search search_type_${name}`}>
      <input
        className={`search__input search__input_type_${name}`}
        placeholder={placeholder}
      />
      <button className={`search__button search__button_type_${name}`}>
        <img src={src} className={`search__icon search__icon_type_${name}`} alt="иконка" />
       {text}
      </button>
    </form>
  );
}

export default InputSearch;
