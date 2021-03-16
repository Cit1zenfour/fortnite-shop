const BasketItem = ({mainId, displayName, finalPrice, quantity, background, displayDescription, removeFromBasket, incQuantity, decQuantity}) => {
    return (
        <li className="collection-item avatar">
            <img src={background} alt={displayName} className="circle"/>
                <span className="title">{displayName} <i onClick={() => decQuantity(mainId)} className='material-icons basket-quantity'>remove</i> x{quantity} <i onClick={() => incQuantity(mainId)} className='material-icons basket-quantity'>add</i> ${finalPrice}</span>
                <p>{displayDescription}</p>
            <span onClick={() => removeFromBasket(mainId)} className="secondary-content"><i className="material-icons product-delete">close</i></span>
        </li>
)
}

export default BasketItem