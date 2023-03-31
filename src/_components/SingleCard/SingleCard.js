import React from 'react'
import Card from "react-credit-cards";
const SingleCard = ({props}) => {
  return (
    <div>
        <Card
            name={props.name}
            number={props.cardNumber}
            expiry={props.cardExpiration}
            cvc="737"
          />
    </div>
  )
}

export default SingleCard