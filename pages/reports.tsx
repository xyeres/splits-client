import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

type Props = {}

const reports: NextPage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const fromRef = useRef(null);
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && fromRef.current && !fromRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);



  return (
    <div className='m-14'>
      <form>
        <div className="wrapper">
          <div onClick={() => setOpen((isOpen) => !isOpen)} role="textbox" className='expander-input'>
            {inputVal ? inputVal : 'From?'}
          </div>
          <div className="bg-yellow-200" role="dialog" aria-modal="true" tabIndex={-1}>
            <div role="textbox" tabIndex={0}>
              <div className="input-wrapper">
                <input onChange={(e)=>setInputVal(e.target.value)} ref={fromRef} className={open ? "text-input transition-all scale-100 opacity-100 origin-bottom-left" : "opacity-0 scale-0 transition-all"} type='text' tabIndex={-1} aria-disabled="false" placeholder='From?' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reports;