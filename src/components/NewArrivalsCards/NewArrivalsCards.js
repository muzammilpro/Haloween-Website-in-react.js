

export default function NewArrivalsCards(props) {
    return (
        <div>
            <div className="new__content swiper-slide">
                <div className="new__tag">New</div>
                <img src={props.scr} alt="" className="new__img" />
                <h3 className="new__title">Haunted House</h3>
                <span className="new__subtitle">Accessory</span>

                <div className="new__prices">
                    <span className="new__price">$14.99</span>
                    <span className="new__discount">$29.99</span>
                </div>

                <button className="button new__button">
                    <i className='bx bx-cart-alt new__icon'></i>
                </button>
            </div>
        </div>
    )
}
