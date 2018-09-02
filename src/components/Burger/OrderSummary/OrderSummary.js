import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientsSummary = 
        Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span stlye={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
                )
            });

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>Your order details are here baby:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default OrderSummary

