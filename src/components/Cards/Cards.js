
import Cardimg from '../../images/category1-img.png'


function Cards() {
    return (

        <div class="category__data">
            <img src={Cardimg} alt="" class="category__img" />
            <h3 class="category__title">Ghosts</h3>
            <p class="category__description">Choose the ghosts, the scariest there are.</p>
        </div>
        
    );
}


export default Cards;