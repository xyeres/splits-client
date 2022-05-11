import React, { BaseSyntheticEvent, SyntheticEvent, useRef, useState } from "react";
import Checkbox, { Tag } from "../../components/CheckboxList/Checkbox";

type Props = {}

type Artist = {
  name: string,
  id: string,
  gender?: string,
  mass?: string,
  height?: number,
  skin_color?: number,
  birth_year?: string,
}

type Planet = {
  name: string,
  id: string,
  url?:string,
}

const AssetDetail: React.FC = ({ }: Props) => {

  const artistsInputRef = useRef<HTMLInputElement>(null);
  const planetsInputRef = useRef<HTMLInputElement>(null);

  const [artists, setArtists] = useState([] as Tag[]);
  const [artistsIsLoading, setArtistsIsLoading] = useState(false);

  const [planets, setPlanets] = useState([] as Tag[]);
  const [planetsIsLoading, setPlanetsIsLoading] = useState(false);

  // DATA FETCHERS
  const fetchArtists = async (q: string) => {
    setArtistsIsLoading(true);
    const res = await fetch(`https://swapi.dev/api/people/?search=${q}`);
    const json = await res.json();
    const people: Artist[] = [];

    json.results.map((p: Artist) => {
      people.push({ name: p.name, id: `${p.gender}${p.mass}${p.height}${p.skin_color}${p.birth_year}` });
    });
    let top6 = people.slice(0, 6);
    setArtists(top6);
    setArtistsIsLoading(false);
  };

  const fetchPlanets = async (q: string) => {
    setPlanetsIsLoading(true);
    const res = await fetch(`https://swapi.dev/api/planets/?search=${q}`);
    const json = await res.json();
    const buffer: Planet[] = [];

    json.results.map((p: Planet) => {
      buffer.push({ name: p.name, id: `${p.url}` });
    });
    let top6 = buffer.slice(0, 6);
    setPlanets(top6);
    setPlanetsIsLoading(false);
  };

  // HANDLERS
  const handleSubmit = (e: SyntheticEvent) => {

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
          <div onClick={() => artistsInputRef.current?.focus()} className='relative'>
            <Checkbox
              placeholder='Add artists...'
              label="Artists"
              inputName="artists"
              data={artists}
              loading={artistsIsLoading}
              onInputChange={(e: { target: { value: string } }) => fetchArtists(e.target.value)}
              inputRef={artistsInputRef}
            />
          </div>
          <div onClick={() => planetsInputRef.current?.focus()} className='relative'>
            <Checkbox
              placeholder='Add releases...'
              label="Releases"
              inputName="releases"
              data={planets}
              loading={planetsIsLoading}
              onInputChange={(e: { target: { value: string } }) => fetchPlanets(e.target.value)}
              inputRef={planetsInputRef}
            />
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
      </div >
    </div >
  );
};

export default AssetDetail;