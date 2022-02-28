import Image from "next/image";
import imagenes from '../assets/img/gallery';

const GalleryBN = () =>(
    <section id="gallery" className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Galería de fotos</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fotos de algunos de los trabajos realizados por boutique nails</p>
        </div>
        <div className="flex flex-wrap -m-6">
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
                <div className="flex relative ">
                    <Image alt={imagenes[0].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[0].img} />
                    <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                        <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[0].subtitle}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[0].title} Stars</h1>
                        <p className="leading-relaxed">{imagenes[0].descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <Image alt={imagenes[1].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[1].img} />
                    <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                        <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[1].subtitle}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[1].title} Catalyzer</h1>
                        <p className="leading-relaxed">{imagenes[1].descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt={imagenes[2].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[2].img}></Image>
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[2].subtitle}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[2].title} 400 Blows</h1>
                    <p className="leading-relaxed">{imagenes[2].descripcion}</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt={imagenes[3].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[3].img}></Image>
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[3].subtitle}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[3].title}</h1>
                    <p className="leading-relaxed">{imagenes[3].descripcion}</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt={imagenes[4].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[4].img}></Image>
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[4].subtitle}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[4].title} Caulfield</h1>
                    <p className="leading-relaxed">{imagenes[4].descripcion}</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image alt={imagenes[5].alt} layout="fill" className="absolute inset-0 w-full h-full object-cover object-center rounded-t-3xl rounded-bl-3xl" src={imagenes[5].img}></Image>
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 rounded-t-2xl rounded-bl-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">{imagenes[5].subtitle}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{imagenes[5].title} Kamu</h1>
                    <p className="leading-relaxed">{imagenes[5].descripcion}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
)

export default GalleryBN;