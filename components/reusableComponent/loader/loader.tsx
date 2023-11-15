import React from 'react'
import LoaderGif from '../../../assets/loader1.gif'
import Image from 'next/image'

const LoaderComponent = () => {
    return (
        <div className='loadingMain'>
            {/* <Image src={LoaderGif} alt='loader'></Image> */}


            <div className="loadingio-spinner-ellipsis-uousidw2og"><div className="ldio-zgqx5dp1h49">
                <div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </div>

    )
}

export default LoaderComponent