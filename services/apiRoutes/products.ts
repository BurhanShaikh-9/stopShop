import { baseUrl } from "../constants"
import { jsonContentType } from "../requestOptions"

interface productData {
    image: string;
    productName: string;
    productColor: string;
    productSize: string;
    productAmount: string;
    productQuantity: string;
    productSearchTags: string;
}


const productService = () => {
  
  
    const AddProduct = (data: productData) => {
        return fetch(`${baseUrl}/signIn`, jsonContentType('POST', data))
    }

    return {AddProduct}
}

export default productService