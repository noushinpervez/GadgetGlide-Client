import { useState } from "react";
import AuthModal from "./AuthModal";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user, logout, loading } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bg-blueGray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" viewBox="0 0 28 24">
                            <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>

                    <div className="hidden sm:flex sm:items-center">
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mr-4">Products</a>
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mr-4">Offers</a>
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600">Cart</a>
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                        { loading ? (
                            <div></div>
                        ) : user ? (
                                <>
                                    <div>
                                        <span className="group relative">
                                            <div className="absolute bottom-[calc(100%)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                                <div className="bottom-full right-0 rounded bg-blueGray-800 px-4 py-1 text-xs text-white whitespace-nowrap">
                                                    { user.email }
                                                    <svg className="absolute left-0 top-full h-2 w-full text-blueGray-800" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                                </div>
                                            </div>
                                            <span>
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C" />
                                                    <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#1C274C" />
                                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#1C274C" />
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <button className="ml-3 inline-block rounded border border-indigo-600 px-6 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" onClick={ handleLogout }>Logout</button>
                                </>
                            ) : (
                                <>
                                    <a href="#" onClick={ handleOpenModal } className="text-indigo-600 text-sm font-semibold hover:text-indigo-600 mr-4">Sign in</a>
                                    <a href="#" onClick={ handleOpenModal } className="text-blueGray-700 text-sm font-semibold border border-gray-400 px-4 py-2 rounded hover:text-indigo-600 hover:border-indigo-600">Sign up</a>
                                </>
                            )}
                    </div>

                    <div className="sm:hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z" />
                        </svg>
                    </div>
                </div>

                <div className="block sm:hidden border-t-2 py-2">
                    <div className="flex flex-col">
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mb-1">Products</a>
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mb-1">Offers</a>
                        <a href="#" className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mb-1">Cart</a>
                        <div className="flex justify-between items-center border-t-2 pt-2">
                            <a href="#" onClick={ handleOpenModal } className="text-blueGray-700 text-sm font-semibold hover:text-indigo-600 mr-4">Sign in</a>
                            <a href="#" onClick={ handleOpenModal } className="text-blueGray-700 text-sm font-semibold border px-4 py-1 rounded border-gray-400 hover:text-indigo-600 hover:border-indigo-600">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal isOpen={ isModalOpen } onClose={ handleCloseModal } />
        </div>
    );
};

export default Navbar;