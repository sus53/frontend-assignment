import * as api from '../api/Product'

export const GetProduct = async () => {
    try {
        const { data } = await api.GetProduct();
        return data;
    } catch (error) {
        console.log(error)
    }
}