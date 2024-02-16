import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem, incease, decrease } from '../features/card/cardSlice'

const CardItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch(incease({ id }))}>
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn"
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id))
                            return
                        }
                        dispatch(decrease({ id }))
                    }}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CardItem