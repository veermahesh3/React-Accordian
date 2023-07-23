import React, { useState } from 'react';
import './accordian.css';

const MyAccordian =(props)=>{
    const[show,setShow]=useState(false);
    
 
return(
    <>
    <div className='main'>
   <div className='center'>
   <div className="main-heading">
       
       <h3><span className='plus' onClick={()=>setShow(!show)}>{show?"-":"+"}</span> {props.value.question}</h3>
    </div>
     {show &&
     <p ><span className='arrow'>-></span> {props.value.answer}</p>
     }
   </div>
   </div>
 
    </>
)

}

export default MyAccordian;