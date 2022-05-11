import React from "react";
import { Tag } from "../components/CheckboxList/Checkbox";


export const toggleTag = (artist: Tag, stateStore: Tag[],
  setState: React.Dispatch<React.SetStateAction<Tag[]>>) => {
  
  // Get Ids of artists
  const ids = stateStore.map((i) => {
    return i.id;
  });

  // Check for index
  const index = ids.indexOf(artist.id);

  // If we already have this tag in the store, remove it
  while (index !== -1) {
    const newState = [...stateStore];
    newState.splice(index, 1);
    setState([...newState]);
    return;
  }

  // Otherwise add the tag
  setState((state) => [...state, artist]);
};