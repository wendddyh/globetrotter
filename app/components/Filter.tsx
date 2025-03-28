
interface FilterProps {
  regions: string[];
  selected: string[];
  onAdd: (region: string) => void;
  onRemove: (region: string) => void;
  onReset: ()=> void
}

export default function Filter({regions, selected, onAdd, onRemove, onReset} : FilterProps) {

  const regionToggle = ((region: string) => selected.includes(region) ? onRemove(region): onAdd(region) )
  return (
    <>
        <div className="justify-items-center gap-3 w-full pt-[2%] pb-[2%] align-center ">
          <h2 className="text-lg font-semibold text-brown-990 mb-4"> I want to see the country by region:</h2>
          <div>
            {regions.map((region) => (
              <button key={region} onClick={(() => regionToggle(region))}
                className={`px-4 py-1 rounded-full gap-3 bg-orange-500 text-white text-sm font-medium transition-all duration-200
                border border-yellow-400 hover:bg-orange-400 transition ${selected.includes(region) ? 'bg-pink-400 text-white shadow-md' : 'bg-orange-500 text-white'}`}>{region}
              </button>
            ))}
          {selected.length > 0 && (
            <button onClick={onReset} className="ml-[2px] p-[3px] text-sm bg-red-500 rounded text-white hover:text-black">
              Clear all filters
            </button>
          )}
          </div>
        </div>
    </>
  )
}
