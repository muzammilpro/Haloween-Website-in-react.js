import TrickOrTreatSectionCard from '../TrickOrTreatSectionCard/TrickOrTreatSectionCard'

export default function TrickOrTreatSection() {
  return (
    <div>
      

      <section class="section trick" id="trick">
                <h2 class="section__title">Trick Or Treat</h2>

                <div class="trick__container container grid">
                    
                    <TrickOrTreatSectionCard/>
                    <TrickOrTreatSectionCard/>
                    <TrickOrTreatSectionCard/>
                    <TrickOrTreatSectionCard/>
                    <TrickOrTreatSectionCard/>
                    <TrickOrTreatSectionCard/>
                    
                </div>
            </section>
            


    </div>
  )
}

