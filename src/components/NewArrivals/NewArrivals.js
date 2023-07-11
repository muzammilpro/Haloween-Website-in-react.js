import Cards from '../NewArrivalsCards/NewArrivalsCards'
import NewArivalCardImg1 from '../../images/new1-img.png'
import NewArivalCardImg2 from '../../images/new2-img.png'
import NewArivalCardImg3 from '../../images/new3-img.png'
import NewArivalCardImg4 from '../../images/new4-img.png'
import NewArivalCardImg5 from '../../images/new5-img.png'
import NewArivalCardImg6 from '../../images/new6-img.png'

export default function NewArrivals() {
    return (
        <div>
            <section className="section new" id="new">
                <h2 className="section__title">New Arrivals</h2>

                <centre>
                <div className="new__container container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">

                            
                            <Cards scr={NewArivalCardImg1} />
                            <Cards scr={NewArivalCardImg2} />
                            <Cards scr={NewArivalCardImg3} />
                            <Cards scr={NewArivalCardImg4} />
                            <Cards scr={NewArivalCardImg5} />
                            <Cards scr={NewArivalCardImg6} />
                           

                        </div>
                    </div>
                </div>
                </centre>
            </section>
        </div>
    )
}
