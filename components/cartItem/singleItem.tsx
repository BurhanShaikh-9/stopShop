"use client"

import React from 'react'
import { AddToCartButton } from '../buttons/addToCartButton'
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface SingleItemProps {
    itemData: {
      name: string;
      price: string;
      color: string;
      image: StaticImageData;
    },
    uniqueId:number; 
  }


 export const SingleItem: React.FC<SingleItemProps> = ({ itemData, uniqueId }) => {
    return (
        <form className="containerItem"  style={{ backgroundColor: itemData.color }}>
            <Image src={itemData.image} alt="Slide 1" />
            <div className="itemInfo">
                <div className="itemInfoWrapper">

                    <h5>{itemData.name}</h5>
                    <div className="itemSize">
                        <div className="radioSizeButton">
                            <input type="radio" id={`xsSize${uniqueId}`} name='radioSize' required/>
                            <label htmlFor={`xsSize${uniqueId}`}>XS</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`sSize${uniqueId}`} name='radioSize' required />
                            <label htmlFor={`sSize${uniqueId}`}>S</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`mSize${uniqueId}`} name='radioSize' required />
                            <label htmlFor={`mSize${uniqueId}`}>M</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`xSize${uniqueId}`} name='radioSize' required/>
                            <label htmlFor={`xSize${uniqueId}`}>X</label>
                        </div>
                        <div className="radioSizeButton">
                            <input type="radio" id={`xlSize${uniqueId}`} name='radioSize' required />
                            <label htmlFor={`xlSize${uniqueId}`}>XL</label>
                        </div>


                    </div>
                    <p>PKR {itemData.price}</p>

                    <AddToCartButton />
                    <Link className='productViewButton' href="/item"> Description </Link>
                </div>

            </div>
        </form>
    )
}
