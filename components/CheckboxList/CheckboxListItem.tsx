import React, { KeyboardEvent } from "react";
import { Tag } from "./Checkbox";

type Props = {
  tag: Tag,
  isChecked: boolean,
  onTagAdded: Function,
  inputName: string,
}

function CheckboxListItem({ tag, inputName, isChecked, onTagAdded }: Props) {

  const handleTagAddedKeys = (e: KeyboardEvent, tag: Tag) => {
    if (e.code === "Space") {
      onTagAdded({ target: { value: tag } });
    }
  };

  const handleTagAdded = (tag: Tag) => {
    onTagAdded({ target: { value: tag } });
  };

  return (
    <li tabIndex={0}
      onClick={() => handleTagAdded(tag)}
      onKeyDown={(e) => handleTagAddedKeys(e, tag)}
      className='hover:bg-gray-highlight hover:rounded-lg px-3 py-2 flex flex-row justify-between items-center'
    >
      <label>{tag.name}</label>
      <input name={inputName}
        onChange={() => handleTagAdded(tag)}
        value={tag.id}
        tabIndex={-1}
        type="checkbox"
        checked={isChecked}
      />
    </li>
  );
}

export default CheckboxListItem;