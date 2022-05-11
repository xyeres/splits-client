import React from "react";
import { Tag } from "./Checkbox";
import CheckboxListItem from "./CheckboxListItem";

type Props = {
  data: any[],
  query: string,
  tags: Tag[],
  inputName: string,
  onTagAdded: Function,
}

const CheckboxList = (props: Props) => {
  const isVisible = props.query && props.data.length > 0;
  const isChecked = (tags: Tag[], id: string) => {
    const ids = tags.map(a => {
      return a.id;
    });

    return (ids.includes(id));
  };
  return (
    <>
      {isVisible && (
        <div className="mt-1 transition-all bg-dark-active w-full rounded-lg  border border-gray-highlight shadow-lg">
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
          </ul>
        </div>
      )}
    </>
  );
};

export default CheckboxList;