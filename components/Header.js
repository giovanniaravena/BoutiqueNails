import Link from "next/link";

const HeaderPN = () => (
    <header className="sticky top-0 z-50 text-red-500 body-font bg-rosa-100 bg-opacity-95 font-etherealthin ">
    {/* <header className="sticky top-0 z-50 text-red-500 body-font bg-white bg-opacity-95 font-etherealthin "> */}
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center font-quaylike">
        <a href="#home" className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0 lg:ml-9">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-6xl font-ignitedreamsscript">Boutique Nails</span>
        </a>
        <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#pricing" >
                <a className="mr-2 lg:mr-9 sm:mr-4 hover:text-red-600 hover:overline md:text-xl">Precios</a>
            </Link>
            <Link href="#products">
                <a className="mr-2 lg:mr-9 sm:mr-4 hover:text-red-600 hover:overline md:text-xl">Productos</a>
            </Link>
            <Link href="#gallery">
                <a className="mr-2 lg:mr-9 sm:mr-4 hover:text-red-600 hover:overline md:text-xl">Galería</a>
            </Link>
            <Link href="#about">
                <a className="mr-2 lg:mr-12 sm:mr-4 hover:text-red-600 hover:overline md:text-xl">Nosotros</a>
            </Link>
        </nav>
        {/* <Link href="https://wa.me/56949319142">
            <button className="inline-flex items-center btn-wsp border-5 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                Agenda tu hora
            </button>
        </Link> */}
    </div>
    </header>
)

export default HeaderPN;