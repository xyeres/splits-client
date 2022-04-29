import { faCheckCircle, faCircleNotch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { BaseSyntheticEvent, ChangeEvent, EventHandler, KeyboardEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";


type Props = {}

const AssetDetail: React.FC = ({ }: Props) => {

  const [artistTags, setArtistTags] = useState(["Will Reagan"]);
  const [artistTagInput, setArtistTagInput] = useState("");
  const [loading, setloading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const artistTagInputRef = useRef(null);

  const searchPeople = async (q: string) => {
    setloading(true);
    const res = await fetch(`https://swapi.dev/api/people/?search=${q}`);
    const json = await res.json();
    const names: string[] = [];

    json.results.map((p) => {
      names.push(p.name);
    });
    let top6 = names.slice(0, 6);
    setFilteredResults(top6);
    setloading(false);
  };

  // When user is typing into field start api search and return values in list

  // HELPERS
  const checkMark = (arr: string[], str: string) => {
    return (arr.includes(str));
  };

  const removeTag = (tagToRemove: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState(state.filter((tag) => tag !== tagToRemove));
  };

  const toggleTag = (tagContent: string, stateStore: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    // Check for index
    const index = stateStore.indexOf(tagContent);
    // If we already have this tag in the store, remove it
    if (index !== -1) {
      const newState = [...stateStore];
      newState.splice(index, 1);
      setState([...newState]);
      return;
    }
    // Otherwise add the tag
    setState((state) => [...state, tagContent]);
  };

  // HANDLERS
  const handleTagAddFromResults = (tag: string) => {
    toggleTag(tag, artistTags, setArtistTags);
    setArtistTagInput("");
  };

  const handleAddTagWithKeys = (e: KeyboardEvent) => {
    const backspaceTyped = e.code === "Backspace" || e.code === "Delete";
    const noInput = artistTagInput.length === 0;

    if (backspaceTyped && noInput) {
      setArtistTags((state) => {
        let newState = [...state];
        newState.pop();
        return [...newState];
      });
      return;
    }

    if (noInput) return;

    if (e.code === "Enter" || e.code === "Semicolon" || e.code === "Comma") {
      toggleTag(artistTagInput, artistTags, setArtistTags);
      setArtistTagInput("");
    }
  };

  const handleArtistInputChange = (e: BaseSyntheticEvent) => {
    if (e.target.value.includes(";")) return;
    if (e.target.value.includes(",")) return;
    setArtistTagInput(e.target.value);
    searchPeople(e.target.value);
    // setFilteredResults(results.filter((item: string) => item.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  return (
    <div className='flex w-full h-full justify-center'>
      <div className='m-5 p-5 max-w-screen-sm bg-dark-primary rounded-md w-full'>
        <h1 className='text-center text-2xl font-light p-5'>Edit &quot;Another Day&quot;</h1>
        <form className='w-full form-control'>
          <div className='form-input-group'>
            <label className='form-input-label' htmlFor='title'>Title</label>
            <input name='title' type="text" className='form-input' />
          </div>
          <div className='form-input-group'>
            <label className='form-input-label' htmlFor='isrc'>ISRC</label>
            <input name='isrc' type="text" className='form-input' />
          </div>
          <div className='form-input-group'>
            <label className='form-input-label' htmlFor='pubrate'>Mechanical Rate</label>
            <input name='pubrate' type="text" placeholder='0.091' className='form-input' />
          </div>
          <div onClick={() => artistTagInputRef.current?.focus()} className='relative'>
            <div className='form-input pt-7 pl-2 h-full  flex-wrap flex items-center m-0'>
              {artistTags.map((tag, index) => {
                return (
                  <span key={`${tag + index}`} className='inline-block m-1 rounded-md text-xs bg-purple-500 py-1 px-[6px]'>
                    <span onClick={() => removeTag(tag, artistTags, setArtistTags)} className='cursor-pointer pr-2'>
                      <FontAwesomeIcon size='xs' icon={faX} />
                    </span>
                    <span>{tag}</span>
                  </span>
                );
              })}
              <span className='self-stretch'>
                {loading && (
                  <span className='absolute text-gray-500 right-3 top-2'>
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  </span>
                )}
                <label className='form-input-label bg-dark-active w-11/12 top-0 py-2' htmlFor='artists'>Artists</label>
                <input ref={artistTagInputRef} placeholder='Add an artist...' onKeyDown={handleAddTagWithKeys} onChange={handleArtistInputChange} value={artistTagInput} className='h-full ml-1 outline-none text-xs bg-transparent' type='text' />
              </span>

            </div>

            {artistTagInput && (
              <div className='mt-[2px] bg-dark-active w-full transition-all rounded-lg  border border-gray-highlight shadow-lg'>
                <ul className='divide-y text-sm cursor-pointer divide-dark-primary'>
                  {filteredResults.map((item) => {
                    return (
                      <li key={item} onClick={() => handleTagAddFromResults(item)}
                        className='px-3 py-2 flex flex-row justify-between'
                      >
                        {item}
                        {
                          checkMark(artistTags, item)
                                                    && <span className='text-green-500'><FontAwesomeIcon icon={faCheckCircle} /></span>
                        }
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

          </div>
          <div className='custom-select'>
            <select>
              <option value="0">Asset type:</option>
              <option value="1">Song</option>
              <option value="2">Video</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetDetail;