"use client"

import React from 'react'
import { AddToCartButton } from '../buttons/addToCartButton'
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface SingleItemProps {
    itemData: {
      name: string;
      price: string;
      color: string;
      image: StaticImageData;
    },
    key:number; 
  }


 export const SingleItem: React.FC<SingleItemProps> = ({ itemData, key }) => {
    return (
        <form className="containerItem"  style={{ backgroundColor: itemData.color }}>
            <Image src={itemData.image} alt="Slide 1" />
            <div className="itemInfo">
                <div className="itemInfoWrapper">

                    <h5>{itemData.name}</h5>
                    <div className="itemSize">
                        <div className="radioSizeButton">
                            <input type="radio" id={`xsSize${key}`} name='radioSize' />
                            <label htmlFor={`xsSize${key}`}>XS</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`sSize${key}`} name='radioSize' />
                            <label htmlFor={`sSize${key}`}>S</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`mSize${key}`} name='radioSize' />
                            <label htmlFor={`mSize${key}`}>M</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`xSize${key}`} name='radioSize' />
                            <label htmlFor={`xSize${key}`}>X</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`xlSize${key}`} name='radioSize' />
                            <label htmlFor={`xlSize${key}`}>XL</label>
                        </div>


                    </div>
                    <p>PKR {itemData.price}</p>

                    <AddToCartButton />
                </div>

            </div>
        </form>
    )
}
