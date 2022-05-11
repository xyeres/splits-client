import React from "react";
import { Tag } from "./Checkbox";
import CheckboxListItem from "./CheckboxListItem";

type Props = {
  data: any[],
  query: string,
  tags: Tag[],
  inputName: string,
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
    <div ref={props.divRef} className={isVisible ? "absolute min-h-[100px] group-focus:text-red z-10 rounded-t-none border-0 -mt-[6px] transition-all bg-dark-active w-full rounded-lg border-gray-accent shadow-md" : "transition-all -left-[1200px] bg-dark-active rounded w-full absolute opacity-0"}>
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
            <p>No results for {props.query}</p>
          </div>
        )
      }
    </div>
  );
};

export default CheckboxList;