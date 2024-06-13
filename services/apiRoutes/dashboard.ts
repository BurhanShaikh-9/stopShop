import { baseUrl } from "../constants"
import { jsonContentType, formContentType } from "../requestOptions"

const DashboardService = () => {

    const GetAllProductData = () => {
        return fetch(`${baseUrl}/dashboard/products`, { method: 'GET' })
    }
   
    return { GetAllProductData,  }
}

export default DashboardService