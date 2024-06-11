"use client"
import productService from '@/services/apiRoutes/products'
import React, { useState, ChangeEvent, useEffect } from 'react'
import ImageUploading, { ImageListType } from "react-images-uploading";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDownload } from "react-icons/ai";

const ManageProduct = () => {
    const { GetPaginatedProduct } = productService()
    interface ProductData {
        productName: string;
        productColor: string;
        productSize: string;
        productAmount: string;
        productQuantity: string;
        productSearchTags: string;
        image: any;
    }
    const [products, setProducts] = useState<ProductData[]>([])
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [search, setSearch] = useState('');
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchProducts(page, limit, search);
    }, [page, limit]);
    useEffect(() => {
        setTimeout(() => {
            fetchProducts(page, limit, search);
        }, 500)
    }, [search]);

    const fetchProducts = (page: number, limit: number, search: String) => {
        const data = {
            page: page,
            limit: limit,
            search: search
        };
        GetPaginatedProduct(data)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.products);
                setTotalPages(data?.totalPages);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="productForm formLayoutOuter">
                <h1>Manage Product</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearchChange}
                />
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Color</th>
                            <th>Amount</th>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, keyId) => (
                                <tr key={keyId}>
                                    <td>{keyId + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productColor}</td>
                                    <td>{item.productAmount}</td>
                                    <td>{item.productQuantity}</td>
                                    <td>{item.productSize}</td>
                                    <td>delete/edit</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={page <= 1}>Previous</button>
                    <span>Page {page} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={page >= totalPages}>Next</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ManageProduct