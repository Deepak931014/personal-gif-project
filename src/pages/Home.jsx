import React from "react"
import HeroSection from "../components/home/HeroSection";
import Categories from "../components/home/Categories";
import AdSection from "../components/home/AdSection";
import Gallery from "../components/home/Gallery";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Categories />
            <AdSection />
            <Gallery />
        </>
    )
}
export default Home;