const Skeleon = () => {
    return (
        <li>
            <a href="#" className="group block overflow-hidden">
                <div className="relative h-80 flex justify-center items-center bg-blueGray-200 animate-pulse">
                    <svg
                        className="w-10 h-10 text-blueGray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>

                <div className="pt-3">
                    <div className="flex items-center justify-between gap-2">
                        <div className="h-6 bg-blueGray-200 rounded-full w-3/4"></div>
                        <div className="bg-green-100 rounded-full flex-1 h-6"></div>
                    </div>

                    <div className="bg-blueGray-200 rounded-full h-3 mt-1"></div>

                    <div className="mt-3 bg-blueGray-200 rounded-full h-3"></div>
                    <div className="mt-1 bg-blueGray-200 rounded-full h-3"></div>
                    <div className="mt-1 bg-blueGray-200 rounded-full h-3"></div>

                    <div className="flex items-center mt-3 mb-4">
                        <div className="mt-2 bg-yellow-100 rounded-full h-5 w-1/3"></div>
                        <div className="mt-2 bg-blue-200 rounded-full h-5 w-1/6 ml-3"></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="w-1/3 bg-blueGray-200 rounded-full h-6"></div>
                        <div className="bg-blueGray-200 rounded-full h-6 w-1/5"></div>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default Skeleon;