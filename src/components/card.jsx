import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src,title,catagery,price,id, showbtn = true}) => {
  const navig = useNavigate()
  function show(){
    navig(`/singleproduct/${id}`)
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl mt-5">
  <figure>
    <img className='w-[200px] h-[150px]'
      src={src}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}!</h2>
    <p>{price}</p>
    <p>{catagery}</p>
    <div className="card-actions justify-centre">
     {showbtn ? <button onClick={show} className="btn btn-primary">Buy Now</button>:null}
    </div>
  </div>
</div>
    </div>
  )
}

export default Card