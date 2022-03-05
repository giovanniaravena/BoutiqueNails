import Link from "next/link";
import AboutBN from "../components/About";
import FooterBN from "../components/Footer";
import GalleryBN from "../components/Gallery";
import HeaderPN from "../components/Header";
import HomeBN from "../components/Home";
import PricingBN from "../components/Pricing";
import ProductsBN from "../components/Products";

export default function IndexPage(){
    return (
        <main id="home" className="bg-gradient-to-b from-rosa-100 via-white to-red-200">
        {/* <main id="home" className=""> */}
            <HeaderPN />
            
            <HomeBN />
            <div className=" lg:ml-12 lg:mr-12">
                <PricingBN />
                {/* <ProductsBN /> */}
                <GalleryBN />
                <AboutBN />
            </div>
            
            
            <FooterBN />
        </main>
    )
}