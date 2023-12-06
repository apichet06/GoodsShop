import { api } from '@/app/config'
import axios from 'axios'
import React from 'react'

async function getProduct() {

    const response = await axios.get(api + "/product")

    if (response.status === 200) {
        return response.data.data
    } else {
        throw new Error('Cannot find product')
    }

}

export default async function Page() {
    const product = await getProduct();
    // console.log(product);

    return (
        <>
            <div>Page</div>{
                product.map((product: any, index: number) => (
                    <div key={index}>{product.pro_name}</div>
                ))
            }

        </>


    )
}
