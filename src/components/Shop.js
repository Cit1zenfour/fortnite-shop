import React, {useEffect, useState} from 'react'
import {API_KEY, API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import axios from "axios";
import Alert from "./Alert";


const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(el => el.mainId === item.mainId)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((el, index) => {
                if (index === itemIndex) {
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                } else {
                    return el
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.displayName)
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.mainId !== id)
        setOrder(newOrder)
    }

    const incQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.mainId === id) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    const decQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.mainId === id) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(() => {
        axios
            .get(API_URL, {
                headers: {Authorization: API_KEY}
            })
            .then(response => {
                    response.data.shop && setGoods(response.data.shop)
                    setLoading(false)
                }
            );
    }, [])


    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/> : <GoodsList addToBacket={addToBasket} goods={goods}/>}
            {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
            {isBasketShow && <BasketList order={order} incQuantity={incQuantity} decQuantity={decQuantity} removeFromBasket={removeFromBasket} handleBasketShow={handleBasketShow}/>}
        </main>
    )
}

export default Shop