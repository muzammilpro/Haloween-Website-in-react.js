import Navbar from '../components/Navbar/Navbar'
import Header from '../components/header/header'
import Cards from '../components/Cards/Cards'
import AboutSection from '../components/AboutSection/AboutSection'
import TrickOrTreatSection from '../components/TrickOrTreatSection/TrickOrTreatSection'
import DiscountSection from '../components/DiscountSection/DiscountSection'




function HomePage() {
    return (

        <div>
            <Navbar />

            <Header />

            <section class="section category">
                <h2 class="section__title">Favorite Scare <br /> Category</h2>

                <div class="category__container container grid">


                    <Cards />
                    <Cards />
                    <Cards />


                </div>

            </section>

            <AboutSection/>
            <TrickOrTreatSection/>
            <DiscountSection />



        </div>

    );
}



export default HomePage 