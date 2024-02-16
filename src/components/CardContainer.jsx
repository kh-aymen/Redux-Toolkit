import React from 'react'
import CardItem from './CardItem'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/modal/ModalSlice'



const CardContainer = () => {
    const dispatch = useDispatch()
    const { cardItems, total, amount } = useSelector(store => store.card)

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currentry empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {cardItems.map(item => {
                    return <CardItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <div className="cart-total">
                    <hr />
                    <h4>total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(openModal())}>clear cart</button>
            </footer>
        </section>
    )
}

export default CardContainer