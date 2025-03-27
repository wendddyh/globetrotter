import { X, Earth } from "lucide-react";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  searchCountry: string;
  setSearchCountry: (value: string) => void
}

export default function SearchBar({searchCountry, setSearchCountry}: SearchBarProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(event.target.value);
  }

  return (
    <>
    <div className="flex items-center gap-4 mb-6">
      <label htmlFor="search" className="text-lg font-medium whitespace-nowrap">Let's travel to:</label>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
            <input className="rounded-full sm:w-20px bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 placeholder:text-slate-400 focus:ring focus:outline-none"
                  type="text"
                  value={searchCountry}
                  onChange={handleChange}
                  placeholder="search the globe.."/>
            <button onClick={() => {if (searchCountry) setSearchCountry('')}} type="button" className="text-lg transition-all duration-500 transform hover:scale-110">
              <span className={`transition-opacity duration-300 ${searchCountry ? "opacity-0 scale-0 absolute" :"opacity-100 scale-100"}`} >🌍</span>
              <span className={`transition-opacity duration-300 ${searchCountry ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute"}`}>❌</span>
            </button>
          </form>
    </div>{}
    </>
  )
}
