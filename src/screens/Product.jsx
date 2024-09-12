import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Product = () => {
  const [data,setdata] =useState([])
  useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then((res)=>{
setdata(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  console.log(data);
   return (
    <>
     <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5'>
        {data.length > 0 ? data.map((item)=>{
            return <Card className="mt-5" key={item.id} title={item.title.slice(0,20)} catagery={item.category} src={item.image} price={item.price} id={item.id}/>
        }): <h1>Loading...</h1>}
    </div>
    </>
   
  )
}

export default Product