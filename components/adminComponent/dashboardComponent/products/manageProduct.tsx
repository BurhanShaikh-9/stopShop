"use client"
import productService from '@/services/apiRoutes/products'
import ReactPaginate from 'react-paginate';
import React, { useState, ChangeEvent, useEffect } from 'react'
import ImageUploading, { ImageListType } from "react-images-uploading";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";



const ManageProduct = () => {
    const { GetPaginatedProduct, DeleteProduct } = productService()
    interface ProductData {
        _id: String;
        productName: String;
        productColor: String;
        productSize: String;
        productAmount: String;
        productQuantity: String;
        productSearchTags: String;
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
    const deleteProduct = (id: String) => {

        DeleteProduct(id)
            .then((res) => res.json())
            .then((data) => {
                fetchProducts(page, limit, search);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const handlePageClick = (selectedItem: { selected: number }) => {
        let incPage = selectedItem.selected + 1
        if (page >= 1) {
            setPage(incPage);
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
                            products?.map((item, keyId) => {

                                return (

                                    <tr key={keyId}>

                                        <td>{keyId + 1}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.productColor}</td>
                                        <td>{item.productAmount}</td>
                                        <td>{item.productQuantity}</td>
                                        <td>{item.productSize}</td>
                                        <td>
                                            <button onClick={() => deleteProduct(item._id)}>
                                                <AiOutlineDelete />
                                            </button>
                                            <button>
                                                <FaRegEdit />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

                {/* <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"ad-pagination"}
                    activeClassName={"active"}
                    breakClassName={"break-me"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                /> */}
                <ReactPaginate
                    previousLabel={<IoIosArrowBack />}
                    nextLabel={<IoIosArrowForward />}
                    pageRangeDisplayed={2}
                    pageCount={totalPages}
                    breakLabel="..."
                    breakClassName={"break-me"}
                    onPageChange={handlePageClick}
                    containerClassName={'ad-pagination'}
                    activeClassName={'active'}
                />

            </div>
        </React.Fragment>
    )
}

export default ManageProduct