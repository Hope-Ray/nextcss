import React from 'react'
import styles from "../styles/MainPage.module.scss";
import { revalidateTag } from 'next/cache';
import { Product } from '@/typings';
import { addProductToDatabase } from '@/serverActions/serverActions';
import AddProductButton from './AddProductButton';



export default async function MainPage (){
  const res = await fetch('https://6549e60ae182221f8d521862.mockapi.io/products', {
    cache: 'no-cache',
    next: {
      tags: ["products"]
    }
  });

  const products: Product[] = await res.json(); 

  

  return (
    <main className='navbar'>
      <h1 className='text-3xl font-bold text-center'>Products Warehouse</h1>
      <AddProductButton></AddProductButton>
      <form action={addProductToDatabase} className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
        <input name='product' className='border border-gray-300 rounded-md p-2'/>
        <input name='price' className='border border-gray-300 p-2 rounded-md'/>
        <button className={styles.button}>Submit</button> 
      </form>

      <h2 className='font-bold p-5'>List of Products</h2>
      <div className='flex flex-wrap gap-5'>
        {products.map((product) => (
          <div key={product.id} className='p-5 shadow'>
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
