import React from 'react'
function Layout() {
  return (
    <div>
    
         <div className='disply'>

    <div className='investment'>
    <b> Investment</b>
    </div>
    
    <div className='portfolio'>
    <b>Portfolio</b>
    </div>

    <div className='bell'>
    <Image src={bell} alt=''/>
    </div>
    
    <div className='options'>
    <Image src={option} alt=''/>
    </div>

    </div>
         </div>


  )
}

export default Layout