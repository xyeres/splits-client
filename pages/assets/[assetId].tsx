import { faCheckCircle, faCircleNotch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { BaseSyntheticEvent, ChangeEvent, EventHandler, KeyboardEvent, MouseEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import CheckboxListItem from "../../components/CheckboxList/CheckboxListItem";
import { toggleTag } from "../../helpers/toggleTag";


type Props = {}

export type Artist = {
  name: string,
  id: string,
  gender?: string,
  mass?: string,
  height?: number,
  skin_color?: number,
  birth_year?: string,
}

const AssetDetail: React.FC = ({ }: Props) => {

  const [artistTags, setArtistTags] = useState([] as Artist[]);
  const [artistTagInput, setArtistTagInput] = useState("");
  const [loading, setloading] = useState(false);
  const [results, setResults] = useState([] as Artist[]);
  const artistTagInputRef = useRef(null);
  const resultsPanelRef = useRef(null)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (artistTagInput !== "" && resultsPanelRef.current && !resultsPanelRef.current.contains(e.target)) {
        setArtistTagInput("");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [artistTagInput]);


  const searchPeople = async (q: string) => {
    setloading(true);
    const res = await fetch(`https://swapi.dev/api/people/?search=${q}`);
    const json = await res.json();
    const people: Artist[] = [];

    json.results.map((p: Artist) => {
      people.push({ name: p.name, id: `${p.gender}${p.mass}${p.height}${p.skin_color}${p.birth_year}` });
    });
    let top6 = people.slice(0, 6);
    setResults(top6);
    setloading(false);
  };

  // When user is typing into field start api search and return values in list

  // HELPERS
  const isChecked = (artistTags: Artist[], id: string) => {
    const ids = artistTags.map(a => {
      return a.id;
    });

    return (ids.includes(id));
  };

  const addTag = (tag: Artist) => {
    toggleTag(tag, artistTags, setArtistTags);
  };

  const removeTag = (tagToRemove: Artist, state: Artist[], setState: React.Dispatch<React.SetStateAction<Artist[]>>
  ) => {
    setState(state.filter((tag) => tag.id !== tagToRemove.id));
  };

  // HANDLERS
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
      return;
    }
  };

  const handleArtistInputChange = (e: BaseSyntheticEvent) => {
    if (e.target.value.includes(";")) return;
    if (e.target.value.includes(",")) return;
    setArtistTagInput(e.target.value);
    searchPeople(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    setArtistTagInput("");
  };

  return (
    <div className='flex w-full h-full justify-center'>
      <div className='m-5 p-5 max-w-screen-sm bg-dark-primary rounded-md w-full'>
        <h1 className='text-center text-2xl font-light p-5'>Edit &quot;Another Day&quot;</h1>
        <form onSubmit={handleSubmit} method="post" action="/api/send" className='w-full form-control'>
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
              {artistTags.map((artist) => {
                return (
                  <span key={`${artist.id}`} className='inline-block m-[5px] rounded-md text-xs bg-purple-500 hover:border hover:border-purple-400 hover:m-[4px] py-1 px-[6px]'>
                    <span onClick={() => removeTag(artist, artistTags, setArtistTags)} className='text-purple-400 border rounded px-[2px] p-[0px] border-purple-400 hover:text-purple-300 hover:border-purple-300 cursor-pointer mr-2 w-2 h-2 aspect-square'>
                      <FontAwesomeIcon size='xs' icon={faX} />
                    </span>
                    <label>{artist.name}
                      <input checked readOnly hidden value={artist.id} name="artists" type="checkbox" />
                    </label>
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

            <div ref={resultsPanelRef}>
              {artistTagInput && results.length > 0 && (
                <div className='mt-[2px] bg-dark-active w-full transition-all rounded-lg  border border-gray-highlight shadow-lg'>
                  <ul className='divide-y text-sm cursor-pointer divide-dark-primary'>
                    {results.map((artist) => {
                      return (
                        <CheckboxListItem
                          addTag={addTag}
                          key={artist.id}
                          tag={artist}
                          isChecked={isChecked(artistTags, artist.id)}
                        />
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

          </div>
          <div className='custom-select'>
            <select>
              <option value="0">Asset type:</option>
              <option value="1">Song</option>
              <option value="2">Video</option>
            </select>
          </div>
          <button className="bg-gray-accent p-3 rounded-md px-5" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AssetDetail;