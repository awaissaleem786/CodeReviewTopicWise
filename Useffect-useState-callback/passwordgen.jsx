

import React, { useState,useCallback,useEffect,useRef } from 'react';

const Passwordgen = () => {

  const [length,setLength]=useState(8)
  const [password,setPassword]=useState('')
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)

    const Genortor =useCallback(()=>{
        let pass='';  
      let str="ASDFGHJKQWERTYUIIOZXCVBNMasdfghjjkqwertyuuizxcvbnm";
      if(number) str=str+'1234567890';
      if(character) str=str+'@#$%^&*';
      for (let i = 1; i <= length; i++) {
       let char=Math.floor(Math.random()*str.length+1);              
        pass=pass+str.charAt(char)
      }
      setPassword(pass)

    },[length,character,number])
      
    useEffect(()=>{
          Genortor()
    } ,[length,character,number])
   
     const reference=useRef()  // this is an state only to use the copied text Slection and selection range (selct area,select range)
     
  // copiedfunction of click on button
    const copiedfunction=useCallback(()=>{
      window.navigator.clipboard.writeText(password)  // Copeid the text of an clipboard 
      reference.current?.select();                // Select the bacically data of input 
      reference.current?.setSelectionRange(0,5);   // Select The Range of an input felid 
    },[password])
  return (

    <div>
              <h1>Password Generator</h1>
              <input type="text" value={password} ref={reference} /> <button onClick={copiedfunction}>Copy</button>
              <input type="range" max={20} min={8} onChange={(e)=>setLength(e.target.value)} /> <button>Length:{length}</button>
              <label>Number</label><input type="checkbox" name="" id="" onClick={()=>setNumber((prev)=>!prev)}/>
              <label htmlFor="">Charcater</label><input type="checkbox" onClick={()=>setCharacter((prev)=>!prev)}/>

          
    </div>
  )
}

export default Passwordgen;