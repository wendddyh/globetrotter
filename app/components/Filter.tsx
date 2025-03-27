
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
        <div className="justify-center gap-2 flex flex-wrap w-full pt-[5%] pb-[5%] align-center bg-[#ffbd59]">
          <h2 className="text-lg font-semibold text-brown-990 mb-4"> I want to see the country by region:</h2>
          {regions.map((region) => (
            <button key={region} onClick={(() => regionToggle(region))}
              className={`px-4 py-1 rounded-full bg-orange-500 text-white text-sm font-medium transition-all duration-200
              border border-yellow-400 hover:bg-orange-400 transition ${selected.includes(region) ? 'bg-blue-400 text-white shadow-md' : 'bg-orange-500 text-white'}`}>{region}
            </button>
          ))}
          {selected.length > 0 && (
            <button onClick={onReset} className="mt-4 text-sm bg-white text-red-300 underline hover:text-red-500">
              Clear all filters
            </button>
          )}
        </div>
    </>
  )
}
