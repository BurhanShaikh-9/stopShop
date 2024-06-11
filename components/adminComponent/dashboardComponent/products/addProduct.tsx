"use client"
import productService from '@/services/apiRoutes/products'
import React, { useState, ChangeEvent } from 'react'
import ImageUploading, { ImageListType } from "react-images-uploading";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDownload } from "react-icons/ai";

const AddProduct = () => {
    const { AddProduct } = productService()
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    interface ProductData {
        productName: string;
        productColor: string;
        productSize: string;
        productAmount: string;
        productQuantity: string;
        productSearchTags: string;
        image: File[] | null;
    }
    const [productData, setProductData] = useState<ProductData>({
        productName: '',
        productColor: '',
        productSize: '',
        productAmount: '',
        productQuantity: '',
        productSearchTags: '',
        image: null,
    });

    const getFormInput = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        // if (name === 'image') {
        //     const file = e.target.files && e.target.files[0];
        //     if (file) {
        //         setProductData({ ...productData, [name]: file });
        //     }
        // } else {
        setProductData({ ...productData, [name]: value });
        // }
    };
    const getFormFile = (
        imageList: ImageListType,
    ) => {
        const allFiles = imageList.map((item) => item.file).filter((file): file is File => file !== undefined);
        setImages(imageList as never[]);
        setProductData({ ...productData, 'image': allFiles });
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(productData, 'proo')
        const formData = new FormData();
        formData.append('productName', productData.productName);
        formData.append('productColor', productData.productColor);
        formData.append('productSize', productData.productSize);
        formData.append('productAmount', productData.productAmount);
        formData.append('productQuantity', productData.productQuantity);
        formData.append('productSearchTags', productData.productSearchTags);
        // Append image to FormData only if it's not null
        if (productData.image) {
            formData.append("image", productData.image[0]);
        }
        // const formDataObject: { [key: string]: string | File } = {};
        // formData.forEach((value, key) => {
        //     formDataObject[key] = value;
        // });
        // console.log(formDataObject, 'objj'); 
        AddProduct(formData)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch(err => {
                console.log(err);
            });
    };


    return (
        <React.Fragment>
            <div className="productForm formLayoutOuter">
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
                            <input type="text" name='productName' placeholder='Enter Product Name...' onChange={getFormInput} />
                        </div>
                        {/* <div className="inputFieldOut">
                            <label htmlFor="">Image</label>
                            <input type="file" name='image' onChange={getFormInput}/>
                        </div> */}
                        <div className="inputFieldOut">
                            <label htmlFor="">Color</label>
                            <input type="text" name='productColor' placeholder='Enter Product Color ...' onChange={getFormInput} />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Size</label>
                            <input type="text" name='productSize' onChange={getFormInput} placeholder='Enter Product Size ...' />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Amount</label>
                            <input type="text" name='productAmount' onChange={getFormInput} placeholder='Enter Product Amount ...' />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Quantity</label>
                            <input type="text" name='productQuantity' onChange={getFormInput} placeholder='Enter Product Quantity ...' />
                        </div>
                        <div className="inputFieldOut">
                            <label htmlFor="">Search Tags</label>
                            <input type="text" name='productSearchTags' onChange={getFormInput} placeholder='Enter Product Search Tag ...' />
                        </div>

                        <ImageUploading
                            multiple
                            value={images}
                            onChange={getFormFile}
                            maxNumber={maxNumber}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (

                                <div className="inputFieldOut2">
                                    <div className="imageUploader">
                                        <button
                                            style={isDragging ? { color: "red" } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <AiOutlineDownload />
                                            <span>
                                                Click or Drop your image here
                                            </span>
                                        </button>
                                    </div>

                                    <div className="imagesFormContainer">

                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image.dataURL} alt="" width="100" />
                                                <div className="image-item__btn-wrapper">
                                                    <button onClick={() => onImageUpdate(index)}><FiEdit /></button>
                                                    <button onClick={() => onImageRemove(index)}><RxCross1 /></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
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