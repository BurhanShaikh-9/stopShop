"use client"
import React, { useEffect, useState } from 'react'
import { HeroSection } from '../heroSection/heroSection'
import { CartItem } from '../cartItem/trendingItems'

export const MainPage = () => {
    const [rerenderKey, setRerenderKey] = useState(0);

    useEffect(() => {
        setRerenderKey(1);
    }, []);

    useEffect(() => {
        // This effect will run whenever rerenderKey changes.
        console.log(rerenderKey, 'render');
    }, [rerenderKey]);

    return (

        <React.Fragment>
            {
                rerenderKey && (
                    <React.Fragment>
                        <HeroSection />
                        <div className="container">
                            <CartItem />
                        </div>
                    </React.Fragment>

                )
            }
        </React.Fragment>
    )
}
