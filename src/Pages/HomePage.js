import Navbar from '../components/Navbar/Navbar'
import Header from '../components/header/header'
import Cards from '../components/Cards/Cards'




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



        </div>

    );
}



export default HomePage 