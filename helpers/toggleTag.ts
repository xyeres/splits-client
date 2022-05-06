import React from "react";
import { Artist } from "../pages/assets/[assetId]";

export const toggleTag = (artist: Artist, stateStore: Artist[],
  setState: React.Dispatch<React.SetStateAction<Artist[]>>) => {
  
  // Get Ids of artists
  const ids = stateStore.map((i) => {
    return i.id;
  });

  // Check for index
  const index = ids.indexOf(artist.id);

  // If we already have this tag in the store, remove it
  if (index !== -1) {
    const newState = [...stateStore];
    newState.splice(index, 1);
    setState([...newState]);
    return;
  }

  // Otherwise add the tag
  setState((state) => [...state, artist]);
};