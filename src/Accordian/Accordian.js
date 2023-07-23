import React, { useState } from 'react';
import "./accordian.css";
import {questions} from './api';
import MyAccordian from './MyAccordian';
const Accordian=()=>{
    const[data,setData]=useState(questions);
return(
    <>
    <section>
    <h1>React Interview questions</h1>
     {data.map((value)=>{
      return <MyAccordian key={value.id} value={value}/>   
     })}
     </section>
    </>
)

}

export default Accordian;