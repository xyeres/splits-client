import React from "react";
import { Tag } from "./Checkbox";
import CheckboxListItem from "./CheckboxListItem";

type Props = {
  data: any[],
  isLoading: boolean,
  query: string,
  tags: Tag[],
  inputName: string,
  isFocused: boolean,
  onTagAdded: Function,
  divRef: React.RefObject<HTMLDivElement>,
}

const CheckboxList = (props: Props) => {
  const isVisible = props.query;

  const isChecked = (tags: Tag[], id: string) => {
    const ids = tags.map(a => {
      return a.id;
    });

    return (ids.includes(id));
  };


  return (
    <div ref={props.divRef} className={isVisible ? `absolute min-h-[100px] group-focus:text-red z-10 rounded-t-none -mt-[6px] bg-dark-active w-full rounded-lg  shadow-md ${props.isFocused ? "border-blue-600 border-2 outline-none border-t-0" : "border-t-0 border-2 border-dark-active"}` : "transition-all -left-[1200px] bg-dark-active rounded w-full absolute opacity-0"}>
      {props.data.length > 0 ? (
        <ul className='divide-y text-sm cursor-pointer divide-dark-primary'>
          {props.data.map((item) => {
            return (
              <CheckboxListItem
                onTagAdded={props.onTagAdded}
                key={item.id}
                tag={item}
                inputName={props.inputName}
                isChecked={isChecked(props.tags, item.id)}
              />
            );
          })}
        </ul>)
        :
        (
          <div className="w-full p-3 text-center flex items-center flex-wrap  justify-center text-gray-accent">
            {props.isLoading ? (<p>Loading...</p>) : props.data.length < 1 && (
              <p>No results for {props.query}</p>
            )}
          </div>
        )
      }
    </div>
  );
};

export default CheckboxList;