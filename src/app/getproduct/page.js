import Link from "next/link";
import AddProductPage from "../addproduct/page";
import Deleteproduct from "./Deleteproduct";

const getproduct = async () => {
  let data = await fetch("http://localhost:3000/api/products",{caches:"no-cacha"});
  data = await data.json();
  if (data.result) {
    return data.result;
  } else {
    return [];
  }
};

export default async function Getproduct() {
  const products = await getproduct();

  return (

    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-green-700">This is Fetch/GET API</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-green-600 text-white">
            <tr>
               <th className="py-2 px-4 border">id</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Color</th>
              <th className="py-2 px-4 border">Company</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
<td className="py-2 px-4 border text-center">{item._id}</td>
                <td className="py-2 px-4 border text-center">{item.name}</td>
                <td className="py-2 px-4 border text-center">{item.price}</td>
                <td className="py-2 px-4 border text-center">{item.color}</td>
                <td className="py-2 px-4 border text-center">{item.company}</td>
                <td className="py-2 px-4 border text-center">{item.category || "N/A"}</td>
                <Link href={"getproduct/"+item._id}> <button className="py-2 px-4 border text-center bg-green-500 hover:bg-amber-500">Edit</button> </Link>
                 <button className="py-2 px-4 border text-center bg-red-800 hover:bg-gray-600 hover:text-white"><Deleteproduct id={item._id}/></button> 

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {/* <AddProductPage/> */}
    </>
  );
}
