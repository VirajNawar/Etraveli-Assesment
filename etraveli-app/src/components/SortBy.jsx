import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'




export default function SortBy({
    handleEpisodeSort,
    handleYearSort,
    sortBy,
    setSortedMovie,
    getSortedMovie
}) {



    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left mr-5">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-80 px-4 py-1 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Sort By..
                        <AiOutlineDown
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>

                                <button
                                    onClick={() => {
                                        handleEpisodeSort()
                                        const sorted = getSortedMovie
                                        setSortedMovie(sorted)
                                    }}
                                    className='hover:bg-violet-500text-gray-900
                                    group flex w-full items-center rounded-md px-2 py-2 text-sm'
                                >
                                    Episode
                                </button>

                            </Menu.Item>
                            <Menu.Item>

                                <button
                                    onClick={() => {
                                        handleYearSort()
                                        const sorted = getSortedMovie
                                        setSortedMovie(sorted)
                                    }}
                                    className='hover:bg-violet-500 text-gray-900
                                                group flex w-full items-center rounded-md px-2 py-2 text-sm'
                                >
                                    Year
                                </button>

                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


