import React, { useState } from 'react';

const Products = () => {
    const [name, setName]= useState('');
    const[price, setPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[brand, setBrand] = useState('')

    const AddProduct= async()=>{
       let result=await fetch('http://localhost:7000/product',{
        method:"post",
        body:JSON.stringify({name,price,quantity,brand}),
        headers:{
            "Content-Type":"application/json"
        }

       });
       result = await result.json();
       console.log(result);
    }

    return (
        <div>
        <h1>Products Details</h1><br></br><br></br>
        <label for="name">Name : </label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Enter product name"/><br></br><br></br>
        <label for="name">Price : </label>
        <input type="text"  onChange={(e)=>{setPrice(e.target.value)}} value={price}  placeholder="Enter Product price "/><br></br><br></br>
        <label for="name">Quantity : </label>
        <input type="text" onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}  placeholder="Enter Product quantity "/><br></br><br></br>
        <label for="name">Brand : </label>
        <input type="text" onChange={(e)=>{setBrand(e.target.value)}} value={brand} placeholder="Enter Product brand "/><br></br><br></br>
        <button onClick={AddProduct}>Submit</button>
    </div>
    )
}

export default Products;