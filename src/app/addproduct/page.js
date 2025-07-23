"use client"

import { useState } from "react";


export default function AddProductPage() {

  const [name,setname]=useState("");
  const [price,setprice]=useState("");
  const [color,setcolor]=useState("");
  const [company,setcompany]=useState("");
  const [category,setcategory]=useState("");

const  addproduct= async(e)=>{
   e.preventDefault(); 
  let result= await fetch("http://localhost:3000/api/products",{
method:"POST",
body:JSON.stringify({name,price,color,category,company})
  });
  result=await result.json();
  if(result.success){
    alert("new  product  added")
  }

}



  return (
<>
      <h1 className="text-2xl font-bold text-center mb-4 text-green-700">This is post  API</h1>

     <div className="container">
    <div className="form-box">
      <h1 className="title">Add Product</h1>
      <form className="product-form">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Enter your Product Name" className="input" />
        <input type="text" value={price} onChange={(e)=>setprice(e.target.value)}  placeholder="Enter your Product Price" className="input" />
        <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)}  placeholder="Enter your Product Color" className="input" />
        <input type="text" value={company} onChange={(e)=>setcompany(e.target.value)}  placeholder="Enter your Company Name" className="input" />
        <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)}  placeholder="Enter your Product Category" className="input" />
        <button type="submit" onClick={addproduct} className="submit-btn">Submit</button>
      </form>
    </div>
  </div>
  </>
  );
}
