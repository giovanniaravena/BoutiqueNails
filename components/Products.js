import Image from "next/image";
import imagenes from '../assets/img/products';

const ProductsBN = () =>(
    <section id="products" className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Nuestros Productos</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"></p>
      </div>
        <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} Catalyzer</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} Stars</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name}</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} 400 Blows</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} Catalyzer</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} Stars</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name}</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
            <Image alt={imagenes[1].alt} className="object-cover object-center w-full h-full block" placeholder="blur" src={imagenes[1].img}/>
            </a>
            <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{imagenes[0].category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{imagenes[0].name} 400 Blows</h2>
            <p className="mt-1">{imagenes[0].pricing}</p>
            </div>
        </div>
        </div>
    </div>
    </section>

)

export default ProductsBN;