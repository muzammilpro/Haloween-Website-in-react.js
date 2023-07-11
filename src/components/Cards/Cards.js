
function Cards(props) {
    return (

        <div class="category__data">
            <img src={props.scr} alt="" class="category__img" />
            <h3 class="category__title">{props.title}</h3>
            <p class="category__description">{props.description}</p>
        </div>
        
    );
}


export default Cards;