import Image from "next/image";
import Getproduct from "./getproduct/page";
import AddProductPage from "./addproduct/page";

export default function Home() {
  return (
  <>
 
  <Getproduct/>
  
  
  <AddProductPage/>
  <p>
    API ROUTE http://localhost:3000/api/products
    GET POST  PUT DELETE
  </p>
  </>
  );
}
