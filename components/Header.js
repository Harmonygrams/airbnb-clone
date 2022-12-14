import Image from "next/image";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { Calendar } from 'react-date-range';
import { useState } from "react";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon, 
    UserCircleIcon, 
    UsersIcon, 
} from '@heroicons/react/solid'
const Header = () =>{
    const [searchInput, setSearchInput] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [selectionRange, setSelectionRange] = useState({
        startDate : new Date(), 
        endDate : new Date(), 
        key : 'selection'
    })
    const handleSelect = (ranges) =>{
        setSelectionRange(ranges.selection)
    }
    const updateNumberOfGuest = (e) =>{
        setNumberOfGuests(e.target.value)
    }
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"> 
            <div className='relative flex xitems-center h-10 cursor-pointer my-auto'>
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 pr-5 md:shadow-sm'> 
                <input 
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    type='text'
                    placeholder = 'Start your search'
                    className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
                />
                <SearchIcon 
                    className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                />
            </div>
            <div className='flex space-x-4 items-center justify-end text-gray-500'> 
                <p className='hidden md:inline'> Become a host</p>
                <GlobeAltIcon className="h-6 "/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'> 
                    <MenuIcon className='h-6'/>
                    <UsersIcon className='h-6'/> 
                </div>
            </div>
            {searchInput && 
            <div className='mt-0 col-span-3 mx-auto'>
                <DateRangePicker 
                    ranges = {[selectionRange]}
                    onChange = {handleSelect}
                    minDate = {new Date()}
                    rangeColors = {['#FD595E']}
                /> 
                <div className='flex items-center border-b mb-4'> 
                    <h2 className='text-2xl flex-grow font-semibold'> Number Of Guests </h2>
                    <UsersIcon 
                        className='h-5' 
                    />
                    <input
                        type='number'
                        value={numberOfGuests}
                        className='w-12 pl-2 text-lg outline-none text-red-400'
                        onChange = {updateNumberOfGuest}
                        min = {1}
                    />
                </div>
                <div className='flex justify-around'> 
                    <button onClick={()=>setSearchInput('')} className='text-gray-500'> Cancel </button>
                    <button className='text-red-400 '> Search </button>
                </div>
            </div>}
        </header>
    )
}
export default Header; 
