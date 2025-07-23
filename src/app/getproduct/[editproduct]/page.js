"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams(); // Get dynamic route param

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");

  useEffect(() => {
    getproductDetails();
  }, []);

  const getproductDetails = async () => {
    const productid = params.editproduct;
    let productData = await fetch("http://localhost:3000/api/products/" + productid);
    productData = await productData.json();

    if (productData.success) {
      const result = productData.result;
      setname(result.name);
      setprice(result.price);
      setcolor(result.color);
      setcompany(result.company);
      setcategory(result.category);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault(); // Prevent page reload

    const productid = params.editproduct;
    let data = await fetch("http://localhost:3000/api/products/" + productid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        color,
        company,
        category,
      }),
    });

    data = await data.json();
    if (data.result) {
      alert("Product has been updated");
    } else {
      alert("Update failed");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4 text-green-700">
        This is put/edit API
      </h1>

      <div className="container">
        <div className="form-box">
          <h1 className="title">Edit Product</h1>
          <form className="product-form" onSubmit={updateProduct}>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Product Name"
              className="input"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              placeholder="Enter your Product Price"
              className="input"
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setcolor(e.target.value)}
              placeholder="Enter your Product Color"
              className="input"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              placeholder="Enter your Company Name"
              className="input"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Enter your Product Category"
              className="input"
            />
            <button onClick={updateProduct} type="submit" className="submit-btn">
              Update product
            </button>
          </form>
        </div>
      </div>

      <button  className="bg-orange-500 flex items-center justify-center mt-4 p-2 text-white rounded">
        <Link href="/">Go to Home</Link>
      </button>
    </>
  );
}
