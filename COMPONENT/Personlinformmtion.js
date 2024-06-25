'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import cancel from '../COMPONENT/Vector (15).png'
import one from '../COMPONENT/Group 1000004324.png'
import two from '../COMPONENT/Frame 1171275563.png'

const Personlinformmtion = () => {

    const [Title, setTitle]=useState('')
    const [FirstName,setFirstName]=useState('')
    const [MiddleName,setMiddleName]=useState('')
    const [lastName,setLastName]=useState('')
    const [Email,setEmail]=useState('')
    const [PhoneNumber,setPhoneNumber]=useState('')
    const [DateofBirth,setDateofBirth]=useState('')
    const [Nationality,setNationality]=useState('')
    const [StateofOrigin,setStateofOrigin]=useState('')
    const [LGA,setLGA]=useState('')
    const [Religion,setReligion]=useState('')
    const [MothersMaidenName,setMothersMaidenName]=useState('')
    const [ResidentialAddress,setResidentialAddress]=useState('')
    const [NearestLandmark,setNearestLandmark]=useState('')
    const [meansofidentification,setmeansofidentification]=useState('')
    const [identificaftionno,setidentificaftionno]=useState('')
   const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

<div className=''>
<div className='boxone'>

</div>
<div className='boxtwo'>
  <div className='gencontiner'>
  <div className='header'>
        <div className='red'>
        
        </div>
<div className='bc'>
    <div class="blue">
     <b>  Profile Update</b> 
    </div>
    <div className='cancel'>
        <Image src={cancel} alt=""/>
    </div>

    </div>

</div>
<div className='section'>
<div className="secdiv">
    <div className="personalinfo">
        <div class="pinfo">
            Personal Information
        </div>
        <div className="pinfoimg">
           <Image src={one} alt=''/>
        </div>
    </div>
    <div className="remaining">
        <div class="rem4">
            Remaining 4
        </div>
        <div className="remimg">
        <Image src={two} alt=''/>
        </div>
    </div>
</div>
</div>

<div className='section2'>
  <div className='text' >
  <b>Personal Information</b>
  </div>
  <div  className='v'></div>
</div>
      <form onSubmit={handleSubmit}>
        <div className='infocontiner'>
 <div className='lblbox'>  
        <div className='info'> 
        <label>Title</label>
            <input type="text" placeholder='Title' value={Title} onChange={(e) =>setTitle(e.target.value)} />
          </div>      
    
          <div className='info'> 
            <label>First Name</label>
            <input type='text' placeholder='FirstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>  
        </div>
  
            <div className='lblbox'>
            <div className='info'> 
            <label>Middle Name</label>
            <input type='text' placeholder='MiddleName' value={MiddleName} onChange={(e)=>setMiddleName(e.target.value)}/>
            </div>
            <div className='info'> 
            <label>last Name</label>
            <input type='text' placeholder='lastName' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
            </div>
            </div>
            <div className='lblbox'>
            <div className='info'> 
            <label>Email</label>
            <input type='text' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='info'> 
            <label>Phone Number</label>
            <input type='text' placeholder='PhoneNumber' value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
            </div>
            <div className='lblbox'>
            <div className='info'> 
            <label>Date of Birth</label>
            <input type='date' placeholder='DateofBirth' value={DateofBirth} onChange={(e)=>setDateofBirth(e.target.value)}/>
            </div>  
            <div className='info'> 
            <label>Nationality</label>
            <input type='text' placeholder='Nationality' value={Nationality} onChange={(e)=>setNationality(e.target.value)}/>
            </div>
            </div>
            
            <div className='lblbox'>
            <div className='info'> 
            <label>State of Origin</label>
            <input type='text' placeholder='StateofOrigin' value={StateofOrigin} onChange={(e)=>setStateofOrigin(e.target.value)}/>
            </div>
            <div className='info'> 
            <label>LGA</label>
            <input type='text' placeholder='LGA' value={LGA} onChange={(e)=>setLGA(e.target.value)}/>
            </div>
            </div>
            <div className='lblbox'>
            <div className='info'> 
            <label>Religion</label>
            <input type='text' placeholder='Religion' value={LGA} onChange={(e)=>setReligion(e.target.value)}/>
            </div>
            <div className='info'> 
            <label>Mothers Maiden Name</label>
            <input type='text' placeholder='MothersMaidenName' value={MothersMaidenName} onChange={(e)=>setMothersMaidenName(e.target.value)}/>
            </div>
            </div>

            <div className='lblbox'>
            <div className='info'>
            <label>Residential Address</label>
            <input type='text' placeholder='ResidentialAddress' value={ResidentialAddress} onChange={(e)=>setResidentialAddress(e.target.value)}/>
            </div>
            <div className='info'>
            <label>Nearest Landmark</label>
            <input type='text' placeholder='NearestLandmark' value={NearestLandmark} onChange={(e)=>setNearestLandmark(e.target.value)}/>
            </div>
            </div>

            <div className='lblbox'>
            <div className='info'>
            <label>   means of identification</label>
            <input type='text' placeholder='   meansofidentification' value={meansofidentification} onChange={(e)=>setmeansofidentification(e.target.value)}/>
            </div>
            <div className='info'>
            <label>identificaftion no</label>
            <input type='text' placeholder='identificaftionno' value={identificaftionno} onChange={(e)=>setidentificaftionno(e.target.value)}/>
            </div>
            </div>
         

        </div>
       
            </form>
  </div>

</div>

            </div>


  )
}

export default Personlinformmtion