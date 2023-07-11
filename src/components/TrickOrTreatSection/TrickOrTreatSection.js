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
                    
                    <TrickOrTreatSectionCard  scr={TrickCardImg1} />
                    <TrickOrTreatSectionCard scr={TrickCardImg2}/>
                    <TrickOrTreatSectionCard scr={TrickCardImg3} />
                    <TrickOrTreatSectionCard scr={TrickCardImg4} />
                    <TrickOrTreatSectionCard scr={TrickCardImg5} />
                    <TrickOrTreatSectionCard scr={TrickCardImg6} />
                    
                </div>
            </section>
            


    </div>
  )
}

