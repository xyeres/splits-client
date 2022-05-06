import React, { KeyboardEvent, useState } from "react";
import { Artist } from "../../pages/assets/[assetId]";

type Props = {
  tag: Artist,
  addTag: Function,
  isChecked: boolean,
}

function CheckboxListItem({ tag, addTag, isChecked }: Props) {

  const handleAddTagKeyDown = (e: KeyboardEvent, tagContent: Artist) => {
    if (e.code === "Space") {
      addTag(tagContent);
    }
  };

  const handleAddTag = (tagContent: Artist) => {
    addTag(tagContent);
  };

  return (
    <li tabIndex={0}
      onClick={() => handleAddTag(tag)}
      onKeyDown={(e) => handleAddTagKeyDown(e, tag)}
      className='hover:bg-gray-highlight hover:rounded-lg px-3 py-2 flex flex-row justify-between items-center'
    >
      <label>{tag.name}</label>
      <input name="artists" onChange={() => handleAddTag(tag)} value={tag.id} tabIndex={-1} type="checkbox" checked={isChecked} />
    </li>
  );
}

export default CheckboxListItem;