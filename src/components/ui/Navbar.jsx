import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed w-full bg-white dark:bg-gray-950 top-0 py-2 pl-2 flex items-center border-b-gray-700 border-b-1'>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-black dark:text-white">BeyondChats</h1> {/* Added a main title */}
        </nav>
    )
}

export default Navbar
