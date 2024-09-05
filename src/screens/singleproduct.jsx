// import React from 'react'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from "../components/card";

const Singlecard = () => {
    const [data , setData ] = useState(null);
    const params = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
            // console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , [])
  return (
    <div className='flex justify-center mt-[5rem]'>
    {data ? <Card title={data.title} catagery={data.category} src={data.image} showbtn={false}/> : <h1>Loading...</h1>}
    </div>

  )
}

export default Singlecard