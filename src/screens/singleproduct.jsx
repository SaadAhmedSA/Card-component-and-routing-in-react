// import React from 'react'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from "../components/card";

const Singlecard = () => {
    const [data , setData ] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , [])
  return (
    <>
           <h4 className="text-3xl text-center font-bold underline mt-10"> Single Product</h4>

     <div className='flex justify-center mt-[5rem]'>
    {data ? 
    <Card title={data.title} catagery={data.category} src={data.image} showbtn={false} des={data.description} price={data.price}/>
     : <h1>Loading...</h1>}
    </div>
    </>
   

  )
}

export default Singlecard