import React from "react";
import Header from "../components/Header/header";
import Banner from "../components/Banner/banner";
import Feature from "../components/Feature/feature"
import Footer from "../components/Footer/footer";
import chatIcon from '../assets/icon-chat.png';
import moneyIcon from '../assets/icon-money.png';
import securityIcon from '../assets/icon-security.png';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature
                        title="You are our #1 priority"
                        content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                        imageSrc={chatIcon}
                        altText="Chat icon"
                    />
                    <Feature
                        title="More savings means higher rates"
                        content="The more you save with us, the higher your interest rate will be!"
                        imageSrc={moneyIcon}
                        altText="Money icon"
                    />
                    <Feature
                        title="Security you can trust"
                        content="We use top of the line encryption to make sure your data and money is always safe."
                        imageSrc={securityIcon}
                        altText="Security icon"
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;