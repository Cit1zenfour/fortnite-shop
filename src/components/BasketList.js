import BasketItem from "./BasketItem";

const BasketList = ({order, handleBasketShow, removeFromBasket, incQuantity, decQuantity}) => {
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finalPrice * el.quantity
    }, 0)
    return (
        <ul className="collection basket-list">
            <div className='collection-item active'>Basket</div>
            {order.length ? order.map(item => (<BasketItem key={item.id} incQuantity={incQuantity} decQuantity={decQuantity} removeFromBasket={removeFromBasket} {...item} />))
            : <div className='collection-item'>Cart is empty</div>}
            <div className='collection-item active'>Total Cost: ${totalPrice}</div>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList