

export default function TrickOrTreatSectionCard(props) {
  return (
    <div>
      <div className="trick__content">
        <img src={props.scr} alt="" className="trick__img" />
        <h3 className="trick__title">{props.title}</h3>
        <span className="trick__subtitle">{props.text}</span>
        <span className="trick__price">${props.price}</span>
        <button className="button trick__button">
          <i className='bx bx-cart-alt trick__icon'></i>
        </button>
      </div>
    </div>
  )
}
