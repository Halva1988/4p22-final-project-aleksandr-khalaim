import '../style/cards.scss';

function Cards() {
    

    return (
        <div class="wrapper">
            <div class="card">
                <div class="card-foto"><img src="./img/green_shoe.png" alt="green_shoe" /></div>
                <div class="card-title">
                    <h1>GREEN SHOE</h1>
                </div>
                <div class="card-desc">WHATEVER BRAND</div>
                <div class="card-price">$152.18</div>
                <div class="card-button">
                    <button class="card__buy-now">BUY NOW</button>
                </div>
            </div>
        </div>
    )
};

export default Cards;