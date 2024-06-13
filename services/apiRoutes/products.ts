import { baseUrl } from "../constants"
import { jsonContentType, formContentType } from "../requestOptions"

const productService = () => {

    interface paginatedData {
        page: Number,
        limit: Number,
        search?: String
    }


    const AddProduct = (data: FormData) => {
        return fetch(`${baseUrl}/product`, formContentType('POST', data))
    }
    const GetAllProduct = () => {
        return fetch(`${baseUrl}/product`, { method: 'GET' })
    }
    const DeleteProduct = (id: String) => {
        return fetch(`${baseUrl}/product/${id}`, { method: 'DELETE' })
    }
    const GetPaginatedProduct = (data: paginatedData) => {
        return fetch(`${baseUrl}/paginated-products?page=${data.page}&limit=${data.limit}&search=${data.search}`, { method: 'GET' });
    };

    return { AddProduct, GetAllProduct, GetPaginatedProduct, DeleteProduct }
}

export default productService