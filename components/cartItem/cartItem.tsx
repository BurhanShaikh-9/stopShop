import Image from 'next/image'
import React from 'react'
import itemImg from '../../assets/images.jpeg'

export const CartItem = () => {

    return (
        <React.Fragment>
            <div className="cartItemWrapper">
                <div className="containerItem">
                    <Image src={itemImg} alt="Slide 1" />
                    <div className="itemInfo">
                        <h5>Shirt</h5>
                        <p>S, M, L, XL </p>
                        <p>PKR 500</p>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}
