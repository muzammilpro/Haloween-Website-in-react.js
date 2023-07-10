import Button from '../button/Button'
import Image from '../../images/discount-img.png'

export default function DiscountSection() {
  return (
    <div>
       <section className="section discount">
                <div className="discount__container container grid">
                    <div className="discount__data">
                        <h2 className="discount__title">50% Discount <br /> On New Products</h2>
                        <Button />
                    </div>

                    <img src={Image} alt="" className="discount__img" />
                </div>
            </section>

    </div>
  )
}
