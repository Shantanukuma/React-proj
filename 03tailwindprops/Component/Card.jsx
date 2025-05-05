import React from 'react'

const Card = ({username = "SN"}) => {
// console.log(props);
  
  return (
    <>
        <img className='w-[500px] h-[400px]' src="https://static.wixstatic.com/media/6642a4_922258e938284da591d4b71707f69d14~mv2.jpg/v1/fill/w_1000,h_618,al_c,q_85,usm_0.66_1.00_0.01/6642a4_922258e938284da591d4b71707f69d14~mv2.jpg" alt="" />
        <h3>{username}</h3>
        <p className='mb-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, eaque.</p>
    </>
  
  )
}

export default Card