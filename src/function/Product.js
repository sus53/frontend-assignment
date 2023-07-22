import * as api from '../api/Product'

export const GetProduct = async () => {
    try {
        const { data } = await api.GetProduct();
        const updatedArr = data.map(item => {
            return { ...item, quantity: 1 };
        });
        return updatedArr;
    } catch (error) {
        console.log(error)
    }
}