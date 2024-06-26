"use client";
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { Fragment, useState,useEffect } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {

    const [query,setQuery] = useState('');
    const [filteredManufacturers,setFilteredManufacturers] = useState(manufacturers);

    useEffect(()=>{
        // console.log(query,manufacturers)
        const localFilteredManufacturers = 
        query===""? manufacturers : 
        manufacturers.filter((item:string) => 
            item.toLowerCase()
            .replace(/\s+/g,"")
            .includes(query.toLowerCase().replace(/\s+/g,"")));
        // console.log(localFilteredManufacturers)
        setFilteredManufacturers(localFilteredManufacturers)
    },[query]);

    // console.log('filteredManufacturers >>>>>>>> ',filteredManufacturers)
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image 
                        src='/car-logo.svg'
                        alt='car logo'
                        className='ml-4'
                        width={20}
                        height={20}
                    />
                </Combobox.Button>
                <Combobox.Input
                    className='search-manufacturer__input'
                    placeholder='Volkswagen'
                    displayValue={(manufacturer:string)=>manufacturer}
                    onChange={(e)=>setQuery(e.target.value)}
                />

                <Transition 
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={()=>setQuery('')}
                >
                    <Combobox.Options className='absolute top-[40px]'>
                        {
                        // filteredManufacturers.length === 0 && query !== "" ? (
                        //     <Combobox.Option
                        //     value={query}
                        //     className='search-manufacturer__option'
                        //     >
                        //     Create "{query}"
                        //     </Combobox.Option>
                        // ) : (
                            filteredManufacturers.map((item) => (
                            <Combobox.Option
                                key={item}
                                className={({ active }) =>
                                `relative search-manufacturer__option ${
                                    active ? "bg-primary-blue text-white" : "text-gray-900"
                                }`
                                }
                                value={item}
                            >
                                {({ selected, active }) => (
                                <>
                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                    {item}
                                    </span>

                                    {/* Show an active blue background color if the option is selected */}
                                    {selected ? (
                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                    ></span>
                                    ) : null}
                                </>
                                )}
                            </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer