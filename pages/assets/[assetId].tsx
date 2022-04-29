import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { BaseSyntheticEvent, ChangeEvent, EventHandler, KeyboardEvent, SyntheticEvent, useCallback, useEffect, useState } from 'react'


type Props = {}

const AssetDetail: React.FC = ({ }: Props) => {

    const [artistTags, setArtistTags] = useState(['Will Reagan'])
    const [artistTagInput, setArtistTagInput] = useState('')

    const removeTag = (tagToRemove: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setState(state.filter((tag) => tag !== tagToRemove))
    }

    const handleAddTag = (e: KeyboardEvent) => {
        if (e.code === 'Backspace' || e.code === 'Delete') {
            setArtistTags((state) => {
                let newState = [...state]
                newState.pop()
                return [...newState]
            })
            return;
        }

        if (artistTagInput.length < 1) return;
        
        if (e.code === 'Enter' || e.code === 'Semicolon' || e.code === 'Comma') {
            setArtistTags((state) => [...state, artistTagInput])
            setArtistTagInput('')
            return;
        }
    }

    const handleArtistInputChange = (e: BaseSyntheticEvent) => {
        if (e.target.value.includes(';')) return;
        if (e.target.value.includes(',')) return;
        setArtistTagInput(e.target.value)
    }

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
                    <ul className='relative form-input pt-6 pl-2 h-full flex-wrap flex items-center m-0'>
                        {artistTags.map((tag, index) => {
                            return (
                                <li key={`${tag + index}`} className='inline-block m-1 rounded-md text-xs bg-gray-accent p-2'>
                                    <span onClick={() => removeTag(tag, artistTags, setArtistTags)} className='cursor-pointer pr-1 rounded-md'>
                                        <FontAwesomeIcon icon={faX} />
                                    </span>
                                    <span>{tag}</span>
                                </li>
                            )
                        })}
                        <li className='inline-block'>
                            <label className='form-input-label' htmlFor='artists'>Artists</label>
                            <input onKeyDown={handleAddTag} onChange={handleArtistInputChange} value={artistTagInput} className='h-full ml-1 outline-none bg-transparent' type='text' />
                        </li>
                    </ul>
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
    )
}

export default AssetDetail