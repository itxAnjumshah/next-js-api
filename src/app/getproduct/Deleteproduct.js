"use client";

import { useRouter } from "next/navigation"; // ✅ Use 'next/navigation' in app directory

export default function Deleteproduct(props) {
  const router = useRouter(); // ✅ Add parentheses

  const deleterecord = async () => {
    let response = await fetch(`http://localhost:3000/api/products/${props.id}`, {
      method: "DELETE",
    });

    response = await response.json();

    if (response.success) {
      alert("Product deleted");
      router.push("/");
    } else {
      alert("Failed to delete product");
    }
  };

  return <button onClick={deleterecord}>Delete Product</button>;
}
