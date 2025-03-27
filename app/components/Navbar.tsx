import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='absolute w-full'>
        <nav className='text-white bg-[#fb8500] flex item-center justify-around m-2 md:mx-10 md:my-5'>
          <div className='flex justify-around md:gap-10 gap-2 text-display'>
            <div className='opacity:1 transform:none'>
              <a className="hover:opacity-90 highlight text-sm md:text-xl" href=''><style>{`scroll:smooth`}</style>About</a>
            </div>
          </div>
          <a className='text-sm md:text-2xl' href=''>GlobeTrotter</a>
        </nav>
      </div>



    </>
  )
}

export default Navbar
