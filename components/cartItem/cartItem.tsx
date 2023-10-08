"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import itemImg from '../../assets/images.jpeg'

export const CartItem = () => {

    const [data, setData] = useState([
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
        { name: "blackShirt", size: 'S, M, L, XL', price: '500' },
    ])

    return (
        <React.Fragment>
            <section>

                <div className="cartItemWrapper">
                    {data.map((item, keyId) => (
                        <div className="containerItem" key={keyId}>
                            <Image src={itemImg} alt="Slide 1" />
                            <div className="itemInfo">

                                <h5>{item.name}</h5>
                                <p>{item.size}</p>
                                <p>PKR {item.price}</p>

                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </React.Fragment>
    )
}
