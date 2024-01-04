// import React, { Component } from 'react';
import { blogList } from './data';  //this is data not a Component and destructure of an array of Object
import Transfer from './transfer';
const Index = () => {

      //  let  list={blogList}
      //  console.log(list)
      //  console.log({blogList})
  return (
    <div>
         
           <h1>Props Practice</h1>
           
           {/* <h1>{blogList[0].id}</h1> */}

           <Transfer mypropsdata={blogList}/>
    </div>
  )
}

export default Index;