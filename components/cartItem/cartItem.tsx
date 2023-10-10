"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import itemImg1 from '../../assets/shirtBlack.png'
import itemImg2 from '../../assets/shirtWhite.png'
import { AddToCartButton } from '@/components/buttons/addToCartButton'
import { SingleItem } from './singleItem'


export const CartItem = () => {

    const [data, setData] = useState([
        { name: "BlackShirt", price: '500', color: '#8300C7', image: itemImg1 },
        { name: "BlackShirt", price: '500', color: '#3E96F4', image: itemImg2 },
        { name: "BlackShirt", price: '500', color: '#FF914B', image: itemImg1 },
        { name: "BlackShirt", price: '500', color: '#00A488', image: itemImg2 },
        { name: "BlackShirt", price: '500', color: '#FE28A9', image: itemImg1 },
        { name: "BlackShirt", price: '500', color: '#8300C7', image: itemImg2 },
        { name: "BlackShirt", price: '500', color: '#3E96F4', image: itemImg1 },
    ])



    return (
        <React.Fragment>
            <section>

                <div className="cartItemWrapper">
                    {data.map((item, keyId) => (
                        <SingleItem itemData={item} key={keyId} uniqueId={keyId} />
                    ))}

                </div>
            </section>

        </React.Fragment>
    )
}
