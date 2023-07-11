import Cards from '../NewArrivalsCards/NewArrivalsCards'

export default function NewArrivals() {
    return (
        <div>
            <section className="section new" id="new">
                <h2 className="section__title">New Arrivals</h2>

                <centre>
                <div className="new__container container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">

                            
                            <Cards />
                            <Cards />
                            <Cards />
                           

                        </div>
                    </div>
                </div>
                </centre>
            </section>
        </div>
    )
}
