"use client"
import productService from '@/services/apiRoutes/products'
import React, { useState, ChangeEvent } from 'react'

const AddProduct = () => {
    const { AddProduct } = productService()

    const [productImg, setProductImg] = useState('')
    const [productData, setProductData] = useState({
        productName: '',
        productColor: '',
        productSize: '',
        productAmount: '',
        productQuantity: '',
        productSearchTags: '',
    });

    const getLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductData({ ...productData, [name]: value });
    };

    const getImageInput = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProductImg(reader.result);
        };
      };

    const submitForm = (e: any) => {
        e.preventDefault();
        console.log('productData', productData, productImg);
    }



    return (
        <React.Fragment>
            <div className="productForm">
                <h1>Add Product</h1>
                <form onSubmit={submitForm}>
                    <div className="adFormInner">
                        {/* <div className="inputFieldOut">
                        <label htmlFor="">Product</label>
                        <select name="" id="">
                            <option value="shirt" selected disabled>Shirt</option>
                        </select>
                    </div> */}
                        <div className="inputFieldOut">
                            <label htmlFor="">Name</label>
                            <input type="text" name='productName' onChange={getLoginInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Image</label>
                            <input type="file" name='productImage' onChange={getImageInput}/>
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Color</label>
                            <input type="text" name='productColor' onChange={getLoginInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Size</label>
                            <input type="text" name='productSize' onChange={getLoginInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Amount</label>
                            <input type="text" name='productAmount' onChange={getLoginInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Quantity</label>
                            <input type="text" name='productQuantity' onChange={getLoginInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Search Tags</label>
                            <input type="text" name='productSearchTags' onChange={getLoginInput} />
                        </div>
                        <div className="FieldSubmitBtn">
                            <button>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </React.Fragment>
    )
}

export default AddProduct