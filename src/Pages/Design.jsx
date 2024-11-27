import React from 'react';
import Define from "../assets/Define.png"
import Designn from "../assets/Design.png"
import Deploy from "../assets/Deploy.png"
import Distribute from "../assets/Distribute.png"

export const Design = () => {
  return (
    <div id='design' className='bg-[#00010b] w-full sm:gap-x-6 sm:px-7 xl:w-10/12 grid mx-auto grid-cols-1 sm:grid-cols-4 place-items-center py-10 sm:py-20 gap-y-10'>
       <img src={Designn}/>
       <img src={Deploy}/>
       <img src={Define}/>
       <img src={Distribute}/>
    </div>
  )
}
