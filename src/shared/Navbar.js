import React, {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import {ChevronDownIcon, UserCircleIcon} from "@heroicons/react/20/solid";
import {useAuthContext} from "../funcs/AuthProvider";

const Navbar = () => {
    const {auth} = useAuthContext()

    return (
        auth !== "" ? (
        <Disclosure as="nav" className="bg-gray-800">
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <NavLink className="text-white px-3 py-2 text-2xl cursor-pointer" to="/" activeStyle>
                                    Package manager
                                </NavLink>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink
                                        className='bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium inline-flex'
                                        to="/create"
                                        activeStyle
                                    >
                                        Create
                                    </NavLink>
                                    <NavLink
                                        className='bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium inline-flex'
                                        to="/update"
                                        activeStyle
                                    >
                                        Update
                                    </NavLink>
                                    {/*<NavLink*/}
                                    {/*    className='bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium inline-flex'*/}
                                    {/*    to="/list/local"*/}
                                    {/*    activeStyle*/}
                                    {/*>*/}
                                    {/*</NavLink>*/}
                                    <NavLink
                                        className='bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium inline-flex'
                                        to="/list/server"
                                        activeStyle
                                    >
                                        List
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-gray-800 flex items-center
                                            text-lg text-white font-medium hover:bg-gray-700
                                             hover:text-white px-3 py-2 rounded-md">
                                            <UserCircleIcon className="h-7 w-7"></UserCircleIcon>
                                            User
                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
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
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 rounded-md
                                         shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <NavLink
                                                            className={
                                                                active ? 'bg-gray-100 text-gray-900 block w-full' +
                                                                    ' text-left px-4 py-2 text-sm' : 'text-gray-700' +
                                                                    ' block w-full text-left px-4 py-2 text-sm'}
                                                            to="/logout"
                                                            activeStyle
                                                        >
                                                            Logout
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <NavLink
                                                            className={
                                                                active ? 'bg-gray-100 text-gray-900 block w-full' +
                                                                    ' text-left px-4 py-2 text-sm' : 'text-gray-700' +
                                                                    ' block w-full text-left px-4 py-2 text-sm'}
                                                            to="/config"
                                                            activeStyle
                                                        >
                                                            Config
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Disclosure>) : (<></>)
    );
}

export default Navbar;