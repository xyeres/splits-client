import { faCircleNotch, faCompactDisc, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import CheckboxList from "./CheckboxList";
import { toggleTag } from "../../helpers/toggleTag";

type Props = {
  inputRef: any,
  data: any[],
  loading: boolean,
  onInputChange?: Function,
  placeholder: string,
  inputName: string,
  label: string,
}

export interface Tag {
  id: string,
  name: string,
}

const Checkbox = (props: Props) => {
  const [tags, setTags] = useState([] as Tag[]);
  const [input, setInput] = useState("");
  const resultsPanelRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const checkIfClickedOutside = (e:MouseEvent) => {
      if (input !== "" && resultsPanelRef.current && !resultsPanelRef.current.contains(e.target)) {
        setInput("");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [input]);

  const handleInputChange = (e: BaseSyntheticEvent) => {
    if (e.target.value.includes(";")) return;
    if (e.target.value.includes(",")) return;
    setInput(e.target.value);
    const { onInputChange } = props;
    if (onInputChange) {
      onInputChange({ target: { value: e.target.value } });
    }
  };

  const handleAddTagWithKeys = (e: KeyboardEvent) => {
    const backspaceTyped = e.code === "Backspace" || e.code === "Delete";
    const noInput = input.length === 0;

    if (backspaceTyped && noInput) {
      setTags((state) => {
        let newState = [...state];
        newState.pop();
        return [...newState];
      });
      return;
    }

    if (noInput) return;

    if (e.code === "Enter" || e.code === "Semicolon" || e.code === "Comma") {
      return;
    }
  };


  return (
    <>
      <div className='form-input pt-7 pl-2 h-full relative flex-wrap flex items-center m-0'>
        {tags.map((item) => {
          return (
            <span key={`${item.id}`} className='inline-block m-[5px] rounded-md text-xs bg-blue-500 hover:border hover:border-blue-400 hover:m-[4px] py-1 px-[6px]'>
              <span onClick={() => toggleTag(item, tags, setTags)} className='text-blue-400 border rounded px-[2px] p-[0px] border-blue-400 hover:text-blue-300 hover:border-blue-300 cursor-pointer mr-2 w-2 h-2 aspect-square'>
                <FontAwesomeIcon size='xs' icon={faX} />
              </span>
              <label>{item.name}
                <input checked readOnly hidden value={item.id} name={props.inputName} type="checkbox" />
              </label>
            </span>
          );
        })}
        <span className='self-stretch'>
          {props.loading && (
            <span className='absolute text-gray-500 right-3 top-2'>
              <FontAwesomeIcon icon={faCompactDisc} spin />
            </span>
          )}
          <label className='form-input-label bg-dark-active w-11/12 top-0 py-2' htmlFor={props.inputName}>{props.label}</label>
          <input ref={props.inputRef} placeholder={props.placeholder} onKeyDown={handleAddTagWithKeys} onChange={handleInputChange} value={input} className='h-full ml-1 outline-none text-xs bg-transparent' type='text' />
        </span>
      </div>
      <CheckboxList
        query={input}
        data={props.data}
        tags={tags}
        divRef={resultsPanelRef}
        inputName={props.inputName}
        onTagAdded={(e: { target: { value: Tag } }) =>
          toggleTag(e.target.value, tags, setTags)}
      />
    </>
  );
};

export default Checkbox;