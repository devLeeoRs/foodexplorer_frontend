import { Select } from "./styles";
import { LuChevronDown, LuChevronUp, LuCheck } from "react-icons/lu";
import { useState, useRef } from "react";

export function InputSelect({ options }) {
  const [select, setSelect] = useState("Selecione a categoria");

  const option = useRef();

  function addSelect(e) {
    setSelect(e.target.value);

    // Se o evento for um clique do mouse OU um toque (touch)
    if (e.type === "click" || e.type === "touchend") {
      option.current.click();
    }
  }

  return (
    <Select className="select">
      <div id="category-select">
        <label htmlFor="options-view-button" ref={option}>
          Categoria
        </label>
        <input type="checkbox" id="options-view-button"></input>

        <div id="select-button">
          <div id="selected-value">{select}</div>
          <div id="chevrons">
            <LuChevronDown id="chevron-down" />
            <LuChevronUp id="chevron-up" />
          </div>
        </div>
      </div>

      <ul id="options">
        {options &&
          options.map((option) => (
            <li className="option" key={String(option.id)}>
              <input
                onClick={addSelect}
                type="radio"
                name="category"
                value={option.name}
                data-label={option.name}
              />

              <span className="label">{option.name}</span>
              <LuCheck id="check" />
            </li>
          ))}
      </ul>
    </Select>
  );
}
