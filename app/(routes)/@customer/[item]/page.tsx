import { CartItemDescription } from '@/components/clientComponent/cartItemDescription/cartItemDescription'
import React from 'react'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const ItemDescription = () => {


    return (
        <React.Fragment>
            <div className={`${pacifico.className} `}>
                <CartItemDescription />

                
            </div>
        </React.Fragment>
    )
}

export default ItemDescription