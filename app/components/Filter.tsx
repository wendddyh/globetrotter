import { useState } from "react";

const Filter = () => {
  const [options, setOptions] = useState('Europe');

  function handleDropdown(){
    setOptions('Oceania');
  }

  return (
    <>
      <div>
        Filter by region:
        <div id="dropdownMenu" className='min-w-[150px] overflow-hidden absolute background-white '>
          <select value={options} onChange={e=> setOptions(e.target.value)}>
            <option value="europe">Europe</option>
            <option value="europe">Southeast Asia</option>
            <option value="europe">Oceania</option>
            <option value="europe">Middle Eastern</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filter
function setState(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}
