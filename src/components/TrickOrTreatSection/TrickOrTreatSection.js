import TrickOrTreatSectionCard from '../TrickOrTreatSectionCard/TrickOrTreatSectionCard'
import TrickCardImg1 from '../../images/trick-treat1-img.png'
import TrickCardImg2 from '../../images/trick-treat2-img.png'
import TrickCardImg3 from '../../images/trick-treat3-img.png'
import TrickCardImg4 from '../../images/trick-treat4-img.png'
import TrickCardImg5 from '../../images/trick-treat5-img.png'
import TrickCardImg6 from '../../images/trick-treat6-img.png'

export default function TrickOrTreatSection() {
  return (
    <div>


      <section class="section trick" id="trick">
        <h2 class="section__title">Trick Or Treat</h2>

        <div class="trick__container container grid">

          <TrickOrTreatSectionCard scr={TrickCardImg1} title="Toffee" text="Candy" price="11.99" />
          <TrickOrTreatSectionCard scr={TrickCardImg2} title="Bone" text="Accessory" price="8.99" />
          <TrickOrTreatSectionCard scr={TrickCardImg3} title="Scarecrow" text="Accessory" price="15.99" />
          <TrickOrTreatSectionCard scr={TrickCardImg4} title="Candy Cane" text="Candy" price="7.99" />
          <TrickOrTreatSectionCard scr={TrickCardImg5} title="Pumpkin" text="Candy" price="19.99" />
          <TrickOrTreatSectionCard scr={TrickCardImg6} title="Ghost" text="Accessory" price="17.99" />

        </div>
      </section>



    </div>
  )
}

