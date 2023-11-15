"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import itemImg1 from '../../../assets/shirtBlack.png'
import itemImg2 from '../../../assets/shirtWhite.png'
// import { AddToCartButton } from '../reusable/buttons/addToCartButton'
import { SingleItem } from './singleItem'
import  {Heading}  from '../reusable/headings/heading'


export const CartItem = () => {

    const [data, setData] = useState([
        { id: 0, name: "BlackShirt", price: '500', color: '#8300C7', image: itemImg1 },
        { id: 1, name: "BlackShirt", price: '500', color: '#3E96F4', image: itemImg2 },
        { id: 2, name: "BlackShirt", price: '500', color: '#FF914B', image: itemImg1 },
        { id: 3, name: "BlackShirt", price: '500', color: '#00A488', image: itemImg2 },
        { id: 4, name: "BlackShirt", price: '500', color: '#FE28A9', image: itemImg1 },
        { id: 5, name: "BlackShirt", price: '500', color: '#8300C7', image: itemImg2 },
    ])



    return (
        <React.Fragment>
            <div className='trendingSection'>
                <Heading headingText='TRENDING' />
                <div className="cartItemWrapper">
                    {data.map((item, keyId) => (
                        <SingleItem  key={keyId} itemData={item} uniqueId={keyId} />
                    ))}

                </div>
            </div>

        </React.Fragment>
    )
}
