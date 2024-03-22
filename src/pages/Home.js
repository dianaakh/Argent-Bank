import React from "react";
import Header from "../components/Header/header";
import Banner from "../components/Banner/banner";
import Feature from "../components/Feature/feature"
import Footer from "../components/Footer/footer";
import featuresData from '../data/featuresData';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {featuresData.map((feature, index) => (
                        <Feature
                            key={index}
                            title={feature.title}
                            content={feature.content}
                            imageSrc={feature.imageSrc}
                            altText={feature.altText}
                        />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;